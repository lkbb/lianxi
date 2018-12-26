<template>
    <div class="wrap">
        <div class="img">
            <img src="../assets/wyy.png" class="wyy">
        </div>
        <router-link :to="{path:'/shouji'}">
        <div class="div">
            <div class="login">手机号登录</div>
        </div>
        </router-link>
        <router-link :to="{path:'/zhuce'}">
        <div class="div">
            <div class="zhuce">注册</div>
        </div>
        </router-link>
        <div class="text">游客试用</div>
        <div class="foot">
            <ul>
                <li>
                    <img src="../assets/wx.png" alt="">
                    <span>微信</span>
                </li>
                <li>
                    <img src="../assets/QQ.png" alt="">
                    <span>QQ</span>
                </li>
                <li>
                    <img src="../assets/wb.png" alt="">
                    <span>微博</span>
                </li>
                <li>
                    <img src="../assets/wy.png" alt="">
                    <span>网易邮箱</span>
                </li>
			</ul>

        </div>
    </div>
</template>
<script>

export default {
    
}
</script>
<style scoped>

</style>
