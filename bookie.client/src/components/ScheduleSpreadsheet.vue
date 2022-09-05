<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">
          <p class="selectable m-0" @click="sortList('title')">Title</p>
        </th>
        <th scope="col">
          <p class="selectable m-0">Release Date</p>
        </th>
        <th scope="col">
          <p class="selectable m-0">Author</p>
        </th>
        <th scope="col">
          <p class="selectable m-0">Publisher</p>
        </th>
        <th scope="col">
          <p class="selectable m-0">Platform</p>
        </th>
        <th scope="col">
          <p class="selectable m-0">Posted?</p>
        </th>
        <th scope="col">
          <p class="selectable m-0">Status</p>
        </th>
        <th scope="col">
          <p class="selectable m-0">Rating</p>
        </th>
      </tr>
    </thead>
    <tbody>
      <ScheduleRow v-for="b in bookList" :key="b.id" :book="b" />
    </tbody>
  </table>
</template>


<script>
import { computed, onMounted, ref, watchEffect } from '@vue/runtime-core'
export default {
  props: {
    books: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const bookList = ref([...props.books])
    return {
      bookList,
      sortList(sortBy) {
        switch (sortBy) {
          case 'title':
            let sortedList = props.books.sort(function (a, b) {
              let titleA = a.title.toUpperCase()
              let titleB = b.title.toUpperCase()
              return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0;
            })
            if (sortedList == bookList.value) {
              bookList.value = sortedList.reverse()
            } else {
              bookList.value.reverse();
            }
            break;
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>