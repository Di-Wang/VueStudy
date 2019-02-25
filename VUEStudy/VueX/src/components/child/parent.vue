<template>
    <div>
        父亲：
        {{ info }}
        <Son :title="msg" @info="handlerMsg"/>
    </div>
</template>
<script>

import Son from './son'

export default {
    name: 'parent',
    data() {
        return{
            msg:"儿子儿子，我是你爸爸",
            info: ""
        }
    },
    components:{
        Son
    },
    methods: {
        handlerMsg(data) {
            this.info = data;
        }
    },
}

</script>
<style>

</style>