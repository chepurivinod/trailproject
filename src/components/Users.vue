<template>
    <h1>This is users page</h1>
    <span v-for="name of names " :key="name"> {{ name }}</span>
    <input type="text" v-model="search"/>
    <p>search value - {{ search }}</p>
    <span class="match" v-for="name in matchingNames" :key="name">{{ name }}</span>
</template>

<style scoped>
span {
    margin-left: 0.5em;
    color:rgb(13, 102, 102);
    padding: 0.6em;
}
p, .match {
    color: red;
}
</style>

<script>
import { ref, computed } from 'vue';
export default {
    name: 'UsersPage',
    setup() {
        const search = ref('');
        const names = ref(['marion', 'toshi', 'jodhij', 'carlss', 'pinkerf', 'jdvlido', 'plorefsf', 'zinkoter', 'wrapperror'])
        
        // const matchingNames = computed(() => {
        //     return names.value.sort((a, b) => b.localeCompare(a));
        // })
        const matchingNames = computed(() => {
            return names.value.filter((name) => name.includes(search.value));
        })

        return {search, names, matchingNames}
    }
}
</script>