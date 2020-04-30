<template>
  <div class="page-search">
    <div class="search">
      <div class="header">
        <div class="headerLeft">
          <i class="van-icon icon-jiantou_z"></i>
        </div>
        <div class="headerTitle">
          <form action="" class="searchfarm" onsubmit="return false;">
            <input type="search" placeholder="请输入关键字" />
          </form>
        </div>
        <div class="headerRight">
          <a href="javascript:;"><span class="skin-p">搜索</span></a>
        </div>
      </div>
      <div class="hotsearchLists">
        <p class="hotSearchTitle">热门搜索</p>
        <div class="list flex"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style lang="scss" scoped>
.page-search {
  display: flex;
  flex-direction: column;
  height: 100%;
  .search {
    height: 100%;
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 40px;
      width: 100%;
      border-bottom: 0.5px solid #f2f2f2;
      background: #f9f9f9;
      .headerLeft {
        font-size: 14px;
        margin-left: 15px;
        .van-icon {
          position: relative;
          display: inline-block;
          text-rendering: auto;
          color: #7a7a7a;
          font-family: "iconfont" !important;
          font-size: 14px;
        }
        .icon-jiantou_z:before {
          content: "\e613";
        }
      }
      .headerTitle {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 30px;
        background: #f2f2f2;
        border-radius: 30px;
        margin: 0 9px 0 10px;
        overflow: hidden;
        .searchfarm {
          width: 100%;
          background: #f2f2f2;
          border-radius: 30px;
          height: 30px;
          position: relative;
          input {
            width: 100%;
            height: 30px;
            background: #f2f2f2;
            border-radius: 30px;
            box-sizing: content-box;
            padding-left: 15px;
            border: none;
            outline: none;
          }
        }
      }
      .headerRight {
        width: 40px;
        margin-right: 15px;
        .skin-p {
          color: #13cbd7;
          display: inline-block;
          vertical-align: middle;
          font-size: 13px;
          line-height: 50px;
        }
      }
    }
    .hotsearchLists {
      width: calc(100% - 30px);
      text-align: left;
      padding: 0 15px;
      .hotSearchTitle {
        margin: 20px 0;
        color: #999;
        font-size: 14px;
      }
      .list {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
      }
    }
  }
}
</style>
