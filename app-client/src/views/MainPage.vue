<template>
    <div class="container">
        <header class="jumbotron my-4">
            <h1 class="display-3">Today I Learned</h1>
            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
        </header>
        <p class="text-right">
            <router-link to="/add" class="btn-sm btn btn-outline-primary">
                <font-awesome-icon icon="pencil-alt" />
            </router-link>
        </p>
        <LoadingSpinner v-if="isLoading"></LoadingSpinner>
        <div class="row text-center" v-else>
            <PostListItem
            v-for="postItem in postItems"
            :key="postItem._id"
            :postItem="postItem"
            @refresh="fetchData"
            ></PostListItem>
        </div>
        <p class="text-right">
            <router-link to="/add" class="btn-sm btn btn-outline-primary">
                <font-awesome-icon icon="pencil-alt" />
            </router-link>
        </p>
    </div>
</template>

<script>
import PostListItem from '@/components/posts/PostListItem.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import { fetchPosts } from '@/api/posts';
export default {
  components: {
    PostListItem,
    LoadingSpinner,
  },
  data() {
    return {
      postItems: [],
      isLoading: false,
    };
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      const { data } = await fetchPosts();
      this.isLoading = false;
      this.postItems = data.posts;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style></style>