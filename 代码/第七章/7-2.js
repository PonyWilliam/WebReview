const url = 'https://www.rt-thread.org/document/site/figures/4.png'

function loadImage(src){
    return new Promise(
        (resolve,reject)=>{
            const img = document.createElement('img')
            img.onload = () => {
                //回调函数
                resolve(img)//加载万后执行img
            }
            img.onerror = ()=>{
                reject(new Error('图片加载失败 ' + src))
            }
            img.src = src
        }
    )
}
loadImage(url).then(
    (img) => {
        console.log(img.width)//打印宽度
        return img
    }
).then(img=>{
    console.log(img.height)
    return img
}).then(img => {
    document.body.appendChild(img)
}).catch(err=>console.log(err))