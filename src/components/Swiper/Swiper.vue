<template>
    <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
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

    new Swiper(this.$el, {
      pagination: {
        el: '.swiper-pagination'
      },

      loop: this.loop,

      autoplay: this.autoplay ? {
        delay: this.autoplay,
        stopOnlastSlide: false,
        disableOnInteraction: true
      } : false,

      on: {
        slideChangeTransitionEnd: function () {
          that.$emit('change', this.realIndex)
        }
      }
    })
  }
}
</script>

<style lang="scss">
.swiper-container {
  width: 100%;
  height: 180px;
}
</style>
