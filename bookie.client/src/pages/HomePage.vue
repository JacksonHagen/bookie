<template>
  <div class="container-fluid">
    <div class="row justify-content-between mx-5 my-3">
      <div class="col-3">
        <h1 class="logo">
          <a
            href="https://www.instagram.com/rampant_reading/"
            class="text-decoration-none text-white"
            target="_blank"
          >
            <i class="mdi mdi-instagram"></i>
          </a>
        </h1>
      </div>
      <!-- <div class="col-6 text-center mt-4">
        <form @submit.prevent="" class="input-group">
          <select
            name="addBook"
            id="addBook"
            class="form-control w-75"
            v-model="addedBook.value"
            required
          >
            <option disabled selected>Select a book</option>
            <option v-for="b in booksToAddToQueue" :key="b.id" :value="b">
              {{ b.title }}
            </option>
          </select>
          <button class="btn btn-info w-25" type="submit">
            Add Book To List
          </button>
        </form>
      </div> -->
      <div class="col-3 text-end">
        <h1 class="logo">
          <a
            href="https://rampantreading.wordpress.com/blog/"
            class="text-decoration-none text-white"
            target="_blank"
          >
            <i class="mdi mdi-wordpress"></i>
          </a>
        </h1>
      </div>
    </div>
    <span v-if="books">
      <HomePageBook v-for="b in readingBooks" :key="b.id" :book="b" />
      <HomePageBook v-for="b in nextUpBooks" :key="b.id" :book="b" />
    </span>
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
import { AppState } from '../AppState.js'
import { onMounted } from '@vue/runtime-core'
import Pop from '../utils/Pop.js'
import { booksService } from '../services/BooksService.js'
export default {
  setup() {
    const addedBook = ref({})
    onMounted(async () => {
      try {
        await booksService.getAllBooks()
      }
      catch (error) {
        console.error("[COULD_NOT_GET_BOOKS]", error.message);
        Pop.toast(error.message, "error");
      }
    })
    return {

      addedBook,
      books: computed(() => AppState.myBooks),
      readingBooks: computed(() => AppState.myBooks.filter(b => b.status === 'reading')),
      nextUpBooks: computed(() => AppState.myBooks.filter(b => b.status === 'reading soon')),
      booksToAddToQueue: computed(() => AppState.myBooks.filter(b => b.status === 'TBD'))
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
.logo {
  font-size: 6rem;
  color: white;
  text-shadow: 2px 2px 4px black;
}
</style>
