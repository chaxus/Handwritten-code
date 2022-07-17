// 用来改变函数内部 this 的指向。
// call/apply 改变了函数的 this 上下文后 马上 执行该函数。
// bind 则是返回改变了上下文后的函数, 不执行该函数 。
// all/apply 返回 fun 的执行结果。
// bind 返回 fun 的拷贝，并指定了 fun 的 this 指向，保存了 fun 的参数。
// bind绑定了作用域后就不能再更改了
Function.prototype._bind = function(ctx, ...args) {
    // 下面的this就是调用_bind的函数,保存给_self
    const _self = this
    // bind 要返回一个函数, 就不会立即执行了
    const newFn = function(...rest) {
      // 调用 call 修改 this 指向
      return _self.call(ctx, ...args, ...rest)
    }
    if (_self.prototype) {
      // 复制源函数的prototype给newFn 一些情况下函数没有prototype，比如箭头函数
      newFn.prototype = Object.create(_self.prototype);
    }
    return newFn
  }
  