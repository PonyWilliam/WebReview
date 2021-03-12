// const div1 = document.getElementById('div1')
// const p = document.createElement('p')
// p.innerHTML = 'hello'
// div1.appendChild(p)
// console.log(p.parentNode)
// const div1ChildNode = Array.prototype.slice.call(div1.childNodes).filter(
//     child=>{
//         if(child.nodeName ==='P'){
//             return true
//         }
//         return false
//     }
// )
// console.log(div1ChildNode)

//插入很多哥list-item
// let timer1
// timer1 = new Date()
// const list = document.getElementById('list')
// const frag = document.createDocumentFragment()
// for(let i = 0;i<1000;i++){
//     const li = document.createElement('li')
//     li.innerHTML = 'List item ' + (i + 1)
//     //最好不要一个个插入，特别影响性能，最好一次性插入
//     frag.appendChild(li)
// }
// list.appendChild(frag)//一次性渲染。
// console.log(new Date() - timer1)

const ua = navigator.userAgent
const isChrome = ua.indexOf('Chrome')
console.log(isChrome)

//screen
console.log(screen.width)
console.log(screen.height)

//通用事件绑定
// function bindEvent(elem, type, fn) {
//     elem.addEventListener(type, fn)
// }
// const btn1 = document.getElementById('button1')
// const body = document.body
// bindEvent(btn1,'click',event=>{
//     console.log(event.target)
//     event.preventDefault()
//     event.stopPropagation()
//     alert('click')
// })

// bindEvent(body,'click',e=>{
//     alert('取消')
// })

//事件代理

// const div2 = document.getElementById('div2')
// bindEvent(div2, 'click', event => {
//     event.preventDefault()
//     const target = event.target
//     if (target.nodeName === 'A') {
//         alert(target.innerHTML)
//     }
// })

function bindEvent(elem, type, selector, fn) {
    if (fn == null) {
        //传入的是三个参数
        fn = selector
        selector = null
    }
    elem.addEventListener(type, event => {
        const target = event.target
        if (selector) {
            //代理绑定
            if (target.matches(selector)) {
                fn.call(target, event)
            }
        } else {
            //普通绑定
            fn.call(target, event)
        }
    })
}

bindEvent(div2, 'click', function(event) {
    //selector是筛选
    event.preventDefault()
    alert(this.innerHTML)
})