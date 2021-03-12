function create(){
    let a = 100
    return function(){
        console.log(a)
    }
}
let fn = create() // fn接收到函数
const a = 200
fn() //执行函数，实现闭包。变量在实现地作用域才有效。答案:100


function print(fn){
    const b = 200
    fn()
}
const b = 50
function fn2(){
    console.log(b)
}
print(fn2) //50
