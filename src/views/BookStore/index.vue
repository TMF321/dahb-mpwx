<template>
  <div class="page-bookstore">
    <div class="bookframe">
      <!-- header -->
      <div class="header">
        <div class="van-nav-bar">
          <div class="van-nav-bar-left">
            <i class="van-icon icon-jiantou_z"></i>
          </div>
          <div class="van-nav-bar-title">书架</div>
          <div class="van-nav-bar-right">
            <span class="van-nav-bar-text">管理</span>
          </div>
        </div>
      </div>
      <!-- yes与no -->
      <div class="van-popup">
        <p class="skin-bookName">您确定删除所选书籍吗？</p>
        <div class="alertFooter">
          <a href="javascript:;" class="flex skin-x">取消</a>
          <a href="javascript:;" class="flex skin-p">确定</a>
        </div>
      </div>
      <!-- list -->
      <div class="bookLists list">
        <div class="van-list">
          <div class="van-list-loading">
            <div class="van-loading-circular">
              <span class="van-loading-spinner">
                <svg viewBox="25 25 50 50" class="van-loading-block">
                  <circle cx="50" cy="50" r="20" fill="none" />
                </svg>
              </span>
            </div>
            <span class="van-loading-text">加载中...</span>
          </div>
        </div>

        <div class="empty">
          <div class="noresult"></div>
          <div class="noText">暂无书籍</div>
          <div class="skin-btn">去书城看看~</div>
        </div>
      </div>
    </div>
    <!-- content -->
    <div class="backTop">
      <img
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSI0NCIgdmlld0JveD0iMCAwIDM2IDQ0Ij4KICA8bWV0YWRhdGE+PD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PjwvbWV0YWRhdGE+CjxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICMxM2NiZDc7CiAgICAgICAgZmlsbC1ydWxlOiBldmVub2RkOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8cGF0aCBpZD0i55+p5b2iXzYiIGRhdGEtbmFtZT0i55+p5b2iIDYiIGNsYXNzPSJjbHMtMSIgZD0iTTY5NSwxMTQ3LjFMNjc3LDExMjhsLTE4LDE5LjFoMTEuMjdWMTE2NmgxMy40NnYtMTguOUg2OTVabTAsME02NjIsMTEyMmgzMHYySDY2MnYtMloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NTkgLTExMjIpIi8+Cjwvc3ZnPgo="
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookStore'
}
</script>

<style lang="scss" scoped>
.page-bookstore {
  display: flex;
  overflow: hidden;
  flex-direction: column;
  flex: 1;
  height: 100%;
  .bookframe {
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
          .van-nav-bar-text {
            font-size: 15px;
            color: #666;
            margin: 0 -15px;
            padding: 0 15px;
            display: inline-block;
            vertical-align: middle;
          }
        }
      }
    }
    .van-popup {
      position: fixed;
      background-color: #fff;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      transition: 0.2s ease-out;
      width: 290px;
      height: 145px;
      text-align: center;
      border-radius: 10px;
      flex-direction: column;
      justify-content: space-between;
      display: none;
      .skin-bookName {
        font-size: 17px;
        height: 100px;
        line-height: 100px;
        color: #222;
      }
      .alertFooter {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        border-top: 0.5px solid #e8e8e8;
        .flex {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          font-size: 18px;
          box-sizing: border-box;
          color: #222;
        }
        .skin-x {
          border-right: 0.5px solid #e8e8e8;
        }
        .skin-p {
          color: #13cbd7;
        }
      }
    }
    .bookLists {
      margin: 0 15px;
      .van-list {
        .van-list-loading {
          text-align: center;
          display: none;
          .van-loading-circular {
            width: 16px;
            height: 16px;
            margin-right: 5px;
            display: inline-block;
            vertical-align: middle;
            z-index: 0;
            font-size: 0;
            line-height: 0;
            position: relative;
            .van-loading-spinner {
              z-index: -1;
              width: 100%;
              height: 100%;
              position: relative;
              display: inline-block;
              box-sizing: border-box;
              animation: van-rotate 0.8s linear infinite;
              animation-duration: 2s;
              .van-loading-block {
                width: 100%;
                height: 100%;
                circle {
                  stroke-width: 3;
                  stroke-linecap: round;
                  animation: van-circular 1.5s ease-in-out infinite;
                  stroke: #c9c9c9;
                }
              }
            }
          }
          .van-loading-text {
            display: inline-block;
            vertical-align: middle;
            font-size: 13px;
            color: #999;
            line-height: 50px;
          }
        }
      }
      .empty {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 80px;
        .noresult {
          width: 135px;
          height: 170px;
          background: url("../../assets/icon/store.png") no-repeat 50%;
          background-size: cover;
        }
        .noText {
          font-size: 17px;
          color: #999;
        }
        .skin-btn {
          margin-top: 20px;
          width: 164px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          font-size: 16px;
          border-radius: 40px;
          color: #fff;
          background: #13cbd7;
        }
      }
    }
    .list {
      margin-top: 15px;
    }
  }

  .backTop {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(0);
    transition: -webkit-transform 0.3s;
    transition: transform 0.3s, -webkit-transform 0.3s;
    img {
      width: 18px;
      height: 22px;
    }
  }
}
</style>
