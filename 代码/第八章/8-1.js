// const p1 = new Promise((resloved,reject)=>{

// })
// console.log('p1',p1)

// const p2 = new Promise((resloved,reject)=>{
//     setTimeout(()=>{
//         resloved("123")
//     })
// })
// console.log('p2',p2) // 同步执行完成后放入异步
// setTimeout(()=>{console.log(p2)})

// const p3 = new Promise((resloved,reject)=>{
//     setTimeout(()=>{
//         reject("123")
//     })
// })
// setTimeout(()=>{console.log(p3)})


// const p1 = new Promise((reslove,reject)=>{
//     setTimeout(()=>{
//         reslove('123')
//     },1000)
// })
// p1.then((res)=>{
//     alert(res)
// })

const p1 = Promise.resolve().then(()=>{return 100})//reslove 触发后续then
const p2 = Promise.resolve().then(()=>{throw new Error("123")})//rejected 触发后续catch
 //在then里面报错，则返回rejected，虽然第一步then成功了，但还是会被卡住。
 p1.then(()=>{console.log('p1:我会被触发')})
 p2.then(()=>{console.log('p2:我不会被触发')}).catch(()=>{console.log('p2:我会被触发')})

 const p3 =Promise.reject('my error').catch(err=>{
     console.error(err)
 })
p3.then(()=>{console.log('上一个没有返回错误，所以我还是能执行')})

//触发顺序由嵌套层数确定，嵌套越深，触发越后面。