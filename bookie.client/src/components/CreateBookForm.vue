<template>
  <form @submit.prevent="addBook()" id="bookForm">
    <div class="row mb-3">
      <div class="col-12">
        <label for="title">Book Title:</label>
        <input
          required
          v-model="newBook.title"
          id="title"
          name="title"
          class="form-control"
          type="text"
        />
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-6">
        <label for="author">Author:</label>
        <input
          required
          v-model="newBook.author"
          id="author"
          name="author"
          class="form-control"
          type="text"
        />
      </div>
      <div class="col-6">
        <label for="releaseDate">Release Date:</label>
        <input
          required
          v-model="newBook.releaseDate"
          id="releaseDate"
          name="releaseDate"
          class="form-control"
          type="date"
        />
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-6">
        <label for="publisher">Publisher:</label>
        <input
          required
          v-model="newBook.publisher"
          type="text"
          class="form-control"
          name="publisher"
          id="publisher"
        />
      </div>
      <div class="col-6">
        <label for="status">Status:</label>
        <select name="status" id="status" class="form-control">
          <option value="TBD" selected>TBD</option>
          <option value="reading soon">Reading soon</option>
          <option value="reading">Reading</option>
          <option value="read">Read</option>
        </select>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-6">
        <label for="format">Format:</label>
        <input
          required
          v-model="newBook.format"
          id="format"
          name="format"
          class="form-control"
          type="text"
        />
      </div>
      <div class="col-6">
        <label for="platform">Platform:</label>
        <input
          required
          v-model="newBook.platform"
          id="platform"
          name="platform"
          class="form-control"
          type="text"
        />
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-12">
        <label for="imgUrl">Image Url:</label>
        <input
          required
          v-model="newBook.imgUrl"
          id="imgUrl"
          name="imgUrl"
          class="form-control"
          type="text"
        />
      </div>
    </div>
    <hr />
    <div class="d-flex justify-content-between">
      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
        Close
      </button>
      <button type="submit" class="btn btn-primary text-light">Add Book</button>
    </div>
  </form>
</template>


<script>
import { ref } from '@vue/reactivity'
import Pop from '../utils/Pop.js'
import { booksService } from '../services/BooksService.js'
import { Modal } from 'bootstrap'
export default {
  setup() {
    const newBook = ref({})
    return {
      newBook,
      async addBook() {
        try {
          await booksService.addBook(newBook.value)
          document.getElementById("bookForm").reset()
          Modal.getOrCreateInstance(document.getElementById("addBookModal")).hide()
        }
        catch (error) {
          console.error("[COULD_NOT_ADD_BOOK]", error.message);
          Pop.toast(error.message, "error");
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>