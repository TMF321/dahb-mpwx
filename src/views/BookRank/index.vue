<template>
  <div class="page-book-rank">
    <!-- header -->
    <div data-v-6c553214 class="header">
      <div data-v-6c553214 class="van-nav-bar">
        <div class="van-nav-bar-left">
          <i class="van-icon icon-jiantou_z"></i>
        </div>
        <div class="van-nav-bar-title">排行榜</div>
        <div class="van-nav-bar-right"></div>
      </div>
    </div>
    <!-- rank -->
    <div class="bookRank">
      <div class="rankItem rink">
        <p class="rankTitle text">热书榜单</p>
        <div class="item">
          <div class="rankContent">
            <img
              src="http://images01.mopimg.cn/imgs/20171208/20171208_54333e929b007712694cbf59af75ddb7_3_4_200.jpg"
            />
            <div class="itemlist">
              <div class="flex">
                <p class="flexs">
                  <span class="index flexs index0">1</span>
                  <span class="bookName">婚里婚外</span>
                </p>
                <span class="bookAuthor">钱多多</span>
              </div>
              <div class="flex">
                <p class="flexs">
                  <span class="index flexs index1">2</span>
                  <span class="bookName">超级村医</span>
                </p>
                <span class="bookAuthor">蓝蓝天空</span>
              </div>
              <div class="flex">
                <p class="flexs">
                  <span class="index flexs index2">3</span>
                  <span class="bookName">总裁，情难自禁</span>
                </p>
                <span class="bookAuthor">惹人爱</span>
              </div>
            </div>
          </div>
          <i class="van-icon icon-jiantou_y"></i>
        </div>
      </div>

      <div class="rankItem">
        <p class="rankTitle">畅销榜单</p>
        <div class="item">
          <div class="rankContent">
            <img
              src="http://images01.mopimg.cn/imgs/20180308/20180308_331c99db357fddff24f446b6b6b9fbeb_3_4_200.jpg"
            />
            <div class="itemlist flex">
              <div class="flex">
                <p class="flexs">
                  <span class="index flexs index0">1</span>
                  <span class="bookName">帝少追缉令，天才萌宝亿万妻</span>
                </p>
                <span class="bookAuthor">猫小咪</span>
              </div>
              <div class="flex">
                <p class="flexs">
                  <span class="index flexs index1">2</span>
                  <span class="bookName">乡村小神农</span>
                </p>
                <span class="bookAuthor">吹牛笔</span>
              </div>
              <div class="flex">
                <p class="flexs">
                  <span class="index flexs index2">3</span>
                  <span class="bookName">绝世武神</span>
                </p>
                <span class="bookAuthor">净无痕</span>
              </div>
            </div>
          </div>
          <i class="van-icon icon-jiantou_y"></i>
        </div>
      </div>

      <div class="rankItem">
        <p class="rankTitle">完本榜单</p>
        <div class="item">
          <div class="rankContent">
            <img
              src="http://images01.mopimg.cn/imgs/20180208/20180208_f474e43a580eeffaa8c71511f48b71ff_3_4_200.jpg"
            />
            <div class="itemlist">
              <div class="flex">
                <p class="flexs">
                  <span class="index flexs index0">1</span>
                  <span class="bookName">绝世武神</span>
                </p>
                <span class="bookAuthor">净无痕</span>
              </div>
              <div class="flex">
                <p class="flexs">
                  <span class="index flexs index1">2</span>
                  <span class="bookName">昏婚欲睡</span>
                </p>
                <span class="bookAuthor">步从容</span>
              </div>
              <div class="flex">
                <p class="flexs">
                  <span class="index flexs index2">3</span>
                  <span class="bookName">桃运村支书</span>
                </p>
                <span class="bookAuthor">久石</span>
              </div>
            </div>
          </div>
          <i class="van-icon icon-jiantou_y"></i>
        </div>
      </div>

      <div class="rankItem">
        <p class="rankTitle">新书榜单</p>
        <div class="item">
          <div class="rankContent">
            <img
              src="http://images01.mopimg.cn/imgs/20180518/20180518_1bbce134d35735e48b21dc638c159eed_3_4_200.jpg"
            />
            <div class="itemlist">
              <div class="flex">
                <p class="flexs">
                  <span class="index flexs index0">1</span>
                  <span class="bookName">贵女毒心：邪王嗜宠无下限</span>
                </p>
                <span class="bookAuthor">凉粉</span>
              </div>
              <div class="flex">
                <p class="flexs">
                  <span class="index flexs index1">2</span>
                  <span class="bookName">先婚后爱：顾先生宠妻如宝</span>
                </p>
                <span class="bookAuthor">一鹿小跑</span>
              </div>
              <div class="flex">
                <p class="flexs">
                  <span class="index flexs index2">3</span>
                  <span class="bookName">盛世狂妃：傻女惊华</span>
                </p>
                <span class="bookAuthor">安懒</span>
              </div>
            </div>
          </div>
          <i class="van-icon icon-jiantou_y"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookRank'
}
</script>

<style lang="scss" scoped>
.page-book-rank {
  display: flex;
  overflow: hidden;
  flex-direction: column;
  flex: 1;
  height: 100%;
  .header {
    height: 40px;
    margin-bottom: 15px;
    .van-nav-bar {
      height: 40px;
      line-height: 40px;
      background: #f9f9f9;
      position: relative;
      text-align: center;
      z-index: 1;
      .van-nav-bar-left {
        left: 15px;
        font-size: 14px;
        position: absolute;
        bottom: 0;
        .van-icon {
          position: relative;
          display: inline-block;
          font-family: "iconfont" !important;
          font-size: 14px;
          text-rendering: auto;
          color: #434343;
          vertical-align: middle;
        }
        .icon-jiantou_z::before {
          content: "\e613";
        }
      }
      .van-nav-bar-title {
        font-size: 17px;
        max-width: 60%;
        color: #222;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin: 0 auto;
      }
      .van-nav-bar-right {
        font-size: 14px;
        position: absolute;
        bottom: 0;
        right: 15px;
      }
    }
  }
  .bookRank {
    background: #f4f4f4;
    .rankItem {
      padding: 0 15px;
      margin-top: 8px;
      background: #fff;
      color: #333;
      .rankTitle {
        font-size: 18px;
        padding: 20px 0;
      }
      .text {
        padding-top: 5px;
      }
      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .rankContent {
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 57.5;
            height: 75.5px;
            margin-right: 19px;
          }
          .itemlist {
            display: flex;
            align-items: baseline;
            flex-direction: column;
            height: 75.5px;
            justify-content: space-between;
            .flex {
              display: flex;
              justify-content: center;
              align-items: flex-end;
              .flexs {
                display: flex;
                justify-content: center;
                align-items: center;
                .index {
                  width: 16px;
                  height: 16px;
                  margin-right: 10px;
                  border-radius: 50%;
                  font-size: 12px;
                  color: #fff;
                }
                .index0 {
                  background: #ff4b50;
                }
                .index1 {
                  background: #f60;
                }
                .index2 {
                  background: #ff990f;
                }
                .bookName {
                  overflow: hidden;
                  display: -webkit-box;
                  -webkit-line-clamp: 1;
                  -webkit-box-orient: vertical;
                  font-size: 15px;
                  color: #222;
                }
              }
              .bookAuthor {
                font-size: 13px;
                margin-left: 5px;
                color: #999;
                min-width: 65px;
                overflow: hidden;
              }
            }
          }
        }
        .van-icon {
          position: relative;
          display: inline-block;
          font-family: "iconfont" !important;
          font-size: 14px;
          text-rendering: auto;
          color: rgb(211, 211, 211);
        }
        .icon-jiantou_y::before {
          content: "\e60d";
        }
      }
    }
    .rink {
      margin-top: 0;
    }
  }
}
</style>
