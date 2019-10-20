<template lang="html">
  <div class="iframe">
    <NavTop :goBackParams="goBackParams"/>
    <Swiper :swiperSlides="swiperSlides"/>
    <NavBottom/>
  </div>
</template>



<script>
import NavTop from '@/components/navTop'
import NavBottom from '@/components/navBottom'
import Swiper from '@/components/credit/swiper'
import { mapMutations, mapState } from 'vuex'
import Lstorage from 'store'
export default {
  data () {
    return {
      goBackParams: {
        title: '首页'
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
    }
  },
  components: {
    NavTop,
    NavBottom,
    Swiper
  },
  methods: {
    ...mapMutations(['USER_INFO', 'SIDN_DATA'])
  },
  computed: {
    clientHeight () {
      return document.documentElement.clientHeight || document.body.clientHeight
    },
    src () {
      return this.$route.params.url
    },
    ...mapState(['userInfoData'])
  },
  created () {
    this.USER_INFO({islogin: true})
    Lstorage.set('USER_INFO', JSON.stringify({islogin: true}))
    console.log('this.userInfoData', this.userInfoData)
  }
}
</script>

<style lang="less" scoped>

</style>
