<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <ScheduleSpreadsheet :books="myBooks" />
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState.js'
import { onMounted } from '@vue/runtime-core'
import { booksService } from '../services/BooksService.js'
export default {
  setup() {
    onMounted(async () => {
      try {
        booksService.getAllBooks();
      }
      catch (error) {
        console.error("[COULDNT_LOAD_BOOKS]", error.message);
        Pop.toast(error.message, "error");
      }
    })
    return {
      myBooks: computed(() => AppState.myBooks)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>