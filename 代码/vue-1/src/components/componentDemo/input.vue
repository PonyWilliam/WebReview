<template>
    <div>
        <input type="text" placeholder="您要添加的代办事件" v-model="title">
        <button @click="addTitle">添加</button>
    </div>
</template>
<script>
    import event from './event'
    export default{
        data(){
            return{
                title:''
            }
        },
        methods:{
            addTitle(){
                if(this.title == ''){
                    alert('必须输入内容');
                    return
                }
                this.$emit('add',this.title)
                event.$emit('addTitle',this.title)
                this.title = ''
            }
        }
    }
</script>