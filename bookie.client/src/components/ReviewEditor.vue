<template>
  <form @submit.prevent="editBook()">
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
    <div class="row gx-0" v-if="books">
      <div class="col-6">
        <select
          name="book"
          id="book"
          class="w-100 form-control"
          v-model="selectedBook"
        >
          <option v-for="b in books" :value="b" :key="b.id">
            {{ b.title }}
          </option>
        </select>
      </div>
      <div class="col-6">
        <button class="btn btn-success w-100" type="submit">Save Review</button>
      </div>
    </div>
  </form>
</template>


<script>
import { ref } from '@vue/reactivity';
import Pop from '../utils/Pop.js';
import { booksService } from '../services/BooksService.js';
import { useRoute, useRouter } from 'vue-router';
import { onBeforeUpdate, onMounted, onUpdated, watchEffect } from '@vue/runtime-core';
export default {
  props: {
    books: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const route = useRoute();
    const selectedBook = ref({});
    const router = useRouter();
    watchEffect(() => {
      if (selectedBook.value.id) {
        router.push({ name: "ReviewWriting", params: { id: selectedBook.value.id } })
      } else if (route.params.id) {
        selectedBook.value = props.books.find(b => b.id == route.params.id) || {}
      }
    })
    return {
      async editBook() {
        try {
          await booksService.edit(selectedBook.value)
        }
        catch (error) {
          console.error("[COULDNT_SUBMIT_REVIEW]", error.message);
          Pop.toast(error.message, "error");
        }
      },
      selectedBook,
    }
  }
}
</script>


<style lang="scss" scoped>
</style>