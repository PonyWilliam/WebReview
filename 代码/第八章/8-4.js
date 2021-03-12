// async function fn1(){
//     return 100 // = return Promise.reslove(100)
// }
// !(async function(){
//     res = await fn1()
//     console.log(res)
// })()
// !(async function(){
//     const data1 = await 400 // Promise.reslove(400)
//     console.log(data1)
// })()
// console.log(123)

// !(async function(){
//     const p4 = Promise.reject('err')
//     try{ //try...catch = Promise.then().catch()
//         const res = await p4
//     }catch(ex){
//         console.error(ex)
//     }
// })()

// !(async function(){
//     const p5 = Promise.reject('err1')
//     const res = await p5//被reject，不会执行
//     console.log(res)
// })()

// async function get(url='http://web.dadiqq.cn/header',data=null){
//     xmlhttp = new XMLHttpRequest()
//     XMLHttpRequest.onreadystatechange = function(){
//         if(xmlhttp.readyState == 4){
//             //loaded
//             if(xmlhttp.status==200){
//                 return Promise.resolve(1)
//             }else{
//                 return Promise.reject('http status code:' + xmlhttp.status)
//             }
//         }else{
//             return Promise.reject('can not loaded website,code:'+xmlhttp.readyState)
//         }
//     }
//     xmlhttp.open("GET",url,true)
//     xmlhttp.send(data)
// }
// !(async function(){
//     try{
//         const res =await get('./8-1.js',null)//转换为同步执行
//         console.log(res)
//     }catch(ex){
//         console.error(ex)
//     }

// })()


async function async1(){
    console.log('async1 start') // 2
    await async2()
    console.log('async1 end')//后面的都是async2执行完后的东西,5
}
async function async2(){
    console.log('async2') //3重要
}
console.log('script start') //1
async1()
console.log('script end') // 4
//同步代码执行完毕，采用event loop去找异步代码