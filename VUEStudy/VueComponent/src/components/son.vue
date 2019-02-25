<template>
    <div>
        儿子:{{ title }}-{{ lifemsg }}-{{ num * 2 }} -{{ objdata.name }}
    </div>
</template>
<script>

    export default {
        name: "son",
        data() {
            return {

            }
        },
        props:{
            title:[String,Number],
            lifemsg:{
                type:String,
                require:true
            },
            num:{
                type: Number,
                default:5
            },
            objdata:{
                type:Object,
                default:function () {
                    return {
                        name:"未知",
                        age:10
                    }
                }
            }
        }
    }

</script>
<style scoped>
    img {
        width: 300px;
    }
</style>