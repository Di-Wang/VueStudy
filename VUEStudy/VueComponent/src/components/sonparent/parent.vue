<template>
    <div>
        父组件
        <input v-model="num" type="text" />
        <Child @sendmsg="getmsg" :num="getNum"/>
        {{ info }}
    </div>
</template>
<script>
    
import Child from './Child.vue'

export default {
    name: "parent",
    data() {
        return {
            info: "",
            num: 5
        }
    },
    computed: {
        getNum() {
            return this.num - 0;
        }
    },
    components: {
        Child
    },
    methods: {
        getmsg(data) {
            this.info = data;
        }
    },
}

</script>
<style>

</style>