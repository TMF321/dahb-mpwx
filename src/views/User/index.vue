<template>
  <div class="page-user">
    <!-- header -->
    <div class="header">
      <div class="van-nav-bar">
        <div class="van-nav-bar-left">
          <i class="van-icon icon-jiantou_z"></i>
        </div>
        <div class="van-nav-bar-title">我的</div>
        <div class="van-nav-bar-right">
          <span class="van-nav-bar-text"></span>
        </div>
      </div>
    </div>
    <!-- body -->
    <div class="my">
      <div class="item">
        <div class="itemLeft">
          <i class="iconfont user1"></i>
          <span class="skin-bookName">我的余额</span>
        </div>
        <div class="itemRIght">
          <span class="currentMoney">
            <font class="skin-p">0</font>书币
          </span>
          <i class="van-icon icon-jiantou_y"></i>
        </div>
      </div>

      <div class="item">
        <div class="itemLeft">
          <i class="iconfont user2"></i>
          <span class="skin-bookName">书币充值</span>
        </div>
        <div class="itemRIght">
          <a href="javascript:;" class="skin-btn goPayment">充值</a>
        </div>
      </div>

      <div class="item">
        <div class="itemLeft">
          <i class="iconfont user3"></i>
          <span class="skin-bookName">我的书架</span>
        </div>
        <div class="itemRIght">
          <i class="van-icon icon-jiantou_y"></i>
        </div>
      </div>

      <div class="item flex applink">
        <div class="itemLeft">
          <i class="iconfont user4"></i>
          <span class="skin-bookName">阅读记录</span>
        </div>
        <div class="itemRIght">
          <i class="van-icon icon-jiantou_y"></i>
        </div>
      </div>

      <div class="item">
        <div class="itemLeft">
          <i class="iconfont user5"></i>
          <span class="skin-bookName">App下载</span>
        </div>
        <div class="itemRIght">
          <span class="skin-p">免费领取海量书币</span>
          <i class="van-icon icon-jiantou_y"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'User'
}
</script>

<style lang="scss" scoped>
.page-user {
  display: flex;
  flex-direction: column;
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
  .my {
    margin: -15px 17.5px 0 12.5px;
    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #e8e8e8;
      .itemLeft {
        display: flex;
        justify-content: center;
        align-items: center;
        .incofont {
          font-size: 17px;
          margin-right: 0.29rem;
          font-family: "iconfont" !important;
          font-style: normal;
          -webkit-font-smoothing: antialiased;
          margin-right: 10px;
        }
        .skin-bookName {
          font-size: 16px;
          color: #222;
        }
        .user1 {
          display: inline-block;
          width: 20px;
          height: 20px;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTc1NzU3QzE0OTA2MTFFOEFDNUU5REIzRUYxOUQyOTUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTc1NzU3QzA0OTA2MTFFOEFDNUU5REIzRUYxOUQyOTUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjNGNDRDMTY0NDc3MTFFOEI0MzVGQjkzM0UzQThDNzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjNGNDRDMTc0NDc3MTFFOEI0MzVGQjkzM0UzQThDNzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6EIz7LAAAIf0lEQVR42qxY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);
          background-size: cover;
        }
        .user2 {
          display: inline-block;
          width:20px;
          height: 20px;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjI2NkU5NjQ0OTA2MTFFODg1RTdCRkM1NDhDMjlCRjIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjI2NkU5NjM0OTA2MTFFODg1RTdCRkM1NDhDMjlCRjIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkUzMEY4MUE0NDc3MTFFODlGQUNGRkFBQkMzNUNGNUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkUzMEY4MUI0NDc3MTFFODlGQUNGRkFBQkMzNUNGNUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz73/zNHAAAIEUlEQVR42sxY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);
          background-size: cover;
        }
        .user3 {
          display: inline-block;
          width: 20px;
          height: 20px;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjczNjcxMzg0NzgyMTExRThCQjZDRDYxNDY3Q0VDMDBDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjczNjcxMzg1NzgyMTExRThCQjZDRDYxNDY3Q0VDMDBDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzM2NzEzODI3ODIxMTFFOEJCNkNENjE0NjdDRUMwMEMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzM2NzEzODM3ODIxMTFFOEJCNkNENjE0NjdDRUMwMEMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5APGLNAAABwElEQVR42uyYO0sDQRSFE0nqNApGwUdSxMYulvHRKUiqxcZHFQhY+SPstYuFNoqNBlGblIKPSrsUahO0WAVNYydsYD0DZ0mY3SnvZANe+HJJtYe5O/ecJOn7fiIuNZSIUcVKTEp91Ov14PsE2AXLYMSShqTjOF0xrAK4syjCOCYl6pxC7kFeKRZiCnh87nZoTKgymAUfYBX8CB7AOkiDW1CLOpk19j1hIaqW2I9MY5pjb1h4NQrsDyYxWfaWBTHBBXEHYul9sucsPPObfdQk5pF9xYKYV/aSScwZ+w7ICIu5Ya+YxFyDJhgHV2BaUMwpl948qEaJ6XDXtMECb5UvxBuXnqoD0216AUVwQlH9ce2eegdbccgzviW+wDGYjMPSUxt4Ezz1WENITGDnHlVLRYg8Y8owY0sqSkyNtq7e9A3Bk2kxpriMLWXTmA7ZF4VHpWLKvhZfQmICW5+x8O40tPgSEuNqNp8QHpeqsThFiF+TmKxm85KV0wOdLqak2bxkBXHl2SSmotm8VGUYV1RdRImp0tY92rzkeC4ZV5qMLyGjDOw8TZuXrjZ3TKeft6nNmFJkbOn+6P7/f2YQxPwJMADNU4DC/2YL7wAAAABJRU5ErkJggg==);
          background-size: cover;
        }
        .user4 {
          display: inline-block;
          width: 20px;
          height: 20px;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc4MzAyMDM5NDQ3NzExRThCNzYxQzY4QjM5QUI2NzJGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc4MzAyMDNBNDQ3NzExRThCNzYxQzY4QjM5QUI2NzJGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzgzMDIwMzc0NDc3MTFFOEI3NjFDNjhCMzlBQjY3MkYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzgzMDIwMzg0NDc3MTFFOEI3NjFDNjhCMzlBQjY3MkYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz756IS7AAABo0lEQVR42uyYPUvDUBSGE2ud/MIl/0HU4lJ3Rz/BSYeoo6t0EQqagkJBqauTCHHQSRCMo7P2h4iL310UjO+BN9AhNwSS3NaaA08PyU3uObn3Pbm5NX3fN7rF+owusv6wk67rzsFVQBkMphzzEzyAI3Br27Z6ZJCIA3cDZjNIxGCf0rcHnPYGs10zHBFJ5BscgBNk/hTVM+4RJ528gVHFZa9gROIBC2yBKiiCecTwwqZpm34HFzQykoY8XA20wCFjemHTNEN/pkGvp/RllWaG5Aej8qwhmSDGcGQ1JbQi9SAPug++EpV2ApviFE/zeAlsdCIZKdkmGACP4AeUeC7WyzXNN3CBiZyDCTAplc9pK+hORkp2RfRPcb6AdbDMNm3JXHI0rkLarsE4uNClmdUYZbz291ftiHVI9fFj/o/vGZVhmTAVq3bvfen1pIDjmJkLOBdwLuBcwLAPBhjTMBBBjHdVMvf0mxqSCWI0Vckc09cxOlVgZZCExa1MnceN0L02p0i2nruaNFuDDh1lNaFxD24R3HE/nLa12PdC5L8QnbZfAQYAM0RvolvcgzgAAAAASUVORK5CYII=);
          background-size: cover;
        }
        .user5 {
          display: inline-block;
          width: 20px;
          height: 20px;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjIwNjAwMzNFNDZFRDExRTg4QzJEOTg1NEU3QkM0OEFCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjIwNjAwMzNGNDZFRDExRTg4QzJEOTg1NEU3QkM0OEFCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjA2MDAzM0M0NkVEMTFFODhDMkQ5ODU0RTdCQzQ4QUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjA2MDAzM0Q0NkVEMTFFODhDMkQ5ODU0RTdCQzQ4QUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7WZ9pbAAABlklEQVR42uyYP0vDQBjGL0W32sFFBwOFfgc7uFg3RXfH4pDd0T/QVkXc3APV2V3dRFf9Dk462MXB0snhfF94Tuo1p+nlLhaaBx5ewvXe59cjyXEpSSnFpHhGZFQcxz+uoyiy7hUwUVLTMSVVP9sG/CdKhrEN8h25jyAp3EiiJ/de1weTYNrkG/IauSzcq4zet8gywvCKtMif+OEilj5wBBKgZxsZLWQmwuyi7pE75J6Hlemh976WOQJTR70U/nWBumyCmUN9zwFGZVR+u4H/TQVMATM1MFXsKeEYc5Ywp+oapos95T4lEIM8YE7XNUyT/EyupQAKAVLDnKZrmBdyIwVQiDEF0sBc5zfwX0DWILZPUxKQkjVIlkdbB1KyBsn6nuGwVYQrWYOwsp4OXgF0hettWxAXMApopdibphamjzqfQ7bK+DDBPA7tQ761g/pkgjlHPSMfkhc8QHDPA/KpljkCw0fOI/Is+Zj8NnTWdmXueYKMDjKNNzAfObewzww8rMwAvTf1s7bppXcN56rv7zOToC8BBgDdHNxF+6SaIgAAAABJRU5ErkJggg==);
          background-size: cover;
        }
      }
      .itemRIght {
        display: flex;
        justify-content: center;
        align-items: center;
        .currentMoney {
          color: #ccc;
          font-size: 14px;
        }
        .skin-p {
            color: #13cbd7;
          }
        .van-icon {
          position: relative;
          display: inline-block;
          font-family: "iconfont" !important;
          font-size: 14px;
          text-rendering: auto;
          color: #bbbaba;
          padding-left: 5px;
        }
        .icon-jiantou_y:before {
          content: "\e60d";
        }
        .goPayment{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 70px;
          height: 27px;
          border-radius: 27px;
          font-size: 14px;
        }
        .skin-btn{
          color: #fff;
          background: #13cbd7;
        }
        span {
          font-size: 13px;
        }
      }
    }
  }
}
</style>
