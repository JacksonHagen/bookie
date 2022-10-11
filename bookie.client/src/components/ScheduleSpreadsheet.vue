<template>
  <label class="switch my-3" title="Descending?">
    <input type="checkbox" @click="toggleDescend()" />
    <span class="slider round"></span>
  </label>

  <table class="table">
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">
          <p class="selectable m-0" @click="sortList('title')">Title</p>
        </th>
        <th scope="col">
          <p class="selectable m-0" @click="sortList('releaseDate')">
            Release Date
          </p>
        </th>
        <th scope="col">
          <p class="selectable m-0" @click="sortList('author')">Author</p>
        </th>
        <th scope="col">
          <p class="selectable m-0" @click="sortList('publisher')">Publisher</p>
        </th>
        <th scope="col">
          <p class="selectable m-0" @click="sortList('platform')">Platform</p>
        </th>
        <th scope="col">
          <p class="m-0">Posted?</p>
        </th>
        <th scope="col">
          <p class="m-0">Status</p>
        </th>
        <th scope="col">
          <p class="selectable m-0" @click="sortList('rating')">Rating</p>
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
import { logger } from '../utils/Logger.js'
export default {
  props: {
    books: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const bookList = ref([...props.books])
    const isDescending = ref(false)
    return {
      bookList,
      sortList(sortBy) {
        let sortedList;
        switch (sortBy) {
          case 'title':
            sortedList = props.books.sort(function (a, b) {
              let titleA = a.title.toUpperCase()
              let titleB = b.title.toUpperCase()
              return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0;
            })

            break;
          case 'releaseDate':
            sortedList = props.books.sort(function (a, b) {
              let releaseDateA = a.releaseDate;
              let releaseDateB = b.releaseDate;
              return (releaseDateA < releaseDateB) ? -1 : (releaseDateA > releaseDateB) ? 1 : 0
            })
            break;
          case 'author':
            sortedList = props.books.sort(function (a, b) {
              let authorA = a.author;
              let authorB = b.author;
              return (authorA < authorB) ? -1 : (authorA > authorB) ? 1 : 0
            })
            break;
          case 'publisher':
            sortedList = props.books.sort(function (a, b) {
              let publisherA = a.publisher;
              let publisherB = b.publisher;
              return (publisherA < publisherB) ? -1 : (publisherA > publisherB) ? 1 : 0
            })
            break;
          case 'platform':
            sortedList = props.books.sort(function (a, b) {
              let platformA = a.platform;
              let platformB = b.platform;
              return (platformA < platformB) ? -1 : (platformA > platformB) ? 1 : 0
            })
            break;
          case 'rating':
            sortedList = props.books.sort(function (a, b) {
              let ratingA = a.rating;
              let ratingB = b.rating;
              return (ratingA < ratingB) ? -1 : (ratingA > ratingB) ? 1 : 0
            })
            break;
        }
        if (!isDescending.value) {
          bookList.value = sortedList
        } else {
          bookList.value = sortedList.reverse()
        }
      },
      toggleDescend() {
        isDescending.value = !isDescending.value
        bookList.value.reverse()
      }
    }
  }
}
</script>


<style lang="scss" scoped>
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #6368f2;
}

input:focus + .slider {
  box-shadow: 0 0 1px #6368f2;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>