"use strict";

/**
 * Expose compositor.
 */

module.exports = compose;

/**
 * Compose `middleware` returning
 * a fully valid middleware comprised
 * of all those which are passed.
 *
 * @param {Array} middleware
 * @return {Function}
 * @api public
 */

function compose(middleware) {
  // 对每一项进行校验
  // middleware必须是一个数组
  if (!Array.isArray(middleware))
    throw new TypeError("Middleware stack must be an array!");
  for (const fn of middleware) {
    // 数组内的每个元素必须是一个函数
    if (typeof fn !== "function")
      throw new TypeError("Middleware must be composed of functions!");
  }

  /**
   * @param {Object} context
   * @return {Promise}
   * @api public
   */
  // 返回一个函数，该函数接收context和next两个参数，并返回一个Promise
  return function (context, next) {
    // last called middleware #
    // 重置index为-1
    let index = -1;
    // 执行dispatch(0)
    return dispatch(0);

    function dispatch(i) {
      // 禁止在一个函数中重复调用next():当next()重复调用，i就会小于index，就会抛出错误
      if (i <= index)
        return Promise.reject(new Error("next() called multiple times"));
      // index = 1是记住上一次中间件的的调用，确保只能调用一次
      index = i;
      // 取出middleware第i个函数
      let fn = middleware[i];
      // middleware 为空的话就将 next 赋值给 fn
      if (i === middleware.length) fn = next;
      // 没有下一个了的话直接返回 Promise.resolve()
      if (!fn) return Promise.resolve();
      try {
        // fn(context, dispatch.bind(null, i + 1))
        // 其实就是对应我们async中间件 async(ctx, next) context就是上下文对象, dispatch.bind(null, i + 1)就是下一个中间件函数
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
      } catch (err) {
        return Promise.reject(err);
      }
    }
  };
}

// 简化版compose
// 这样就可能更好理解了。
// simpleKoaCompose
/*
const [fn1, fn2, fn3] = stack;
const fnMiddleware = function(context){
    return Promise.resolve(
      fn1(context, function next(){
        return Promise.resolve(
          fn2(context, function next(){
              return Promise.resolve(
                  fn3(context, function next(){
                    return Promise.resolve();
                  })
              )
          })
        )
    })
  );
};
*/
// 设计模式：责任链模式（职责链模式）
// 为了避免请求发送者与多个请求处理者耦合在一起，将所有请求的处理者通过前一对象记住其下一个对象的引用而连成一条链；
// 当有请求发生时，可将请求沿着这条链传递，直到有对象处理它为止。
