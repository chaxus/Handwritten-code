// 浅拷贝是指，一个新的对象对原始对象的属性值进行精确地拷贝，如果拷贝的是基本数据类型，拷贝的就是基本数据类型的值，
// 如果是引用数据类型，拷贝的就是内存地址。如果其中一个对象的引用内存地址发生改变，另一个对象也会发生变化。

// （1）Object.assign()
// （2）扩展运算符
// （3）数组方法实现数组浅拷贝
//     1）Array.prototype.slice
//     2）Array.prototype.concat
// 浅拷贝的实现;

function shallowCopy(object) {
    // 只拷贝对象
    if (!object || typeof object !== "object") return;
  
    // 根据 object 的类型判断是新建一个数组还是对象
    let newObject = Array.isArray(object) ? [] : {};
  
    // 遍历 object，并且判断是 object 的属性才拷贝
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        newObject[key] = object[key];
      }
    }
  
    return newObject;
  }// 浅拷贝的实现;
  
  function shallowCopy(object) {
    // 只拷贝对象
    if (!object || typeof object !== "object") return;
  
    // 根据 object 的类型判断是新建一个数组还是对象
    let newObject = Array.isArray(object) ? [] : {};
  
    // 遍历 object，并且判断是 object 的属性才拷贝
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        newObject[key] = object[key];
      }
    }
  
    return newObject;
  }// 浅拷贝的实现;
  function shallowCopy(object) {
    // 只拷贝对象
    if (!object || typeof object !== "object") return;
    // 根据 object 的类型判断是新建一个数组还是对象
    let newObject = Array.isArray(object) ? [] : {};
    // 遍历 object，并且判断是 object 的属性才拷贝
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        newObject[key] = object[key];
      }
    }
    return newObject;
  }
  