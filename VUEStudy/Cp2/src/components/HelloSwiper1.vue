<template>
    <div>
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide>
                <img src="http://lgbtqtrip.cn/Public/Uploads/2018/12/19/5c19fcbd5a7a9.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="http://lgbtqtrip.cn/Public/Uploads/2018/12/19/5c19fcbd5a7a9.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="http://lgbtqtrip.cn/Public/Uploads/2018/10/12/5bc02fe537986.jpeg" alt="">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>

export default {
    name: "helloswiper",
    data() {
        return {
            swiperOption: {
                autoplay: true,
                pagination: {
                    el: '.swiper-pagination'
                }
            }
        }
    }
}

</script>
<style scoped>

img{
    width: 500px;
    height: 350px;
}

</style>