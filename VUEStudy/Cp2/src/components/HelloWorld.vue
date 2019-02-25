<template>
  <div class="hello">
    <div class="block">
      <span class="demonstration">默认 Hover 指示器触发</span>
      <el-carousel>
        <el-carousel-item v-for="(img,index) in imgs" :key="index">
          <img :src="img" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      imgs: [
        "http://lgbtqtrip.cn/Public/Uploads/2018/12/19/5c19fcbd5a7a9.jpg",
        "http://lgbtqtrip.cn/Public/Uploads/2018/10/12/5bc02fe537986.jpeg",
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.el-carousel{
  width: 500px;
}

.el-carousel img{
  width: 100%;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

</style>
