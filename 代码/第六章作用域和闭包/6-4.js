console.log('bind demo')

//模拟bind
Function.prototype.apply1 = function(){
    const args = Array.prototype.slice.call(arguments)
    //获取所需要绑定的this，并且作为新的this使用
    const t = args.shift()

    //this可以获取到当前调用对象

}
Function.prototype.bind1 = function(){
    // 将参数拆解为数组
    const args = Array.prototype.slice.call(arguments)
    //获取this(数组第一项)
    const t = args.shift()
    //fn1.bind(...)中的fn1
    const self = this //self就是fn1

    return function(){
        return self.apply(t,args) // t是传入的新对象

    }
}

function fn1(a,b){
    console.log('this',this)
    console.log(a,b)
    return 'this is fn1'
}
const fn2 = fn1.bind1({x:100},10,20)

const res = fn2()

console.log(res)