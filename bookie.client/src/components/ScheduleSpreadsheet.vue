<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Release Date</th>
        <th scope="col">Author</th>
        <th scope="col">Publisher</th>
        <th scope="col">Platform</th>
        <th scope="col">Posted?</th>
        <th scope="col">Status</th>
        <th scope="col">Rating</th>
      </tr>
    </thead>
    <tbody>
      <ScheduleRow v-for="b in books" :key="b.id" :book="b" />
    </tbody>
  </table>
</template>


<script>
export default {
  props: {
    books: {
      type: Array,
      required: true
    }
  },
  setup() {
    return {
    }
  }
}
</script>


<style lang="scss" scoped>
</style>