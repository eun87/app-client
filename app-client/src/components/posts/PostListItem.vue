<template>
    <div class="col-lg-3 col-md-6 mb-4">
        <div class="card h-100">
          <img class="card-img-top" src="http://placehold.it/500x325" alt="">
          <div class="card-body">
            <h4 class="card-title">{{ postItem.title }}</h4>
            <p class="card-text">{{ postItem.contents }}</p>
            <p class="card-text"><small class="text-muted">{{ postItem.createdAt | formatDate }}</small></p>
                <div class="btn-group" role="group" aria-label="Third group">
                    <button type="button" class="btn-sm btn btn-outline-warning"><font-awesome-icon icon="cog" @click="routeEditPage" /></button>
                    <button type="button" class="btn-sm btn btn-outline-danger"><font-awesome-icon icon="trash-alt" @click="deleteItem" /></button>
                </div>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary">Find Out More!</a>
          </div>
        </div>
    </div>
</template>
<script>
import { deletePost } from '@/api/posts';
export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async deleteItem() {
      if (confirm('You want to delete it?')) {
        await deletePost(this.postItem._id);
        this.$emit('refresh');
      }
    },
    routeEditPage() {
      const id = this.postItem._id;
      this.$router.push(`/post/${id}`);
    },
  },
};
</script>

<style></style>
