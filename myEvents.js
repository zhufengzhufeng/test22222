const EventEmitter = require('./events');
class Man extends EventEmitter { }
let man = new Man();
man.on('有钱',()=>{console.log('买房')});
man.prependListener('有钱',()=>{console.log('买车')}); // 在事件监听器数组开头追加
man.emit('有钱'); // 买车 买房

