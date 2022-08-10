<template>
  <tr>
    <td>
      <input
        type="text"
        class="form-control bg-body"
        :placeholder="bookEdit.title"
        v-model="bookEdit.title"
        @blur="edit()"
      />
    </td>
    <td>
      <input
        type="date"
        class="form-control bg-body"
        :placeholder="bookEdit.releaseDate"
        v-model="bookEdit.releaseDate"
        @blur="edit()"
      />
    </td>
    <td>
      <input
        type="text"
        class="form-control bg-body"
        :placeholder="bookEdit.author"
        v-model="bookEdit.author"
        @blur="edit()"
      />
    </td>
    <td>
      <input
        type="text"
        class="form-control bg-body"
        :placeholder="bookEdit.publisher"
        v-model="bookEdit.publisher"
        @blur="edit()"
      />
    </td>
    <td>
      <input
        type="text"
        class="form-control bg-body"
        :placeholder="bookEdit.platform"
        v-model="bookEdit.platform"
        @blur="edit()"
      />
    </td>
    <td>
      <select
        name="posted"
        id="posted"
        class="form-control bg-body"
        v-model="bookEdit.isArchived"
        @blur="edit()"
      >
        <option :value="false">No</option>
        <option :value="true">Yes</option>
      </select>
    </td>
    <td>
      <select
        name="posted"
        id="posted"
        class="form-control bg-body"
        v-model="bookEdit.status"
        @blur="edit()"
      >
        <option value="reading soon">Reading Soon</option>
        <option value="reading">Reading</option>
        <option value="read">Read</option>
        <option value="TBD">TBD</option>
      </select>
    </td>
    <td>
      <star-rating
        @click="edit()"
        :show-rating="false"
        :increment="0.5"
        :star-size="25"
        v-model:rating="book.rating"
      ></star-rating>
    </td>
  </tr>
</template>


<script>
import { computed, ref } from '@vue/reactivity';
import { booksService } from '../services/BooksService.js';
import Pop from '../utils/Pop.js';
import StarRating from 'vue-star-rating'
export default {
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  components: {
    StarRating
  },
  setup(props) {
    const bookEdit = ref(props.book)
    return {
      bookEdit,
      async edit() {
        try {
          await booksService.edit(bookEdit.value)
        }
        catch (error) {
          console.error("[COULDNT_EDIT_BOOK]", error.message);
          Pop.toast(error.message, "error");
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>