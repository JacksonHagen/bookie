<template>

</template>


<script>
import VGrid from "@revolist/vue3-datagrid"
export default {
  setup() {
    return {
			columns: [
				{
					name: "Title",
					prop: "title"
				}
			]
		}
  }
}
</script>


<style lang="scss" scoped>

</style>