<template>
  <h2 class="text-light">Create A Hashtag Block</h2>
  <form @submit.prevent="createBlock()">
    <textarea
      name="hashtags"
      id="hashtags"
      class="w-100 form-control bg-primary lighten-10"
      rows="15"
      required
      v-model="listString"
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
    const listString = ref("")
    return {
      listString,
      async createBlock() {
        let listArr = listString.value.split("#")
        listArr.shift()
        logger.log(listArr)
        try {
          await hashtagBlocksService.createBlock(listArr)
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
</style>