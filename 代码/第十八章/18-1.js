//手写深度比较，模拟loadsh isEqual
function isObject(obj){
    return typeof(obj) === 'object'
}

function isEqual(obj1,obj2){
    if(!isObject(obj1)||!isObject(obj2)){
        return obj1 === obj2;
    }
    // 先取出obj1和obj2的keys，比较个数
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    if(obj1Keys.length !== obj2Keys.length){
        return false;
    }
    for(let key in obj1){
        const res = isEqual(obj1[key],obj2[key])
        if(!res){
            return false;
        }
    }
    //全相等
    return true
}
const obj1 = {
    a:1000,
    b:{
        x:100,
        y:200,
        z:300
    }
}
const obj2 = {
    a:1000,
    b:{
        x:100,
        y:200,
    }
}
console.log(isEqual(obj1,obj2))
