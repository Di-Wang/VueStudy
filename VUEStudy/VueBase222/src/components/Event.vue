<template>
    <div class="event">
        <ul>
            <li @click.once="getItemInfo(index,$event)" v-for="(name, index) in names" :key="index">
                {{ name }}
            </li>
        </ul>

        <input type="text" v-on:keyup.enter="getKeyInfo">

        <button v-on:click="pushArr">按钮</button>

        <button @click="getOdd">我要奇数</button>
        <ul>
            <li v-for="num in wantNums">{{ num }}</li>
        </ul>

        <div>
            <p>{{ msgRe }}</p>
            <p>{{ msgRe }}</p>
            <p>{{ methodsMsgRe() }}</p>
        </div>
    </div>    
</template>
<script>

export default{
    //data中的数据改变会引起视图的改变  MVVM
    data() {
        return {
            names: ["iwen", "ime", "ice"],
            nums: [1, 2, 3, 4, 5, 6, 6, 7],
            wantNums:[],
            message: "hello"
        }
    },
    methods: {
        getItemInfo(data, event) {
            //事件中的默认参数event
            console.log(this.names[data])
            console.log(event);
        },
        getKeyInfo(event) {
            console.log(event);
        },
        pushArr() {
            // this.names.push("frank");
            this.names.concat(["frank"]);
        },
        getOdd() {
            this.nums.filter(num => {
                if (num % 2 !== 0) {
                    this.wantNums.push(num);
                }
            })
        },
        methodsMsgRe() {
            return this.message.split('').reverse().join('');
        }
    },
    computed: {
        msgRe() {
            return this.message.split('').reverse().join(''); 
        }
    },
}

</script>
<style>

</style>