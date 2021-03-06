// 防抖
// 连续的事件只需触发一次回调的场合。具体有：
// 搜索框搜索输入。只需用户最后一次输入完，再发送请求；
// 用户名、手机号、邮箱输入验证；
// 浏览器窗口大小改变后，只需窗口调整完后，再执行resize事件中的代码，防止重复渲染。
// 在频繁的触发下，只有足够的空闲时间，才执行一次。
// ○ 生活中：比如坐公交，就是一定时间内，如果有人持续刷卡上车，司机就不会发车，没人上车了，司机才会开车.
// ○ 应用场景：账号密码的输入验证，只有等用户输完之后，才需要进行验证。
// ● 要点：
// ○ 行为触发后隔一段时间出发事件
// ○ 多次触发则清除上次延时的触发，并重新开始

// fn是你要调用的函数，delay是防抖的时间
function debounce(fn, delay) {
    // timer是一个定时器
    let timer = null;
    // 返回一个闭包函数，用闭包保存timer确保其不会销毁，重复点击会清理上一次的定时器
    return function () {
      // 保存事件参数，防止fn函数需要事件参数里的数据
      let arg = arguments;
      // 调用一次就清除上一次的定时器
      clearTimeout(timer);
      // 开启这一次的定时器
      timer = setTimeout(() => {
        // 若不改变this指向，则会指向fn定义环境
        fn.apply(this, arg);
      }, delay)
    }
  }
  