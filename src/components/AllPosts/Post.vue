<template>
  <h1>{{ Post.title }}</h1>
  <p>{{ snippet }}</p>
  <div>
  Tags : 
  <button v-for="tag in Post.tags" :key="tag"> {{ tag }} </button>
  </div>
</template>
<style scoped>
h1 {
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
<script>
import { computed } from "vue";
export default {
  props: ["Post"],

  setup(props) {
    let snippet = computed(() => {
      return props.Post.body.substring(0, 150) + "....";
    });

    return { snippet };
  },
};
</script>
