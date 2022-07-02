<template>
  <div class="row justify-content-center">
    <div class="col-10">
      <div class="card w-100 bg-light p-3">
        <h2>
          {{ book.title }}
        </h2>
        <hr />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    book: {
      type: Object,
      required: true
    },
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
</style>