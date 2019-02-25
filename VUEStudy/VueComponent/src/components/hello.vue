<template>
    <div>
        <input v-focus type="text">
        <p v-mycss>啊哈哈</p>
        {{ price | moneyChange }}
        {{ info | contextData }}
    </div>
</template>

<script>
    
export default {
    name: "hello",
    data() {
        return {
            price: 20,
            info: "我是一个文本信息"
        }
    },
    directives: {
        focus: {
            inserted: function (el) {
                el.focus();
            }
        },
        mycss: {
            inserted: function (el) {
                el.style.color = "red";
            }
        }
    },
    filters: {
        moneyChange(value) {
            if (typeof value === "number") {
                return "￥" + value;
            }
            return value;
        },
        contextData(value) {
            return value + new Date();
        }
    }
}

</script>

<style>

</style>