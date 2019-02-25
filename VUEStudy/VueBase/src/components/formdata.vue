<template>
    <div>
        <input type="text" v-model.number="msg">
        <p>{{ message }}</p>
    </div>    
</template>
<script>
    
export default{
    name:"formdata",
    data(){
        return{
            msg: "hello",
            message: "hello"
        }
    },
    watch:{
        msg:function (data) {
            this.message = data;
            // if (data == "haha") {
            //     console.log("haha你妹");
            // }
            // setTimeout(() => {
            //     $.ajax({
            //         url:"",
            //         data:{
            //             key:data
            //         },
            //         success:function (res) {
            //             this.message = res;
            //         }
            //     })
            // }, 1000);
        }
    }
}

</script>
<style>

</style>