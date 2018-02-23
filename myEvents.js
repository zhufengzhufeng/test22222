const EventEmitter = require('./events');
class Man extends EventEmitter { }
const man = new Man();
let buyPack = (who) => {
    console.log(who+'买包');
}
let buyCar = (who) => {
    console.log(who+'买车');
}
man.once('有钱了', buyPack); // 只绑定一次
man.on('有钱了', buyCar);
man.removeListener('有钱了',buyPack);
man.emit('有钱了','给心仪的女孩'); // 此时代码执行后，对应的buyPack会被移除掉
man.emit('有钱了','给心仪的女孩'); // buyPack动作将不会再次执行