<template lang="pug">
  .swiper_box
    swiper(:options="option" ref="mySwiper" @someSwiperEvent="swiperCallback")
      swiper-slide(v-for="(slide, index) in swiperSlides" :key="index")
        img(:src="slide")
      .swiper-pagination(slot="pagination")
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
  data () {
    return {
      option: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        }
      },
      swiperSlides: [require('../../assets/img/creditImg/banner1.png'), require('../../assets/img/creditImg/banner2.png'), require('../../assets/img/creditImg/banner3.png')]
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    swiperCallback (v) {
      console.log(v)
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/style/common.less';

.swiper_box {
  position: relative;
  height: 200px;
}
.swiper-wrapper {
  height: 200px;
}
.swiper-slide {
  height: 200px;
  background: @background-color-e5e5e5;
}
.swiper-pagination .swiper-pagination-bullet-active {
  background: @background-color-fd6255;
}
</style>
