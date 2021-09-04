<template>
    <div>
        <p>{{num}}</p>
        <p>{{double1}}</p>
        <input type="number" v-model="double2">
    </div>
</template>
<script>
    export default{
        data(){
            return {num:20}
        },
        computed:{
            double1(){
                return this.num *2;
            },
            double2:{
                get(){
                    return this.num * 2;
                },
                set(val){
                    this.num = val / 2;//双向绑定
                }
            }
        }
    }

</script>