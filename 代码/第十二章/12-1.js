// const xhr = new XMLHttpRequest()
// xhr.open('GET', '/12.json', true) // true是异步请求
// xhr.onreadystatechange = function() {
//     if (xhr.readyState == 4) {
//         if (xhr.status == 200) {
//             console.log(JSON.parse(xhr.responseText))
//         } else {
//             alert('can not load data,code:' + xhr.status)
//         }
//     }
// }
// xhr.send(null)

// function ajax(url) {
//     return new Promise((reslove, reject) => {
//         const xhr = new XMLHttpRequest()
//         xhr.open('GET', url)
//         xhr.onreadystatechange = function() {
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     reslove(JSON.parse(xhr.responseText))
//                 } else {
//                     reject(new Error('can not load, code:' + xhr.status))
//                 }
//             }
//         }
//         xhr.send()
//     })
// }
// const url = './12.json'
// ajax(url).then(res => { console.log(res) }).catch(err => { console.log(err) })
// async function ajax(url) {
//     return new Promise((reslove, reject) => {
//         const xhr = new XMLHttpRequest()
//         xhr.open('GET', url)
//         xhr.onreadystatechange = function() {
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     reslove(JSON.parse(xhr.responseText))
//                 } else {
//                     reject(new Error('can not load, code:' + xhr.status))
//                 }
//             }
//         }
//         xhr.send()
//     })
// }
// const url = './12.json';
// !(async function() {
//     try {
//         const res = await ajax(url)
//         console.log(res)
//     } catch (ex) {
//         console.log(ex)
//     }
// })()

fetch('./1.json').then((res) => {
    return res.json()
}).then(function(myJson) {
    console.log(myJson)
}).catch(err => {
    console.log(err) //这是61行的err
})