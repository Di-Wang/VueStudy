<template>
  <div class="hello">
    
    <div>
      <ul>
        <li v-for="news in newsData">
          <span>{{ news.code }}</span>
          <span>{{ news.symbol }}</span>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      newsData:[]
    }
  },
  created() {
    this.$axios("https://api.coindesk.com/v1/bpi/currentprice.json",{
      params:{
        type: "junshi",
        count: 30
      }
    })
    .then(res => {
      this.newsData = res.data.bpi;
      console.log(res.data.bpi);
    })
    .catch(error => {
      console.log(error);
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
