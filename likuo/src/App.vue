<template>
  <div class="wrap">
    <div class="head">
      <img class="head_pic" src="./assets/zuo.png" alt="">
      <span>补换驾照</span>
      <img class="head_pic" src="./assets/gengduo.png" alt="">
    </div>
    <div class="section">
      
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
.wrap{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  .head{
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #999;
    .head_pic{
      width: 25px;
      height: 25px;
    }
  }
  .section{
    width: 100%;
    flex-shrink: 1;
    flex: 1;

  }
}
</style>
