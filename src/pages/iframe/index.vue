<template lang="pug">
  .iframe
    NavTop(:goBackParams="goBackParams")
    iframe(:style="'height:'+clientHeight+'px'" ref="iframeDom" id="iframe" name="iframe" frameborder="0" scrolling="auto" :src="src")
    .box 首页
</template>

<script>
import NavTop from '@/components/navTop'
import { mapMutations } from 'vuex'
import Lstorage from 'store'
export default {
  data () {
    return {
      goBackParams: {
        title: '首页'
      }
    }
  },
  components: {
    NavTop
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
    }
  },
  created () {
    this.USER_INFO({islogin: true})
    Lstorage.set('USER_INFO', JSON.stringify({islogin: true}))
    console.log('this.USER_INFO', this.USER_INFO)
  }
}
</script>

<style lang="less" scoped>
iframe {
  margin-top: 90px;
  width: 100%;
}
</style>
