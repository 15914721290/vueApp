<template lang="pug">
  .container 成功页面
</template>

<script>
import { mapMutations } from 'vuex'
import Lstorage from 'store'
export default {
  created () {
    console.log('this.USER_INFO', this.USER_INFO())
    console.log('11', Lstorage.get('USER_INFO'))
  },
  methods: {
    ...mapMutations(['USER_INFO', 'SIDN_DATA'])
  }
}
</script>

<style lang="less" scoped>

</style>
