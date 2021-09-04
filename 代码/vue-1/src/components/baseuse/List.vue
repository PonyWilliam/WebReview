<template>
    <div>
        <ul>
            <li v-for="{item,index} in listObj" :key="item.id">
                {{index}} - {{item.id}} - {{item.title}}
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                list1:[{
                    id:'1',
                    title:'hello'
                },{
                    id:'2',
                    title:'world'
                }
                ]
            }
        }
    }
</script>