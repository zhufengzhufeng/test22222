let EventEmitter = require('events');
let util = require('util');

function Bell (){

}
util.inherits(Bell,EventEmitter);

let bell = new Bell();

console.log(bell.__proto__.constructor);



// node inspect 脚本名字
// n继续向下走
// s step in 进入
// o out 出去
// 进入repl环境
// watch  watchers
// exlution


// nextTick应用

// js模块化
// umd
// require.cache缓存绝对路径好处 多个模块调用可以缓存
// resolve 指向知道模块的路径  但又不想加载这个模块
// main 入口 
// extension 扩展模块 c++ 二进制模块
// json写上 可以省略依次查找

//commonjs
// 每个文件都是一个模块 有自己的作用域

// 在模块内部 module变量代表模块本身

// module.exports 代表模块对外接口

// require的特点
//模块被加载的时候执行，加载后缓存
// 一旦出现某个模块被循环加载，就只输出已执行的部分，未被执行的部分不会被执行