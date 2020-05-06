<template>
  <div class="activity">
    <div class="activityHeader">
      <span class="activityName">本周排行</span>
    </div>

    <div class="activityBox">
      <div class="activityBox-track">
        <div class="activityBox-item">
          <div class="skectill" v-for="item in data" :key="item.bookid">
            <a href="#">
              <img src="{{ item.imgjs }}" />
              <p class="bookName">{{ item.bookname }}</p>
              <p>
                <span>{{ item.author }}</span>
              </p>
            </a>
          </div>

          <!-- <div class="skectill">
            <a href="#">
              <img
                src="http://images01.mopimg.cn/imgs/20180518/20180518_92c50f883504c8d9ef585895492cdb4d.JPEG"
              />
              <p class="bookName">逆天萌宝妖孽娘亲</p>
              <p>
                <span>纳兰凤瑾</span>
              </p>
            </a>
          </div>-->

          <!-- <div class="skectill">
            <a href="#">
              <img
                src="http://images01.mopimg.cn/imgs/20180308/20180308_a82ce04707d1d8f9db739e3b14cf04c7.JPEG"
              />
              <p class="bookName">极品村医</p>
              <p>
                <span>大地恩情</span>
              </p>
            </a>
          </div>
          </div>-->

          <!-- <div class="activityBox-item">
          <div class="skectill">
            <a href="#">
              <img
                src="http://images01.mopimg.cn/imgs/20190107/20190107_699eabb5bb125b65ba5955f46e043ead.JPEG"
              />
              <p class="bookName">闪婚甜妻：高冷老公晚上约</p>
              <p>
                <span>筱筱风</span>
              </p>
            </a>
          </div>

          <div class="skectill">
            <a href="#">
              <img
                src="http://images01.mopimg.cn/imgs/20180208/20180208_5cf9f250aa3b07cf981862f896c431db.JPEG"
              />
              <p class="bookName">都市最强战医</p>
              <p>
                <span>人生几渡</span>
              </p>
            </a>
          </div>

          <div class="skectill">
            <a href="#">
              <img
                src="http://images01.mopimg.cn/imgs/20180529/20180529_66d09d51b62c01e368bbd73bb7860d80.JPEG"
              />
              <p class="bookName">皇后万万岁</p>
              <p>
                <span>浮生如梦</span>
              </p>
            </a>
          </div>
          </div>-->

          <!-- <div class="activityBox-item">
          <div class="skectill">
            <a href="#">
              <img
                src="http://images01.mopimg.cn/imgs/20180308/20180308_225b73c5282fb0781610ed1145544145.JPEG"
              />
              <p class="bookName">蚀心总裁：爱有千千劫</p>
              <p>
                <span>琴公子</span>
              </p>
            </a>
          </div>

          <div class="skectill">
            <a href="#">
              <img
                src="http://images01.mopimg.cn/imgs/20180208/20180208_d7e43b3280e2cf232e7f56485d904d98.JPEG"
              />
              <p class="bookName">九焰至尊</p>
              <p>
                <span>爱吃白菜</span>
              </p>
            </a>
          </div>

          <div class="skectill">
            <a href="#">
              <img
                src="http://images01.mopimg.cn/imgs/20180529/20180529_f91debdc06e5fb44baf67ab722f86156.JPEG"
              />
              <p class="bookName">女总裁的顶级高手</p>
              <p>
                <span>天下</span>
              </p>
            </a>
          </div>
          </div>-->
        </div>

        <div class="indicators">
          <i class="indicators-active"></i>
          <i></i>
          <i></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexActivity',

  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.activity {
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  height: 223.5px;
  .activityHeader {
    display: flex;
    margin: 0 10px;
    margin-bottom: 20px;

    .activityName {
      font-size: 17px;
      color: #666;
    }
  }
  .activityBox {
    height: 180.5px;
    position: relative;
    padding-left: 375px;
    width: 1875px;
    transform: translate(-375px, 0px);
    .activityBox-track {
      float: left;
      height: 100%;
      overflow: hidden;
      .activityBox-item {
        float: left;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .skectill {
          display: flex;
          justify-content: center;
          align-content: space-around;
          position: relative;
          width: 98.5px;
          margin: 0 12px;
          img {
            width: 98.5px !important;
            height: 130.5px !important;
          }
          .bookName {
            overflow: hidden;
            -webkit-box-orient: vertical;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            color: #333;
            margin: 2px 0;
            font-size: 14px;
          }
          span {
            display: inline-block;
            line-height: 26px;
            font-size: 12px;
            color: rgb(153, 153, 153);
          }
        }
      }
    }
    .indicators {
      position: absolute;
      top: 20px;
      left: auto;
      right: 0;
      bottom: 10px;
      height: 6px;
      -webkit-transform: translate3d(-50%, 0, 0);
      transform: translate3d(-50%, 0, 0);
      i {
        width: 7px;
        height: 3px;
        border-radius: 20%;
        background: #c9c9c9;
        margin-right: 6px;
        vertical-align: top;
        display: inline-block;
      }
      .indicators i:last-child {
        margin-right: 0;
      }
      .indicators-active {
        background-color: #13cbd7;
      }
    }
  }
}
</style>
