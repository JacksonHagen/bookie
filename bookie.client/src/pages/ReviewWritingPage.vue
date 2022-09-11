<template>
  <div class="container-fluid">
    <div class="row"></div>
    <div class="row mt-5 text-center">
      <div class="col-2">
        <HashtagBlockForm />
      </div>
      <div class="col-8"></div>
      <div class="col-2">
        <HashtagBlock v-for="b in hashtagBlocks" :block="b" :key="b.id" />
      </div>
    </div>
  </div>
</template>


<script>
import { computed, onMounted } from '@vue/runtime-core'
import Pop from '../utils/Pop.js';
import { hashtagBlocksService } from '../services/HashtagBlocksService.js';
import { AppState } from '../AppState.js';
export default {
  setup() {
    onMounted(async () => {
      try {
        await hashtagBlocksService.getAllBlocks()
      }
      catch (error) {
        console.error("[COULDNT_LOAD_HASHTAGS]", error.message);
        Pop.toast(error.message, "error");
      }
    })
    return {
      hashtagBlocks: computed(() => AppState.hashtagBlocks)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>