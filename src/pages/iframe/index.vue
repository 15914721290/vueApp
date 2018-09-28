<template lang="pug">
  .iframe
    NavTop(:goBackParams="goBackParams")
    iframe(:style="'height:'+clientHeight+'px'" ref="iframeDom" id="iframe" name="iframe" frameborder="0" scrolling="auto" :src="src")
</template>

<script>
import NavTop from '@/components/navTop'

export default {
  data () {
    return {
      goBackParams: {
        title: this.$route.params.name
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
