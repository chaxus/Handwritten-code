/*
● 创建一个空的对象
● 链接到原型
● 绑定this指向，执行构造函数
● 如果该函数没有返回对象，则返回this
需要注意的是：除 Function 外的所有构造函数，通过new生成的类型都是 'object'
但是new Function生成的是function类型
 */
function myNew (func, ...args) {
    // Object.create() 方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
    const obj = Object.create(func.prototype) 
    const result = func.apply(obj, args)
    return result instanceof Object ? result : obj
  }
  
  const p = myNew(Person, "huihui", 123)
  console.log(p) // Person {name: "huihui", age: 123}
  p.sayName() // huihui
  