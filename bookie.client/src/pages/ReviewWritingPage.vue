<template>
  <div class="container-fluid">
    <div class="row"></div>
    <div class="row mt-5 justify-content-between text-center">
      <div class="col-2">
        <HashtagBlockForm />
      </div>
      <div class="col-6">
        <div class="row">
          <div class="col-12">
            <textarea
              name="review"
              id="review"
              class="mt-5 w-100 form-control bg-primary lighten-10"
              rows="17"
              v-model="selectedBook.review"
            >
            </textarea>
          </div>
        </div>
        <div class="row" v-if="books">
          <div class="col-6">
            <select name="book" id="book" v-model="selectedBook">
              <option v-for="b in books" :value="b" :key="b.id">
                {{ b.title }}
              </option>
            </select>
          </div>
          <div class="col-6"></div>
        </div>
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
    const selectedBook = ref({});
    return {
      hashtagBlocks: computed(() => AppState.hashtagBlocks),
      books: computed(() => AppState.myBooks),
      selectedBook
    }
  }
}
</script>


<style lang="scss" scoped>
</style>