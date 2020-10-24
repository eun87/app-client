<template>
    <div class="container">
        <header class="jumbotron my-4">
            <h1 class="display-3">Today I Learned</h1>
            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
        </header>
        <PostAddForm></PostAddForm>
    </div>
</template>

<script>
import PostAddForm from '@/components/posts/PostAddForm.vue';
export default {
  components: {
    PostAddForm,
  },
};
</script>

<style></style>