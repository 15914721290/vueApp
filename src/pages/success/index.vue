<template lang="pug">
  .container
    Success(v-if="isSuccess" :successInfoParams="successInfoParams")
</template>

<script>
import Success from '@/components/success'

export default {
  data () {
    return {
      isSuccess: true,
      successInfoParams: {
        visible: true,
        type: 1
      }
    }
  },
  components: {
    Success
  }
}
</script>

<style lang="less" scoped>

</style>
