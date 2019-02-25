<template>
    <div class="index-wrap">
        <div class="index-left">
            <div class="index-left-block">
                <h2>全部产品</h2>
                <template v-for="(product,index) in productList">
                    <h3>{{ product.category }}</h3>
                    <ul>
                        <li v-for="item in product.list">
                            <a target="_blank" :href="item.url">{{ item.name }}</a>
                            <span v-if="item.hot" class="hot-tag">HOT</span>
                        </li>
                    </ul>
                    <!-- <div v-if="index%2 == 0" class="hr"></div> -->
                    <div class="hr"></div>
                </template>
            </div>
            <div class="index-left-block lastest-name">
                <h2>最新消息</h2>
                <ul>
                    <li v-for="item in news">
                        <a target="_blank" :href="item.code">{{ item.code }}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="index-right">
            <div class="swiper-box">
                <swiper :options="swiperOption">
                    <swiper-slide>
                        <a target="_blank" href="http://www.baidu.com"><img class="swiperImg" src="../assets/swiperShow/1.jpg" alt=""></a>
                    </swiper-slide>
                    <swiper-slide>
                        <img class="swiperImg" src="../assets/swiperShow/2.jpg" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="swiperImg" src="../assets/swiperShow/3.jpg" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img class="swiperImg" src="../assets/swiperShow/4.jpg" alt="">
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <div class="index-board-list">
                <div v-for="(board,index) in boardList" class="index-board-item" :class="['index-board-' + board.tag,{ 'line-last' : index%2 !== 0 } ]">
                    <div class="index-board-item-inner">
                        <h2>{{ board.title }}</h2>
                        <p>{{ board.desc }}</p>
                        <div class="index-board-button button">
                            <router-link :to="{ path: '/details/' + board.tag }">立即购买</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: "layout",
    data() {
        return {
            swiperOption: {
                autoplay: true,
                pagination: {
                    el: '.swiper-pagination',
                },
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
            boardList: [
                {
                    title: "开放产品",
                    desc: "开放产品是一款开放产品",
                    tag: "earth"
                },
                {
                    title: "品牌营销",
                    desc: "品牌营销品牌营销品牌营销",
                    tag: "loud"
                },
                {
                    title: "使命必达",
                    desc: "使命必达使命必达使命必达",
                    tag: "car"
                },
                {
                    title: "勇攀高峰",
                    desc: "勇攀高峰勇攀高峰勇攀高峰",
                    tag: "hill"
                }
            ],
            news: [],
            productList:[
                {
                    category: "手机应用类",
                    list: [
                        {
                            name: "91助手",
                            url: "http://www.baidu.com",
                            hot: false
                        },
                        {
                            name: "豌豆荚",
                            url: "http://www.baidu.com",
                            hot: true
                        },
                        {
                            name: "金山毒霸",
                            url: "http://www.baidu.com",
                            hot: false
                        }
                    ]
                },
                {
                    category: "开发工具",
                    list: [
                        {
                            name: "WebStorm",
                            url: "http://www.baidu.com",
                            hot: false
                        },
                        {
                            name: "HBuiler",
                            url: "http://www.baidu.com",
                            hot: false
                        },
                        {
                            name: "Sublime Text 3",
                            url: "http://www.baidu.com",
                            hot: true
                        },
                        {
                            name: "Atom",
                            url: "http://www.baidu.com",
                            hot: false
                        }
                    ]
                }
            ]
        }
    },
    created() {
        this.$axios.get("https://api.coindesk.com/v1/bpi/currentprice.json",{
            params:{
                count: 10,
                type: "top"
            }
        })
        .then(res => {
            this.news = res.data.bpi;
        })
        .catch(error => {
            console.log(error);
        })
    }
}

</script>
<style scoped>

.index-wrap{
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
}
.index-left{
    float: left;
    width: 300px;
    text-align: left;
}
.index-right{
    float: left;
    width: 900px;
}
.index-left-block{
    margin: 15px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    height: 350px;
}
.index-left-block .hr{
    margin-bottom: 20px;
    height: 1px;
    width: 100%;
    background: #ddd;
}
.index-left-block .hr:last-child{
    margin-bottom: 0;
    height: 0;
    width: 100%;
}

.index-left-block h2{
    background: #4fc08d;
    color: #fff;
    padding: 10px 15px;
    margin-bottom: 20px;
}
.index-left-block h3{
    padding: 0 15px 5px 15px;
    font-weight: bold;
    color: #222;
}
.index-left-block ul{
    padding: 15px 10px;
}
.index-left-block li{
    padding: 5px;
}
.index-board-list{
    overflow: hidden;
    margin-top: 15px;
}
.index-board-item{
    float: left;
    width: 440px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    padding: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
}
.index-board-item-inner{
    min-height: 125px;
    padding-left: 180px;
}
.index-board-car .index-board-item-inner{
    background: url(../assets/images/1.png) no-repeat;
}
.index-board-loud .index-board-item-inner{
    background: url(../assets/images/2.png) no-repeat;
}
.index-board-earth .index-board-item-inner{
    background: url(../assets/images/3.png) no-repeat;
}
.index-board-hill .index-board-item-inner{
    background: url(../assets/images/4.png) no-repeat;
}
.index-board-item h2{
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
}
.line-last{
    margin-right: 0;
}
.index-board-button{
    margin-top: 20px;
}
.button{
    background: #4fc08d;
    color: #fff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
}
.button:hover{
    background: #4fc08d;
}
.lastest-news{
    min-height: 350px;
}
.hot-tag{
    background: red;
    color: #fff;
}
.new-item{
    display: inline-block;
    width: 230px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.swiperImg{
    width: 100%;
}

.swiper-box{
    margin-top: 15px;
}

</style>