<template>
    <div class="error" v-if="error">{{ error }}</div>
    <Posts v-else-if="data.posts.length" :posts="posts"/>
    <div class="loading" v-else>Loading...</div>
</template>

<script setup>
import { ref } from 'vue';
import { dataStore } from '@/stores/data';
import Posts from '../components/AllPosts/postsInfo.vue';

    const posts = ref([]);
    const error = ref(null);
    const data = dataStore();
    if(!data.posts) {
        error.value = 'Oops No data found'
    } else {
        posts.value = data.posts;
    }

</script>

<style scoped>
.error {
    display: flex;
    justify-content: center;
    margin-top: 15%;
    color: rgba(246, 26, 26, 0.921);
    font-size: 3em;
}
.loading {
    display: flex;
    justify-content: center;
    margin-top: 18%;
    color: rgba(29, 177, 236, 0.951);
    font-size: 2em;
}
</style>