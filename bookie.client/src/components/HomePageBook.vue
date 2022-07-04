<template>
  <div class="row justify-content-center">
    <div class="col-10">
      <div class="card w-100 bg-light p-3">
        <div class="row">
          <div class="col-12">
            <h2>
              {{ book.title }}
            </h2>
            <hr />
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <img
              :src="book.imgUrl"
              :alt="book.title + ' cover image'"
              class="img-fluid elevation-5 rounded"
            />
          </div>
          <div class="col-md-9 d-flex flex-column justify-content-between">
            <div class="">
              <h3>
                {{ book.author }}
              </h3>
            </div>
            <div class="">
              <h3>
                {{ book.releaseDate }}
              </h3>
            </div>
            <div class="d-flex justify-content-between pe-3">
              <h3>
                {{ book.format }}
              </h3>
              <h4>
                Status -
                <i
                  :class="
                    book.status === 'reading soon'
                      ? 'text-primary'
                      : 'text-success'
                  "
                  >{{ book.status }}</i
                >
              </h4>
            </div>
          </div>
        </div>
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