<template>
    <h1 class="title">All Posts</h1>
    <div class="posts" v-for="post in data.posts" :key="post.id">
        <h1 class="post-title">{{ post.title }}</h1>
        <p>{{ post.body.substring(0, 120) + "...." }}</p>
    <div>
    Tags : 
         <button v-for="tag in post.tags" :key="tag"> {{ tag }} </button>
  </div>
    </div>
</template>

<style scoped>
.title {
    margin: 0;
    padding: 8px;
    color:rgb(142, 17, 244);
    font-size: 3.5em;
}
.post-title {
  color: rgb(240, 164, 21);
  margin: 0;
  padding: 0.8em;
}
p {
  color: rgb(91, 139, 15);
  padding: 0.5em;
  margin: 0;
}
div {
  color: #fa143bf6;
  font-weight: 900
}
button {
  border: none;
  background : none;
  color: #6657efda;
  font-weight: 700;
  font-size: large
}
</style>

<script setup>
import { dataStore } from '@/stores/data';

const data = dataStore();
</script>