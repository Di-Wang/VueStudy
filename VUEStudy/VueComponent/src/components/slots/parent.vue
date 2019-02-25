<template>
    <div class="parent">
        父组件
        <Child>
            <div slot="s1">
                <p>我是插槽1</p>
                <p>我是插槽11</p>
            </div>
           
            <p slot="s2" slot-scope="props">{{ props.text }}</p>

            <p>我是插槽3</p>
        </Child>
    </div>
</template>
<script>

import Child from './Child.vue'

export default {
    name: "parent",
    data() {
        return {
            
        }
    },
    components: {
        Child
    }
}

</script>
<style>

</style>