<template lang="html">
  <div>
     <NavTop  :goBackParams="goBackParams"/>
    <NavBottom :meun="meun"/>
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
        title: '动态'
      },
      meun:'dynamic'
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
