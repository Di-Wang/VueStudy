<template>
    <div class="child">
        子组件
        <slot name="s1"></slot>
        <hr>
        <slot name="s2" text="我是数据传递"></slot>

        <slot>
            <p>如果没传递视图，则显示我</p>
        </slot>
    </div>
</template>
<script>

export default {
    name: "child",
    data() {
        return {
            
        }
    }
}

</script>
<style scoped>

p{
    color: red;
}

</style>