<template>
  <nav class="navbar navbar-expand-lg navbar-primary bg-primary px-3">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <h1 class="fs-6">
          <i class="mdi logo mdi-library"></i>
        </h1>
        <!-- <img alt="logo" src="../assets/img/cw-logo.png" height="45" /> -->
      </div>
    </router-link>
    <div class="ps-4">
      <button
        class="btn bg-primary lighten-20 btn-xl"
        title="Add a book"
        data-bs-toggle="modal"
        data-bs-target="#addBookModal"
      >
        <i class="mdi mdi-plus fs-3"></i>
      </button>
    </div>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav ms-auto me-5">
        <li class="fs-1">
          <router-link :to="{ name: 'Schedule' }" class="text-light">
            Schedule
          </router-link>
        </li>
      </ul>
      <!-- LOGIN COMPONENT HERE -->
      <Login />
    </div>
  </nav>

  <!-- Modal -->
  <div class="modal fade" id="addBookModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add a Book</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <CreateBookForm />
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  setup() {
    return {
    };
  },
};
</script>

<style scoped>
a:hover {
  text-decoration: none;
}
.nav-link {
  text-transform: uppercase;
}
.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-info);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.logo {
  font-size: 5em;
  color: aliceblue !important;
}
</style>
