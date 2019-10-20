// <template lang="pug">
//-   .swiper_box
//-     swiper(:options="option" ref="mySwiper" @someSwiperEvent="swiperCallback")
//-       swiper-slide(v-for="(slide, index) in swiperSlides" :key="index")
//-         img(:src="slide.img")
//-       .swiper-pagination(slot="pagination")
// </template>
<template lang="html">
  <div class="swiper_box">
    <swiper :options="option" ref="mySwiper" @someSwiperEvent="swiperCallback">
      <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <a :href="slide.link">
          <img :src="slide.img"/>
        </a>
      </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>


<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
  // props:{
  //   swiperSlides:{
  //     type: Array
  //   }
  // },
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
      swiperSlides: [
        {
          img:require('../../assets/img//banner-a.jpg'),
          link:'www.baidu.com'
        },
        {
          img:require('../../assets/img//banner-b.jpg'),
          link:'www.jingdo.com'
        },
        {
          img:require('../../assets/img//banner-c.jpg'),
          link:'www.baidu.com'
        }
      ]
      // swiperSlides: [require('../../assets/img//banner-a.jpg'), require('../../assets/img/banner-b.jpg'), require('../../assets/img/banner-c.jpg')]
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
  height: 400px;
  margin-top: 60px;
}
.swiper-wrapper {
  height: 400px;
}
.swiper-slide {
  height: 400px;
  background: @background-color-e5e5e5;
}
.swiper-pagination .swiper-pagination-bullet-active {
  background: @background-color-fd6255;
}
</style>
