function EventEmitter(){
    EventEmitter.init.call(this); // 初始化内部私有方法
}
EventEmitter.init = function(){
    // 为了存放一对多的对应关系 例如后期 
    // {'有钱',[buyPack,buyCar],'没钱':[hungry]}
    this._events = Object.create(Object.create(null));
}
EventEmitter.prototype.on = function(eventName,callback){ // 绑定事件
    if(eventName !== 'newListener'){ // 如果监听的是newListener
        // 用户如果监听了newListener事件，我们还要触发newListener事件执行
        return this._events.newListener&&this._events.newListener.forEach(fn=>fn(eventName,callback))
    }
    // 调用on方法就是维护内部的_events变量,使其生成一对多的关系
    if(this._events[eventName]){ // 如果存在这样一个关系只需在增加一项即可
        this._events[eventName].push(callback);
    }else{
        // 增加关系
        this._events[eventName] = [callback]
    }
}
// 此时emit时可能会传递多个参数,除了第一个外均为回调函数触发时需要传递的参数
EventEmitter.prototype.emit = function(eventName,...args){ // 触发事件
    if(this._events[eventName]){
        // 如果有对应关系
        this._events[eventName].forEach(callback => {
            callback.apply(this,args); // 在执行回调时将参数传入,保证this依然是当前实例
        });
    }
}
EventEmitter.prototype.removeListener = function(eventName,callback){
    if(this._events[eventName]){ // 如果绑定过,我在尝试着去删除
        // filter返回false就将当前项从数组中删除，并且返回一个新数组
        // 如果函数上的自定义属性和我们要删除的函数相等也将将这个函数删除
        this._events[eventName] = this._events[eventName].filter(fn=>fn!==callback&&fn.listener!==callback);
    }
}
EventEmitter.prototype.once = function(eventName,callback){
    function wrap(...args){ // wrap执行时会传入参数
        callback.apply(this,args); // 将once绑定的函数执行
        // 当wrap触发后移除wrap
        this.removeListener(eventName,wrap);
    }
    wrap.listener = callback; // 这里要注意此时绑定的是wrap,防止删除时无法删除，增加自定义属性
    this.on(eventName,wrap); // 这里增加了warp函数，目的是为了方便移除
    
}
// 导出事件触发器类
module.exports = EventEmitter; 