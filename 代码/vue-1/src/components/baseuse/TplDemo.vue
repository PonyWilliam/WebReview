<template>
    <div>
        <p>文本插值: {{message}}</p>
        <p>{{flag?'yes':'no'}} 只能是js表达式</p>
        <hr/>
        <p v-html="rawHtml">
            <span>这个子元素将会被覆盖</span>
        </p>
        <p :id="dynamic"></p>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                message:'helloworld',
                flag:true,
                rawHtml:'指令 原始html <ul><li>love</li><li></li></ul>',
                dynamic:`id-${Date.Now()}`
            }
        }
    }
</script>