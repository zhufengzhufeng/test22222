console.log('hello');

console.log('info');


console.error('错误');
console.warn('警告');

function read(){
    function a(){
        b()
        function b(){
            console.trace();
        }
    }
    a();
}
read()

let time = setTimeout(function(){
    console.log(1000)
},1000)
time.unref();
setTimeout(function(){
    time.ref();
})


process.on('uncaughtException',function(err){
    console.log(err)
})
function err(){
    throw new Error('报错了');
}
err();