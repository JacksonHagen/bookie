<template>
  <QuillEditor theme="bubble" toolbar="full" />
</template>


<script>
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.bubble.css';
export default {
  components: {
    QuillEditor
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
</style>