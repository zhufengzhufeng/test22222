const EventEmitter = require('events');
class Man extends EventEmitter { }
const man = new Man();
man.on('有钱了', () => {
    console.log('买包');
});
man.on('有钱了', () => {
    console.log('买车');
});
man.emit('有钱了');