<template>
    <div class="container">
        <header class="jumbotron my-4">
            <h1 class="display-3">Today I Learned</h1>
            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
        </header>
        <PostEditForm></PostEditForm>
    </div>
</template>

<script>
import PostEditForm from '@/components/posts/PostEditForm.vue';
export default {
  components: {
    PostEditForm,
  },
};
</script>

<style></style>