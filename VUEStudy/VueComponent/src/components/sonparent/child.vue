<template>
    <div>
        子组件
        <button @click="sendMsg" >传递</button>
    </div>
</template>
<script>

export default {
    name: "child",
    data() {
        return {
            msg:'我是子组件数据',
           
        }
    },
    props: {
        num: {
            type: Number,
            default: 5 
        },
    },
    computed: {
        addNum() {
            return this.num * 5; 
        }
    },
    methods: {
        sendMsg(event) {
            //两个参数： 参数1： key    参数2：数据
            this.$emit('sendmsg', this.addNum)
        }
    },
}

</script>
<style>

</style>