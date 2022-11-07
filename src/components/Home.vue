<template>
    <div class="error" v-if="error">{{ error }}</div>
    <Posts v-else-if="posts.length" :posts="posts"/>
    <div class="loading" v-else>Loading...</div>
</template>

<script>
import { ref } from 'vue';
import Posts from '../components/AllPosts/posts.vue';


export default {
name: 'HomePage',
components: { Posts },
setup() {

    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
        try {
            let data = await fetch('http://localhost:3000/posts');
            if(!data.ok) {
                throw Error('Oops No data found');
            }
            posts.value = await data.json();
        }
        catch(err) {
            error.value = err.message;
        }
    }
    load();
    return { posts, error }
}
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