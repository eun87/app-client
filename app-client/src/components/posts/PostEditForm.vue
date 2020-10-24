<template>
  <div class="container">
      <form class="form" @submit.prevent="submitForm">
        <div class="form-group">
            <label for="title">Title</label>
            <input type="title" class="form-control" id="title" v-model="title">
        </div>  
        <div class="form-group">
            <label for="contents">Example textarea</label>
            <textarea class="form-control" id="contents" rows="5" v-model="contents"></textarea>
            <small id="contents"
            v-if="!isContentsValid"
            class="form-text text-muted"
          >
            Contents length must be less than 200
          </small>
        </div>
        <button type="submit" class="btn btn-primary">Edit</button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script>
import { fetchPost, editPost } from '@/api/posts';
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
      const id = this.$route.params.id;
      try {
        await editPost(id, {
          title: this.title,
          contents: this.contents,
        });
        this.$router.push('/main');
      } catch (error) {
        console.log(error);
        this.logMessage = error;
      }
    },
  },
  async created() {
    const id = this.$route.params.id;
    const { data } = await fetchPost(id);
    this.title = data.title;
    this.contents = data.contents;
  },
};
</script>