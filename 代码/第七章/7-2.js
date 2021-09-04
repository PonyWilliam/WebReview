const url = 'https://www.rt-thread.org/document/site/figures/4.png'

function loadImage(src){
    return new Promise(
        (resolve,reject)=>{
            const img = document.createElement('img')
            img.onload = () => {
                //回调函数
                resolve(img)//加载完后执行，下面可以用.then继续执行
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
    document.body.appendChild(img)//上一步成功后return的不是一个error就可以继续执行到这一条，如果执行error则不会执行。
}).catch(err=>console.log(err))