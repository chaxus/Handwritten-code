/*
 * @Author: chaxus nouo18@163.com
 * @Date: 2022-07-17 18:47:15
 * @LastEditors: chaxus nouo18@163.com
 * @LastEditTime: 2022-07-17 18:47:18
 * @FilePath: /Handwritten-code/ajax-promise.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// promise 封装实现：
function getJSON(url) {
    // 创建一个 promise 对象
    let promise = new Promise(function(resolve, reject) {
      let xhr = new XMLHttpRequest();
      // 新建一个 http 请求
      xhr.open("GET", url, true);
      // 设置状态的监听函数
      xhr.onreadystatechange = function() {
        if (this.readyState !== 4) return;
        // 当请求成功或失败时，改变 promise 的状态
        if (this.status === 200) {
          resolve(this.response);
        } else {
          reject(new Error(this.statusText));
        }
      };
      // 设置错误监听函数
      xhr.onerror = function() {
        reject(new Error(this.statusText));
      };
      // 设置响应的数据类型
      xhr.responseType = "json";
      // 设置请求头信息
      xhr.setRequestHeader("Accept", "application/json");
      // 发送 http 请求
      xhr.send(null);
    });
    return promise;
  }
  