<template>
    <div>
        <img v-lazy="imgUrl" src="" alt="">
        <img v-lazy="imgObj" src="" alt="">
    </div>
</template>
<script>
export default {
    name: "lazy",
    data() {
        return{
            imgObj: {
                src: 'http://lgbtqtrip.cn/Public/Uploads/2018/12/19/5c19fcbd5a7a9.jpg',
                error: require("../assets/error.jpg"),
                loading: require("../assets/loadding.gif")
            },
            imgUrl: 'http://lgbtqtrip.cn/Public/Uploads/2018/12/19/5c19fcbd5a7a9.jpg'
        }
    }
}
</script>
<style>


</style>