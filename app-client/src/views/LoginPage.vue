<template>
  <div class="container">
    <header class="jumbotron my-4">
      <h1 class="display-3">Sign in</h1>
      <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
      <router-link to="/signup" class="btn btn-primary btn-lg">Go Sign up &gt;</router-link>
    </header>
    <LoginForm></LoginForm>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
export default {
  components: {
    LoginForm,
  },
};
</script>

<style></style>