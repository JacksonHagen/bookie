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
    <input
      type="text"
      name="title"
      id="title"
      placeholder="Block Title..."
      class="form-control bg-primary p-1 lighten-10 text-dark mb-1"
      v-model="blockData.title"
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
    const blockData = ref({ bgColor: "#E26868" })
    return {
      blockData,
      async createBlock() {
        let listArr = blockData.value.hashtagList.split("#")
        listArr.shift()
        blockData.value.hashtagList = listArr.map(s => s.trim())
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