## 遇到的问题

在开发过程中会遇到频率很高的事件或者连续的事件，如果不进行性能的优化，就可能会出现页面卡顿的现象，比如：

1. 鼠标事件：mousemove(拖曳)/mouseover(划过)/mouseWheel(滚屏)
2. 键盘事件：keypress(基于ajax的用户名唯一性校验)/keyup(文本输入检验、自动完成)/keydown(游戏中的射击)
3. window的resize/scroll事件(DOM元素动态定位)

为了解决这类问题，常常使用的方法就是**throttle(节流)**和**debounce(去抖)**

## 认识throttle和debounce

throttle和debounce的作用就是确认事件执行的方式和时机，举个简单的例子看看两者的区别：

- debounce：假设你正在乘电梯上楼，当电梯门关闭之前发现有人也要乘电梯，礼貌起见，你会按下开门开关，然后等他进电梯；如果在电梯门关闭之前，又有人来了，你会继续开门；这样一直进行下去，你可能需要等待几分钟，最终没人进电梯了，才会关闭电梯门，然后上楼。

  所以debounce的作用是，当调用动作触发一段时间后后，才会执行该动作，若在这段时间间隔内又调用此动作则将重新计算时间间隔

- throttle：假设你正在乘电梯上楼，当电梯门关闭之前发现有人也要乘电梯，礼貌起见，你会按下开门开关，然后等他进电梯；但是，你是个没耐心的人，你最多只会等待电梯停留一分钟，在这一分钟内，你会开门让别人进来，但是过了一分钟之后，你就会关门，让电梯上楼。

  所以throttle的作用是，预先设定一个执行周期，当调用动作的时刻大于等于执行周期则执行该动作，然后进入下一个新周期。

## 使用场景    

下面给出了throttle和debounce的常用场景

**debounce**

Use it to discard a number of fast-pace events until the flow slows down

- When typing fast in a textarea that will be processed: you don't want to start to process the text until user stops typing.
- When saving data to the server via AJAX: You don't want to spam your server with dozens of calls per second.

**throttle**

Same use cases than debounce, but you want to warranty that there is at least some execution of the callbacks at certain interval

- If that user types really fast for 30 secs, maybe you want to process the input every 5 secs.
- It makes a huge performance difference to throttle handling scroll events. A simple mouse-wheel movement can trigger dozens of events in a second. 
    