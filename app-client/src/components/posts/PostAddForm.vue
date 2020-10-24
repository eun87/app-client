<template>
  <div class="container">
    <div class="alert alert-info" role="alert">
    Create Post
    </div>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div class="form-group">
            <label for="title">Title</label>
            <input type="title" class="form-control" id="title" v-model="title">
        </div>
        <div class="form-group">
            <label for="contents">Contents</label>
            <textarea class="form-control" id="contents" rows="5" v-model="contents"></textarea>
            <small id="contents"
            v-if="!isContentsValid"
            class="form-text text-muted"
          >
            Contents length must be less than 200
          </small>
        </div>  
        <button type="submit" class="btn btn-primary">Create</button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script>
import { createPost } from '@/api/posts';
export default {
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
    };
  },
  computed: {
    isContentsValid() {
      return this.contents.length <= 200;
    },
  },
  methods: {
    async submitForm() {
      try {
        const response = await createPost({
          title: this.title,
          contents: this.contents,
        });
        this.$router.push('/main');
        console.log(response);
      } catch (error) {
        console.log(error.response.data.message);
        this.logMessage = error.response.data.message;
      }
    },
  },
};
</script>
