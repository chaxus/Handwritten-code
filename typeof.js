/*
 * @Author: chaxus nouo18@163.com
 * @Date: 2022-07-17 18:43:02
 * @LastEditors: chaxus nouo18@163.com
 * @LastEditTime: 2022-07-17 18:43:04
 * @FilePath: /Handwritten-code/typeof.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function getType(value) {
    // 判断数据是 null 的情况
    if (value === null) {
      return value + "";
    }
    // 判断数据是引用类型的情况
    if (typeof value === "object") {
      let valueClass = Object.prototype.toString.call(value),
        type = valueClass.split(" ")[1].split("");
      type.pop();
      return type.join("").toLowerCase();
    } else {
      // 判断数据是基本数据类型的情况和函数的情况
      return typeof value;
    }
  }
  