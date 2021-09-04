<template>
<div>
    <ul>
        <li v-for="item in list" :key="item.id">
            {{item.title}}
            <button @click="deleteItem(item.id)">删除</button>
        </li>
    </ul>
</div>
</template>
<script>
    import event from './event'
    export default{
        props:{
            list:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        methods:{
            deleteItem(id){
                this.$emit('delete',id)
            },
            addTitleHandler(title){
                console.log('watch title:' + title)
            }
        },
        mounted(){
            event.$on('addTitle',this.addTitleHandler)
            console.log('mounted')
        },
        beforemounted(){
            console.log('before mounted')
        },
        beforeDestory(){
            event.$off('addTitle',this.addTitleHandler)//
        },
        beforeUpdate(){
            console.log('list before update')
        },
        updated(){
            console.log('list updated')
        },
        created(){
            console.log("list created")
        },
        brforeCreate(){
            console.log('list before create')
        }
    }
</script>