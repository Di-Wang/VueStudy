<template>
    <div>
        <swiper :options="swiperOption">
            <swiper-slide v-for="(banner, index) in banners" :key="index">
                <img :src="banner.images.large" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>

export default {
    name: "helloswiper",
    data() {
        return {
            // banners: [
            //     'http://lgbtqtrip.cn/Public/Uploads/2018/12/19/5c19fcbd5a7a9.jpg', 
            //     'http://lgbtqtrip.cn/Public/Uploads/2018/12/19/5c19fcbd5a7a9.jpg', 
            //     'http://lgbtqtrip.cn/Public/Uploads/2018/10/12/5bc02fe537986.jpeg'
            // ],
            banners:[],
            swiperOption: {
                autoplay: true,
                pagination: {
                    el: '.swiper-pagination'
                }
            }
        }
    },
    created() {
        this.$axios.get( this.HOST + "/v2/movie/in_theaters",{
            params:{
                count: 3,
                start: 6
            }
        })
        .then(res => {
            this.banners = res.data.subjects
            console.log(res.data.subjects)
        })
        .catch(error => {
            console.log(error)
        })
    }
}

</script>
<style scoped>
    img {
        width: 500px;
        height: 350px;
    }
</style>