
// 浅拷贝： 浅拷贝指的是将一个对象的属性值复制到另一个对象，如果有的属性的值为引用类型的话，那么会将这个引用的地址复制给对象，
// 因此两个对象会有同一个引用类型的引用。浅拷贝可以使用  Object.assign 和展开运算符来实现。

// 深拷贝： 深拷贝相对浅拷贝而言，如果遇到属性值为引用类型的时候，它新建一个引用类型并将对应的值复制给它，
// 因此对象获得的一个新的引用类型而不是一个原有类型的引用。深拷贝对于一些对象可以使用 JSON 的两个函数来实现，
// 但是由于 JSON 的对象格式比 js 的对象格式更加严格，所以如果属性值里边出现函数或者 Symbol 类型的值时，会转换失败

// JSON.parse(JSON.stringify(obj))
// 这个方法可以简单粗暴的实现深拷贝，但是还存在问题，
// 拷贝的对象中如果有函数，undefined，symbol，当使用过JSON.stringify()进行处理之后，都会消失。

// 深拷贝的实现
function deepCopy(object) {
    if (!object || typeof object !== "object") return;
  
    let newObject = Array.isArray(object) ? [] : {};
  
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        newObject[key] =
          typeof object[key] === "object" ? deepCopy(object[key]) : object[key];
      }
    }
  
    return newObject;
  }
  

