<template>
    <div>
        post

        <ul>
            <li v-for="movie in movieData" :key="movie.id">
                <p>{{ movie.title }}</p>
                <p>{{ movie.year }}</p>
                <!-- <p>{{ movie.images.small }}</p> -->
                <img :src="movie.images.small" alt="">
            </li>
        </ul>
    </div>
</template>

<script>

import qs from "qs"

export default {
    name: "posts",
    data () {
        return{
            movieData:[]
        }
    },
    created () {
        // this.$axios.post("", qs.stringify({
        //     user_id: "iwen@qq.com",
        //     password: "iwen123"
        // }))
        var url = this.HOST + "/movie/in_theaters";
        // console.log(url);
        this.$axios.get(url, {
            params: {
                count: 12,
                start: 0
            }
        })
        .then(res => {
            this.movieData = res.data.subjects;
            // console.log(res.data.subjects);
        })
        .catch(error => {
            console.log(error);
        })
    }
}
</script>

<style>

ul{
    width: 80%;
    margin: 0 auto;
}

ul li{
    width: 30%;
    margin-right: 5%;
    list-style-type: none;
    float: left;
    min-height: 500px;
}

ul li:nth-child(3n){
    margin-right: 0%;
}

</style>