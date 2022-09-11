<template>
  <h2 class="text-light">Create A Hashtag Block</h2>
  <form @submit.prevent="createBlock()">
    <input
      type="color"
      name="blockColor"
      id="blockColor"
      class="w-100 p-0"
      title="select the block's color"
      v-model="blockData.bgColor"
    />
    <textarea
      name="hashtags"
      id="hashtags"
      class="w-100 form-control bg-primary lighten-10"
      rows="15"
      required
      v-model="blockData.hashtagList"
    ></textarea>
    <button type="submit" class="btn btn-primary w-100 text-light">
      Submit
    </button>
  </form>
</template>


<script>
import { ref } from '@vue/reactivity'
import { logger } from '../utils/Logger.js'
import { hashtagBlocksService } from "../services/HashtagBlocksService.js";
import Pop from '../utils/Pop.js'
export default {
  setup() {
    const blockData = ref({ bgColor: "#9296f6" })
    return {
      blockData,
      async createBlock() {
        debugger
        let listArr = blockData.value.hashtagList.split("#")
        listArr.shift()
        blockData.value.hashtagList = listArr
        logger.log(blockData.value)
        try {
          await hashtagBlocksService.createBlock(blockData.value)
        }
        catch (error) {
          console.error("[COULDNT_CREATE_BLOCK]", error.message);
          Pop.toast(error.message, "error");
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
input {
  border: 1px solid #e9ecef !important;
}
</style>