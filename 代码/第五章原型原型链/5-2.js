console.log('jq demo')
class jQuery{
    constructor(selector){
        //dom 查询
        if (typeof(selector) === 'string'){
            let temp = selector.split('')[0] || null
            let result = []
            if (temp == '#'){
                const res = document.getElementById(selector.substring(1,selector.length))
                result.push(res)
            }else if(temp == '.'){
                result = document.getElementsByClassName(selector.substring(1,selector.length))
            }else{
                result = document.getElementsByTagName(selector)
            }
            const length = result.length
            for(let i=0;i<length;i++){
                this[i] = result[i]
            }
            this.length = length
        }else{
            return Error("can not under stand selector")
        }
        
    }
    get(index){
        return this[index]
    }
    each(fn){
        for(let i = 0;i<this.length;i++){
            const elem = this[i]
            fn(elem)
        }
    }
    on(type, fn){
        return this.each(elem=>{
            elem.addEventListener(type,fn,false)
        })
    }
    html(str){
        return this.each(elem=>{
            elem.innerHTML = str
        })
    }
}
//插件形式
jQuery.prototype.dialog = function(info){
    alert(info)
}

//复写
//使用extends
$ = function(elem){
    return new jQuery(elem)
}
