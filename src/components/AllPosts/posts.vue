<template>
    <h1>All Posts</h1>
    <div class="posts" v-for="post in posts" :key="post.id">
        <Post :Post="post"/>
    </div>
</template>

<style scoped>
h1 {
    margin: 0;
    padding: 8px;
    color:rgb(131, 20, 222);
    font-size: 3.5em;
}
</style>

<script>
import Post from './Post.vue';
export default {
components : { Post },
props : ['posts']
}
</script>