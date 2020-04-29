<template>
  <div class="page-login">
    <div class="login">
      <i class="close icon-jiantou_z"></i>
      <div class="form">
        <p class="title">手机号快捷登录</p>
        <div class="inputDiv">
          <div class="item">
            <input type="number" placeholder="手机号" maxlength="11" />
          </div>
          <div class="item flex">
            <input type="text" placeholder="图形验证码" />
            <div class="itemRight">
              <img
                src="../../assets/icon/验证码.jpg"
              />
              <i class="reloadImgCode"></i>
            </div>
          </div>
          <div class="item flex">
            <input type="text" placeholder="验证码" />
            <button class="skin-btn">获取验证码</button>
          </div>
        </div>
        <div class="formBtn flex">登录</div>
      </div>
      <p class="footer">
        登录代表您已同意
        <a href="https://mwxapi.mop.com/home/protocol.html" target="_blank">《猫扑文学服务协议》</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="scss" scoped>
.page-login {
  height: 100%;
  widows: 100%;
  .login {
    position: relative;
    min-height: 667px;
    .close {
       position: relative;
      display: inline-block;
      font-family: "iconfont" !important;
      font-size: 14px;
      text-rendering: auto;
      color: #434343;
      vertical-align: middle;
      height: 14px;
    }
    .icon-jiantou_z::before{
      content: "\e613";
    }
    .form {
      padding-top: 38px;
      margin: 0 40px 0 40px;
      text-align: center;
      .title {
        font-size: 20px;
        color: #333;
      }
      .inputDiv {
        text-align: left;
        margin: 33.5px auto 80px;
        .item {
          padding-bottom: 10px;
          border-bottom: 1px solid #e7e7e7;
          input {
            font-size: 16px;
            padding-left: 1px;
            border: none;
            outline: none;
          }
        }
        .flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 17px;
          .itemRight {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            img {
              display: inline-block;
              width: 72px;
              height: 27.5px;
            }
            .reloadImgCode {
              display: inline-block;
              margin-left: 8.5px;
              width: 16.5px;
              height: 16.5px;
              background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAhCAYAAACxzQkrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI3RTZFQjJFNTNGQzExRThCRTI1QzI0NjE2Q0MyMTNEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI3RTZFQjJGNTNGQzExRThCRTI1QzI0NjE2Q0MyMTNEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjdFNkVCMkM1M0ZDMTFFOEJFMjVDMjQ2MTZDQzIxM0QiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjdFNkVCMkQ1M0ZDMTFFOEJFMjVDMjQ2MTZDQzIxM0QiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7CuVyoAAADBklEQVR42syYbWiNYRjHn3PYYkRj5cMIaRNZqcnLB1ErL1kaH8xLScpbEpqSQopE2RQSpuELo3zwMiSlqFkc8sEHkWLzEs1bsQzb/K/1e3TXHHue4zzHrvr13Oc55zznf1/3fV8vJ5ZIJLyAli02iHlitBggevFeh2gVzaJe7BcNXggrLi7uvMYDfHaYuCFaxF4xWeQ6Ysxioo8YKhaIO+K92OyFtO4EHRfPRQkCfjDz7WKKGCKyRKFYIk6JJr47SOzBa9OCCuqd5L79UIIZm30WO0Vlks8/hdOOV6vFDDFY3BRVYlMqHioQzxBje+Mos60M4Xnz0iwxVrxkSSvE+bCC8sQD0Y/lsYeuFu1eavYYb9Xxer44E0bQPdEfMRPFdS89VirOMl4oVgURdFCMYJnmiodees2E3Gd8iNXoYjHikG3i1wi0k7LMi8ZyOHV9xa0/nT7fQ8cYfxHLvejMYtl6xlPFcOc926vj4wiZzc3Kf9jAQc3CwQdOXhX38lnG2yZmBcGtTeyKUMgWlszsBNeZXC8QeHeYoHJuPhI/IxIzR+zGM2sZe4QXO3GWyBpthUzQON48F6F3rrJPs1iaBqK/RyLuIEZ17p9c50tRWTueKCRYFlAttHDi6vyQEHey9isverOUNEasoVzJIQiXu8c+xvidlzk7wsrYRp+Ep35n+w5E5WfIS759ozzpUn60cS3KsKCkFeNH7k33eoDFiT9ukPrvgvyyoOgvFWRGBVVz9Oz4b+0JgtqdoFgRsBOJVJDZSoRZtVgT4e9Zb7dYjEw2cf/mW3GY8VJq6Sisnkx/INl+dVWuEy8IkhetWEqzmFqyunnpsvgepMifQNVoWfkufVU67JKTr2pprQJ1Hc3M4iuirpF3UrVCerRSpxBbFLZRfEJ54Dd4VjZ8EhtDCLFe7Aqlht9wWnlclmpv/4aH1nD6BlL/tvJHwjaydB7PGMXMa9iHjdTpMf50KAnSRrttUHezPUnL0iuElyxH7nPK1UDJNUiqaGKG2SxbWRT/D/n2S4ABAMD9ps76dlusAAAAAElFTkSuQmCC)
                no-repeat;
              background-size: cover;
            }
          }
          .skin-btn {
            height: 30px;
            border-radius: 30px;
            width: 85px;
            font-size: 13px;
            color: #fff;
            background: #13cbd7;
            border: none;
          }
        }
      }
      .formBtn {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        border-radius: 40px;
        font-size: 17px;
        background: #dcdcdc;
        color: #999;
      }
    }
    .footer {
      position: absolute;
      bottom: 22px;
      text-align: center;
      width: 100%;
      font-size: 12px;
      color: #999;
      a {
        color: rgb(255, 0, 0);
      }
    }
  }
}
</style>
