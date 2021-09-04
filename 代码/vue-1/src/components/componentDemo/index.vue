<template>
    <div>
        <!-- <Input @add="addHandler"></Input>
        <list :list="list" @delete="deleteHandler"></list>
        <p>{{name}}</p>
        <custom-vmodel v-model="name"></custom-vmodel>
        <next-tick></next-tick> -->
        <slot-demo :url="website.url" :method="website.method">
            <template v-slot="slotProps">
                {{1 + Number(slotProps.slotData)}}
            </template>
        </slot-demo>

        <componet :is="NextTickName">123</componet><!--是一个动态属性，可以对应一个组件的名字-->
        <p>
            当前:{{count}}
        </p>
        <button @click="increment">+1</button>
    </div>
</template>
<script>
    import NextTick from './NextTick.vue'
    //import event from './event'
    
    export default{
        components:{
            slotDemo:()=>import('./slotDemo.vue'),
            NextTick
        },
        computed:{
            count(){
                return this.$store.state.count
            }
        },
        data(){
            return{
                list:[
                    {
                        id:1,
                        title:'标题1'
                    },
                    {
                        id:2,
                        title:'标题2'
                    }
                ],
                name:'我',
                website:{
                    url:'http://web.dadiqq.cn',
                    title:'web面试',
                    method:'_blank'
                },
                NextTickName:"NextTick"
            }
        },
        methods:{
            addHandler(title){
                if(this.list.slice(-1)[0]==undefined){
                    this.list.push({id:1,title:title})
                    return
                }
                this.list.push({id:this.list.slice(-1)[0].id + 1,title:title})
            },
            deleteHandler(id){
                this.list = this.list.filter(item => item.id !== id)
            },
            increment(){
                this.$store.commit('increment')
                console.log(this.$store.state.count)
            }
        }
    }
</script>