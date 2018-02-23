const EventEmitter = require('./events');
class Man extends EventEmitter { }
const man = new Man();
let buyPack = (who) => {
    console.log(who+'买包');
}
let buyCar = (who) => {
    console.log(who+'买车');
}
console.log(EventEmitter.defaultMaxListeners); // 默认允许监听数量为10超过10会出现警告
man.setMaxListeners(1) // 设置最大监听数
console.log(man.getMaxListeners()); // 获取监听数
man.on('newListener',function(eventName,callback){
    console.log(eventName,callback);
});
man.once('有钱了', buyPack); // 只绑定一次
man.on('有钱了', buyCar);
man.on('有钱了', buyCar);
console.log(man.listenerCount('有钱了'));// 监听个数3
//MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 
//2 有钱了 listeners added. Use emitter.setMaxListeners() to increase limit
man.removeListener('有钱了',buyPack);
man.emit('有钱了','给心仪的女孩'); // 此时代码执行后，对应的buyPack会被移除掉
man.emit('有钱了','给心仪的女孩'); // buyPack动作将不会再次执行
