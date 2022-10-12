<template>
  <div
    class="card selectable elevation-5 mb-4 text-start"
    :style="'background-color: ' + hashtagBlock?.bgColor"
    @click="copyBlock()"
  >
    <div class="d-flex justify-content-between">
      <div class="">
        <p class="fs-5 px-2 mb-0 pb-0">
          {{ hashtagBlock.title }}
        </p>
      </div>
      <div class="">
        <p class="m-0 p-0">
          <i
            class="mdi mdi-delete selectable text-danger lighten-10 fs-5"
            @click.stop="deleteBlock()"
          ></i>
        </p>
      </div>
    </div>
    <hr class="m-0" />
    <div class="card-body pt-0">
      <p class="mb-0">#{{ hashtagBlock?.hashtagList?.join(" #") }}</p>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import Pop from '../utils/Pop.js'
import { hashtagBlocksService } from '../services/HashtagBlocksService.js'
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
      },
      async deleteBlock() {
        try {
          if (await Pop.confirm()) {
            await hashtagBlocksService.deleteBlock(props.hashtagBlock.id)
            Pop.toast('Deletion Successful!', 'success')
          }
        }
        catch (error) {
          console.error("[error prefix]", error.message);
          Pop.toast(error.message, "error");
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>