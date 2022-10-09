<template>
  <div class="container-fluid">
    <div class="row"></div>
    <div class="row mt-5 justify-content-between text-center">
      <div class="col-2">
        <HashtagBlockForm />
      </div>
      <div class="col-6">
        <ReviewEditor :books="books" v-if="books" />
      </div>
      <div class="col-2" v-if="hashtagBlocks">
        <HashtagBlock
          v-for="b in hashtagBlocks"
          :hashtagBlock="b"
          :key="b.id"
        />
      </div>
    </div>
  </div>
</template>


<script>
import { computed, onMounted, ref } from '@vue/runtime-core'
import Pop from '../utils/Pop.js';
import { hashtagBlocksService } from '../services/HashtagBlocksService.js';
import { AppState } from '../AppState.js';
import { booksService } from '../services/BooksService.js';
export default {
  setup() {
    onMounted(async () => {
      try {
        await hashtagBlocksService.getAllBlocks();
        await booksService.getAllBooks();
      }
      catch (error) {
        console.error("[COULDNT_LOAD_HASHTAGS]", error.message);
        Pop.toast(error.message, "error");
      }
    })
    return {
      hashtagBlocks: computed(() => AppState.hashtagBlocks),
      books: computed(() => AppState.myBooks),
    }
  }
}
</script>


<style lang="scss" scoped>
</style>