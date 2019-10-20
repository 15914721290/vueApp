<template lang="html">
  <div>
      搜索
    <NavBottom :goBackParams="goBackParams" :meun="meun"/>
  </div>
    
</template>

<script>
import NavTop from '@/components/navTop'
import NavBottom from '@/components/navBottom'
import Lstorage from 'store'
export default {
  data () {
    return {
      goBackParams: {
        title: '搜索'
      },
      meun:'find'
    }
  },
  components: {
    NavTop,
    NavBottom
  },
  
}
</script>

<style lang="less" scoped>

</style>
