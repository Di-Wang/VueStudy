<template>
    <div>
        <ul>
            <li>
                <router-link :to="{path:'/'}">helloworld</router-link>
                <router-link :to="{path:urlData.hellwd}">hellwd2</router-link>
                <!-- <router-link to="/">helloworld</router-link> -->
                <!-- <a href="#/">world</a> -->
            </li>
            <li>
                <!-- <router-link :to="wd">hellwd</router-link> -->
                <router-link :to="urlData.hellwd">hellwd</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "navlist",
    data() {
        return{
            urlData:{
                helloworld:"/",
                hellwd:"/wd"
            }
        }
    }
}
</script>
<style scoped>

ul{
    list-style: none;
    text-align: center;
}

ul li{
    display: inline-block;
    margin-right: 20px;
}

</style>