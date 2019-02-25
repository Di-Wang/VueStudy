<template>
    <div class="sales-board">
        <div class="sales-board-intro">
            <h2>流量分析</h2>
            <p>流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析流量分析</p>
        </div>

        <div class="sales-board-form">
            <div class="sales-board-line">
                <div class="sales-board-line-left">购买数量：</div>
                <div class="sales-board-line-right">
                    <Counter @counter="getGoodInfo('counter', $event)" :max="Counter.max" :min="Counter.min"/>
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">产品类型：</div>
                <div class="sales-board-line-right">
                    <DownMenu @downmenu="getGoodInfo('downmenu', $event)" :DownData="DownMenu"/>
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">有效时间：</div>
                <div class="sales-board-line-right">
                    <Radios @radios="getGoodInfo('radios', $event)" :Radios="Radios" />
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">价钱：</div>
                <div class="sales-board-line-right">
                    {{ getTotalPrice }}元
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left"></div>
                <div class="sales-board-line-right">
                    <a class="button" href="#">立即购买</a>
                </div>
            </div>
        </div>

        <div class="sales-board-des">
            <h2>产品说明</h2>
            <p>产品说明产品说明产品说明产品说明产品说明产品说明产品说明产品说明产说明产品说明产品说明产品说明产品说明产品说明产品说明产品说明产品说明产品说明产品说明</p>

            <h3>用户行为指标</h3>
            <ul>
                <li>品说明产品说明产品说明产品说明产品说明产品说明产品说明产品说明产品说明产品说明产品说明</li>
                <li>品说明产品说明产品说明产品品说明产品说明</li>
                <li>品说明产品说明产品说明产品说明产品说明产说明产品说明</li>
                <li>品说明产品说明产品说明产产品说明</li>
                <li>品说明产品说明产品产品说明产品说明</li>
            </ul>

            <h3>浏览网站方式</h3>
            <ul>
                <li>品说明产品说明产品说明产明产品说明产品说明</li>
                <li>品说明产品说明产品明产说明产品说明</li>
                <li>品说明产品说明产品说明产品说明产品说明</li>
                <li>品说明产品说明产品说明产品说明</li>
            </ul>
        </div>
    </div>
</template>
<script>

import Counter from './components/Counter'
import DownMenu from './components/DownMenu'
import Radios from './components/Radios'

export default {
    name: "car",
    data() {
        return {
            totalprice: 0,
            counter: 1,
            downmenu: 1,
            radios: 1,
            Counter: {
                max: 10,
                min: 1
            },
            DownMenu: [
                {
                    name: "初级版",
                    value: 1
                },
                {
                    name: "中级版",
                    value: 2
                },
                {
                    name: "高级版",
                    value: 3
                }
            ],
            Radios: [
                {
                    title: "1个月",
                    value: 1
                },
                {
                    title: "3个月",
                    value: 3
                },
                {
                    title: "半年",
                    value: 6
                },
                {
                    title: "年费",
                    value: 12
                }
            ]
        }
    },
    components: {
        Counter,
        DownMenu,
        Radios
    },
    methods: {
        // getCounterNum(data) {
        //     console.log(data)
        // },
        // getDownMenu(data) {
        //     console.log(data)
        // },
        // getRadios(data) {
        //     console.log(data)
        // }
        getGoodInfo(key,value) {
            /*
                this:当前组件
            **/
            //console.log(this)
            this[key] = value;
            var readyData = {
                "counter": this.counter,//5元
                "downmenu": this.downmenu,//2元
                "radios": this.radios//10元
            };
            // this.totalprice = readyData.counter*5 + readyData.downmenu*2 + readyData.radios*10;
        }
    },
    computed: {
        getTotalPrice() {
            return this.counter * 5 + this.downmenu * 2 + this.radios * 10
        }
    },
}

</script>
<style scoped>

.sales-board {
    background: #fff;
}
.sales-board-intro h2 {
    font-size: 20px;
    padding: 20px;
}
.sales-board-intro p {
    background: #f7fcff;
    padding: 10px 20px;
    color: #999;
    line-height: 1.8;
}
.sales-board-form {
    padding: 30px 20px;
    font-size: 14px;
}
.sales-board-line {
    clear: both;
    padding-bottom: 20px;
}
.sales-board-line-left {
    display: inline-block;
    width: 100px;
}
.sales-board-line-right {
    display: inline-block;
    width: 75%;
}
.sales-board-des {
    border-top: 20px solid #f0f2f5;
    padding: 20px;
}
.sales-board-des p{
    line-height: 1.6;
}
.sales-board-des h2{
    font-size: 20px;
    padding-bottom: 15px;
}
.sales-board-des h3{
    font-size: 18px;
    font-weight: bold;
    padding: 20px 0 10px 0;
}
.sales-board-des li{
    padding: 5px 0;
}
.sales-board-table{
    width: 100%;
    margin-top: 20px;
}
.sales-board-table th{
    background: #4fc08d;
    color: #fff;
}
.sales-board-table td{
    border: 1px solid #f0f2f5;
    padding: 15px;
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

</style>