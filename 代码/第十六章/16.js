const input1 = document.getElementById('input1')
const test = document.getElementById('test')
// let timer1;
// input1.addEventListener('keyup',function(){
//     if (timer1){
//         clearTimeout(timer1);
//     }
//     timer1 = setTimeout(function(){
//         console.log(input1.value)
//         //清空
//         timer1 = null;
//     },Math.random()*500 + 500)
// })

//防抖
function debounce(fn,delay=500){
    // timer 在闭包中
    let timer = null;

    return function(){
        if(timer){
            clearTimeout(timer);
        }
        timer1 = setTimeout(function(){
            fn.apply(this,arguments)
            timer = null;
        },delay);
    }
}

//节流，保持一定频率触发
function throttle(fn,freq){
    let timer = null
    return function(){
        if(timer){return}//返回空，不处理
        timer = setTimeout(()=>{
            fn.apply(this, arguments)
            timer=null})
    }
}

test.addEventListener('drag',throttle(function(e){
    console.log(e.offsetX,e.offsetY)
    e.target.style.position = 'absolute'
    e.target.style.left = e.offsetX
    e.target.style.top = e.offsetY
    console.log(e.target)
}))