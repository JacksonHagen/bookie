<template>
  <div
    class="card selectable elevation-5 mb-4"
    :style="'color: ' + hashtagBlock?.bgColor"
  >
    <div class="card-title">as</div>
  </div>
</template>


<script>
export default {
  props: {
    hashtagBlock: {
      type: Object,
      required: true
    },
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
</style>