/**
 * 1.判断引用对象是否能相等。
 */
let stu1 = {}
let stu2 = {}
console.log(stu1==stu2)
console.log(stu1===stu2)

/**深拷贝 */
const obj = {
    age:20 ,
    name: 'xxx',
    address: {
        city:'beijing',
    },
    arr:['a','b','c']
}
function deepClone(obj = {}){
    if(typeof obj !== 'object' || obj==null){
        return obj
    }
    let result
    if(obj instanceof Array){
        result = []
    }else{
        result = {}
    }
    for(let key in obj){
        //判断是否是原型
        if(obj.hasOwnProperty(key)){
            result[key] = deepClone(obj[key]) 
        }
    }
    //返回结果
    return result
}
let obj1 = deepClone(obj)
obj1.address.city = 'shanghai'
console.log(obj.address.city)