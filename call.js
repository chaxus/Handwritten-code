
/**
* Object()方法
* 如果传入的是值类型 会返回对应类型的构造函数创建的实例
* 如果传入的是对象 返回对象本身
* 如果传入 undefined 或者 null 会返回空对象
*/
// 用来改变函数内部 this 的指向。
// 任何函数都可以调用这两个方法，说明它们是添加在函数原型上的方法（Function.prototype）。
// 调用 call 和 apply 的函数会立即执行。
// call 和 apply 的返回值就是函数的返回值。
// 调用 call 和 apply 指向 undefined 或者 null ，会将 this 指向 window。
// 调用 call 和 apply 指向一个值类型， 会将 this 指向由它们的构造函数创建的实例。
// 调用 call 和 apply 指向一个引用类型， 会将 this 指向这个对象。
Function.prototype._call = function(ctx, ...args) {
  // 判断上下文类型 如果是undefined或者 null 指向window
  // 否则使用 Object() 将上下文包装成对象
  const o = ctx == undefined ? window : Object(ctx)
  // 如何把函数foo的this 指向 ctx这个上下文呢
  // 把函数foo赋值给对象o的一个属性  用这个对象o去调用foo  this就指向了这个对象o
  // 下面的this就是调用_call的函数foo  我们把this给对象o的属性fn 就是把函数foo赋值给了o.fn
  //给context新增一个独一无二的属性以免覆盖原有属性
  const key = Symbol()
  o[key] = this
  // 立即执行一次
  const result = o[key](...args)
  // 删除这个属性
  delete o[key]
  // 把函数的返回值赋值给_call的返回值
  return result
}

