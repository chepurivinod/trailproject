<template>
  <h1>This is Images Page</h1>
</template>

<script>
export default {
  setup() {
    let arr = ["val", "value2", "value3", "value4"];
    // let arrObject = ref({});
    // for (let i = 0; i < arr.length; i++) {
    //   if (arr[i] != "undefined") {
    //     arrObject[i] = arr[i];
    //   }
    // }

    //  join method in javascript

    let arrObject = { ...arr };
    let filledArray = new Array(5).fill(null).map(() => ({ hello: "goodBye" }));

    console.log(arrObject, filledArray);

    let el = ["water", "air", "fire", "earth"];

    console.log(el.join());
    console.log(el.join(" "));
    console.log(el.join("-"));
  },
};
</script>
