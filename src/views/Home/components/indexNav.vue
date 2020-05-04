<template>
  <div class="navbar">
    <div class="navbarBox">
      <router-link to="/book-store" class="navbarItem">
          <i class="map01"></i>
          <span class="skin-navbar">书架</span>
      </router-link>
    </div>
    <div class="navbarBox">
      <router-link to="/book-kind" class="navbarItem">
          <i class="map02"></i>
          <span class="skin-navbar">分类</span>
      </router-link>
    </div>
    <div class="navbarBox">
      <router-link to="/book-rank" class="navbarItem">
          <i class="map03"></i>
          <span class="skin-navbar">排行</span>
      </router-link>
    </div>
    <div class="navbarBox">
      <router-link to="/search" class="navbarItem">
          <i class="map04"></i>
          <span class="skin-navbar">找书</span>
      </router-link>
    </div>
    <div class="navbarBox">
      <router-link to="/user" class="navbarItem">
          <i class="map05"></i>
          <span class="skin-navbar">我的</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexNav'
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 69px;
  margin: 20px 20px 0 20px;
  .navbarBox {
    width: 46px;
    height: 69px;
    .navbarItem {
      display: block;
      height: 69px;
    }
  }

  .map01 {
    display: inline-block;
    width: 46px;
    height: 46px;
    margin-right: 10px;
    background: url("~@/assets/icon/sj.png") no-repeat;
    background-size: cover;
  }

  .map02 {
    display: inline-block;
    width: 46px;
    height: 46px;
    margin-right: 10px;
    background: url("~@/assets/icon/fl.png") no-repeat;
    background-size: cover;
  }

  .map03 {
    display: inline-block;
    width: 46px;
    height: 46px;
    margin-right: 10px;
    background: url("~@/assets/icon/ph.png") no-repeat;
    background-size: cover;
  }

  .map04 {
    display: inline-block;
    width: 46px;
    height: 46px;
    margin-right: 10px;
    background: url("~@/assets/icon/zs.png") no-repeat;
    background-size: cover;
  }

  .map05 {
    display: inline-block;
    width: 46px;
    height: 46px;
    margin-right: 10px;
    background: url("~@/assets/icon/me.png") no-repeat;
    background-size: cover;
  }
  .skin-navbar {
    color: #666;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 19px;
    width: 28px;
    margin-left: 10px;
  }
}
</style>
