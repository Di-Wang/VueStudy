<template>
    <div>
        <p v-bind:class="styleObj">haha</p>
        <p v-bind:calss="[demo1,demo2]"></p>
        <div v-bind:class="[{active : isActive},'info-'+id]"></div>
        <ul>
            <li :class="[{active:index % 2 == 0},'info-' + id]" v-for="(name, index) in names" :key="index">{{ name }}</li>
        </ul>
        <div>
            <p :style="stObj">哈哈哈哈哈</p>
        </div>
    </div>
</template>
<script>

    export default {
        name: "style",
        data() {
            return {
                isActive:true,
                isDemo: true,
                demo1:"demo11",
                demo2:"demo22",
                id:10,
                names:["iwen","ice","ime","frank"],
                stObj:{
                    color:"red",
                    fontSize:"30px"
                }
            }
        },
        computed: {
            styleObj() {
                return {
                    "active":this.isActive,
                    "demo":this.isDemo
                }
            }
        },
    }

</script>
<style>

.active{
    background: #f1f1f1;
}

</style>