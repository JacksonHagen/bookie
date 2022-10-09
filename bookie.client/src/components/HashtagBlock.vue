<template>
  <div
    class="card selectable elevation-5 mb-4 text-start"
    :style="'background-color: ' + hashtagBlock?.bgColor"
    @click="copyBlock()"
  >
    <div class="card-title">
      <p class="fs-5 px-2 mb-0 pb-0">
        {{ hashtagBlock.title }}
      </p>
      <hr class="m-0" />
    </div>
    <div class="card-body pt-0">
      <p class="mb-0">#{{ hashtagBlock?.hashtagList?.join(" #") }}</p>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import Pop from '../utils/Pop.js'
export default {
  props: {
    hashtagBlock: {
      type: Object,
      required: true
    },
  },
  setup(props) {
    return {
      copyBlock() {
        const blockListStr = "#" + props.hashtagBlock.hashtagList.join(" #").trim()
        navigator.clipboard.writeText(blockListStr)
        Pop.toast("Copied", 'success')
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>