var age = 10
var obj = {
  age: 20,
}
function foo(a, b) {
  console.dir(this.age + a + b);
}
// 只需要把第二个参数改成数组形式就可以了。
Function.prototype._apply = function(ctx, array = []) {
  const o = ctx == undefined ? window : Object(ctx)
  //给context新增一个独一无二的属性以免覆盖原有属性
  const key = Symbol()
  o[key] = this
  const result = o[key](...array)
  delete o[key]
  return result
}
foo(3, 4) // => 17
foo._apply(obj, [3, 4]) //=> 27
