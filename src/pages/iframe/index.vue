<template lang="pug">
  .iframe
    NavTop(:goBackParams="goBackParams")
    iframe(:style="'height:'+clientHeight+'px'" ref="iframeDom" id="iframe" name="iframe" frameborder="0" scrolling="auto" :src="src")
    .box 首页
</template>

<script>
import NavTop from '@/components/navTop'

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
  computed: {
    clientHeight () {
      return document.documentElement.clientHeight || document.body.clientHeight
    },
    src () {
      return this.$route.params.url
    }
  },
  created () {
  }
}
</script>

<style lang="less" scoped>
iframe {
  margin-top: 90px;
  width: 100%;
}
</style>
