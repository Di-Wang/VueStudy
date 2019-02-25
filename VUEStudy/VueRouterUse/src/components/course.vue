<template>
    <div>
        <NavList/>
        <div class="left">
            课程页面
            <ul>
                <li><router-link exact to="/course/java">java</router-link></li>
                <li><router-link to="/course/web">前端</router-link></li>
                <li>android</li>
            </ul>
        </div>
       <div class="right">
           <!-- 视图区域 -->
           <router-view></router-view>
       </div>
    </div>
</template>
<script>

import NavList from "./navList"

export default {
    name:"course",
    data() {
        return{

        }
    },
    components: {
        NavList
    }
}

</script>
<style scoped>

.left, .right{
  float: left;  
}

.right{
    margin-left: 50px;
}

</style>