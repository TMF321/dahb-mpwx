<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!-- <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>-->

      <slot />
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Swiper',

  props: {
    autoplay: {
      type: Number,
      default: 0
    },
    loop: {
      type: Boolean,
      default: true
    }
  },

  mounted () {
    const that = this
    /* eslint-disable */
    new Swiper(this.$el, {
      pagination: {
        el: ".swiper-pagination"
      },

      loop: this.loop,

     autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      },

      on: {
        slideChangeTransitionEnd: function() {
          that.$emit("change", this.realIndex);
        },
      },
    });
     /* eslint-enable */
  }
}
</script>

<style lang="scss">
.swiper-container {
  width: 100%;
  height: 160px;
    .swiper-pagination-bullet {
      opacity: 1;
      vertical-align: middle;
      width: 6px;
      height: 6px;
      margin: 0 5px;
      border-radius: 50%;
      background-color: #999;
  }
  .swiper-pagination-bullet-active {
    background-color: #f60;
  }
}
</style>
