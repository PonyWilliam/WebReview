function test(){
    let temp = new Promise((resolove)=>{
        resolove("123")
    },(reject)=>{
       reject("123")
    })
    temp.then((res)=>{console.log(res);return res})
    console.log(123)
}
