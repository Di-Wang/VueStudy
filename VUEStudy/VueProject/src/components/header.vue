<template>
    <div class="app-head">
        <div class="app-head-inner">
            <router-link :to="{path:'/'}">
                <img src="../assets/logo.png" alt="">
            </router-link>
            <span>dadada旗下品牌：云数学院|速学堂|百战程序员</span>
            <div class="head-nav">
                <ul class="nav-list">
                    <li>登录</li>
                    <li class="nav-pile">|</li>
                    <li>注册</li>
                    <li class="nav-pile">|</li>
                    <li>
                        <router-link :to="{path: '/about'}">关于</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: "headers",
    data() {
        return {

        }
    }
}

</script>
<style scoped>

.app-head {
    background: #363636;
    color: #b2b2b2;
    height: 90px;
    line-height: 90px;
    width: 100%;
}
.app-head-inner{
    width: 1200px;
    margin: 0 auto;
}
.head-logo {
    float: left;
}
.app-head-inner span {
    position: relative;
    top: -20px;
}
.app-head-inner img {
    width: 50px;
    margin-top: 20px;
}
.head-nav {
    float: right;
}
.head-nav ul {
    overflow: hidden;
}
.head-nav li {
    cursor: pointer;
    float: left;
}
.nav-pile {
    padding: 0 10px;
}
/* .container{
    width: 1200px;
    margin: 0 auto;
} */


</style>