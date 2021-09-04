<template>
    <div>
        <a v-if="show" :href="url" :target="method">
            <slot :slotData="test">
                默认内容，如果父组件有传入内容，会覆盖这里的内容
            </slot>
        </a>
        <button @click="changeShow">显示/隐藏</button>
    </div>
</template>
<script>
    export default{
        props:['url','method'],
        data(){
            return{
                test:'123',
                show:false
            }
        },
        methods:{
            changeShow(){
                this.show = !this.show
            }
        }
    }
</script>