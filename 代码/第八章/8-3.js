function loadImage(src){
    return new Promise((reslove,reject)=>{
        const img = document.createElement('img')
        img.onload = ()=>{
            reslove(img)
        }
        img.onerror = () =>{
            const err = new Error('图片加载失败' + src)
            reject(err)
        }
        img.src = src
    })
}
const src1 = "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2148934395,3813483537&fm=11&gp=0.jpg";
!(async function(){
    const img1 = await loadImage(src1)//有await必须有async
    console.log(img1.height,img1.width)
})()
