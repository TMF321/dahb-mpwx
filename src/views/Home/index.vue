<template>
  <div class="page-home">
    <!--头部，轮播图-->
    <div class="swiper">
      <div class="van-swipe">
        <div class="van-swipe-track">
          <div class="van-swipe-item">
            <a href="#">
              <img class="box" src="../../assets/icon/banner01.jpg" />
            </a>
          </div>

          <div class="van-swipe-item">
            <a href="#">
              <img class="box" src="../../assets/icon/banner02.jpg" />
            </a>
          </div>

          <div class="van-swipe-item">
            <a href="#">
              <img class="box" src="../../assets/icon/banner03.jpg" />
            </a>
          </div>

          <div class="van-swipe-item">
            <a href="#">
              <img class="box" src="../../assets/icon/banner04.jpg" />
            </a>
          </div>

          <div class="van-swipe-item">
            <a href="#">
              <img class="box" src="../../assets/icon/banner05.jpg" />
            </a>
          </div>
        </div>

        <div class="van-swipe-indicators">
          <i class="van-swipe-indicator--active"></i>
          <i class></i>
          <i class></i>
          <i class></i>
          <i class></i>
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;

  .swiper {
    height: 156.5px;
    width: 100%;
    overflow: hidden;
    .van-swipe {
      height: 100%;
      overflow: initial;
      position: relative;

      .van-swipe-track {
        float: left;
        height: 100%;

        .van-swipe-item {
          float: left;
          height: 100%;

          .box {
            width: 100%;
            height: 100%;
          }
        }
      }

      .van-swipe-indicators {
        left: 50%;
        bottom: 10px;
        position: absolute;
        height: 6px;
        -webkit-transform: translate3d(-50%, 0, 0);
        transform: translate3d(-50%, 0, 0);

        .van-swipe-indicators > i {
          border-radius: 100%;
          vertical-align: top;
          display: inline-block;
          background-color: #999;
          width: 6px;
          height: 6px;
        }

        .van-swipe-indicators > i:not(:last-child) {
          margin-right: 6px;
        }
        .van-swipe-indicators .van-swipe-indicator--active {
          background-color: #f60;
        }
      }
    }
  }
}
</style>
