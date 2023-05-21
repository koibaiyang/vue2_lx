<template>
  <div class="app-container">
    <router-view />
    <van-tabbar route active-color="#ee0a24" inactive-color="#000" placeholder>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>

</style>
