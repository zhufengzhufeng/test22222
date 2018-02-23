function EventEmitter(){
    EventEmitter.init.call(this); // 初始化内部私有方法
}
EventEmitter.init = function(){
    // 为了存放一对多的对应关系 例如后期 
    // {'有钱',[buyPack,buyCar],'没钱':[hungry]}
    this._events = Object.create(Object.create(null));
}
EventEmitter.prototype.on = function(eventName,callback){ // 绑定事件
    // 调用on方法就是维护内部的_events变量,使其生成一对多的关系
    if(this._events[eventName]){ // 如果存在这样一个关系只需在增加一项即可
        this._events[eventName].push(callback)
    }else{
        // 增加关系
        this._events[eventName] = [callback]
    }
}
EventEmitter.prototype.emit = function(eventName){ // 触发事件
    if(this._events[eventName]){
        // 如果有对应关系
        this._events[eventName].forEach(callback => {
            callback();
        });
    }
}
// 导出事件触发器类
module.exports = EventEmitter; 