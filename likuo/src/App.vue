<template>
  <div class="wrap">
    <div class="head">
      <img class="head_pic" src="./assets/zuo.png" alt="">
      <span>补换驾照</span>
      <img class="head_pic" src="./assets/gengduo.png" alt="">
    </div>
    <div class="section">
      <div class="nav">
        <span>订单提交</span>
        <span>填写收货地址</span>
        <span>正在办理</span>
        <span>办理完成</span>
      </div>
      <img class="banner" src="./assets/banner.jpg" alt="">
      <router-view></router-view>
      <!-- <div class="list">
        <p><span>服务类型</span><span>换驾照<img src="./assets/you.png" alt=""></span></p>
        <p><span>当前驾照签发城市<img src="./assets/wenhao.png" alt=""></span><span class="ccc">请选择签发地</span></p>
        <p><span>可补换的签发城市<img src="./assets/wenhao.png" alt=""></span><span class="ccc">请选择补换地</span></p>
        <p><span>服务费</span><span class="text">￥399</span></p>
      </div> -->
      <!-- <p class="ppp"><span>服务类型</span><span>换驾照<img src="./assets/you.png" alt=""></span></p> -->
      <img class="fixed" src="./assets/kefu.jpg" alt="">
      <p class="center"><a href="javjscript:;">常见问题？</a></p>
    </div>
    <div class="foot">
      <span class="foot_1">实付：<b class="red">￥399</b></span>
      <span class="button">立即支付</span>
    </div>
  </div>
</template>
<script>
import JSBridge from './utils/JSBridge.js';
export default {
  name: 'app',
  data () {
    return {}
  }
}
</script>
<style lang="scss">
@import './scss/common.scss';
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,body{
  width: 100%;
  height: 100%;
  background: #eee;
}
.wrap{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .head{
    width: 100%;
    flex-shrink: 0;
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #999;
    background: #fff;
    .head_pic{
      width: 25px;
      height: 25px;
    }
  }
  .section{
    width: 100%;
    flex: 1;
    overflow-y: auto;
    .nav{
      width: 100%;
      height: 45px;
      line-height: 45px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background: #fff;
      span{
        display: inline-block;
        height: 40px;
        color: #3AAFFE;
      }
    }
    .banner{
      width: 100%;
    }
    .count{
      width: 100%;
      padding-top: 15px;
      background: #fff;
      padding-bottom: 15px;
      ul{
        list-style: none;
        display: flex;
        li{
          flex:1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .box{
            width: 60px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #000;
            border-radius: 15px;
          }
          img{
            width: 35px;;
          }
          span{
            margin-top: 6px;
            width: 50px;
            text-align: center;
          }
        }
      }
    }
    .list{
      width: 100%;
      margin-top: 15px;
      background: #fff;
      .p{
        width: 100%;
        height: 40px;
        padding: 0 10px;
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        align-items: center;
        img{
          width: 15px;
        }
        .text{
          color: red;
        }
        .ccc{
          color: #ccc;
        }
      }
    }
    .ppp{
      width: 100%;
      height: 40px;
      padding: 0 10px;
      margin-top: 10px;
      border-bottom: 1px solid #ccc;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #fff;
      img{
        width: 15px;
      }
    }
    .fixed{
      position: fixed;
      bottom: 60px;
      right: 15px;
      width: 55px;
      height: 55px;
    }
    .center{
      text-align: center;
      margin-top: 5px;
    }
  }
  .foot{
    width: 100%;
    height: 50px;
    flex-shrink: 0;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .foot_1{
      padding: 0 15px;
    }
    .red{
      color: red;
    }
    .button{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90px;
      height: 100%;
      background: #999;
      color: #fff;
    }
  }
}
</style>
