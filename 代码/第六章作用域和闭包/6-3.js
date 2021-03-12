const zhangsan = {
    name:'zhangsan',
    sayHi() {
        //this 是当前对象
        console.log(this)
    },
    wait(){
        setTimeout(()=>{
            //this指向当前对象
            console.log(this)
        })
    }
}
const lisi = {
    name:'lisi',
    sayHi() {
        //this 是当前对象
        console.log(this)
    },
    wait(){
        setTimeout(function(){
            //普通函数，this指向settimeout方法所在地：window
            console.log(this)
        })
    }
}