function muti(num){
    return new Promise(reslove =>{
        setTimeout(()=>{
            reslove(num * num)
        },1000)
    })
}

const nums =  [1,2,3]
nums.forEach(async (i)=>{
    const res = await muti(i)
    //后面的是回调
    console.log(res)
    //三个被同时算出来了,一旦遍历不会等待，直接执行了三遍。
})

!(async function(){
    for(let i of nums){
        const res = await muti(i)
        console.log(res)
        //会等待
    }
})()