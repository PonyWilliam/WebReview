<template>
    <div id="temp">
        <ul ref="ul1">
            <li v-for="(item,index) in list" :key="index">
                {{item}}
            </li>
        </ul>
        <button @click="addItem">增加三项</button>
    </div>
</template>
<script>
    export default{
        name:'app',
        data(){
            return{
                list: ['a','b','c']
            }
        },
        methods:{
            addItem(){
                this.list.push(`${Date.now()}`)
                this.list.push(`${Date.now()}`)
                this.list.push(`${Date.now()}`)
                this.$nextTick(()=>{
                    const ulElem = this.$refs.ul1
                    console.log(ulElem.childNodes.length)
                })
            }
        }
    }
</script>