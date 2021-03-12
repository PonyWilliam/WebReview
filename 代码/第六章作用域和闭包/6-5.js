//闭包隐藏数据，只提供API

function createCache(){
    const data = {}//闭包中的数据，被隐藏，不被访问
    return {
        set:function(key,val){
            data[key] = val
        },
        set:function(key){
            return data[key]
        }
    }
}
const c = createCache()
c.set('a',10)

console.log(c.get('a'))