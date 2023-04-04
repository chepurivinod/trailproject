<template>
  <div class="row">
    <div class="offset-md-3 col-md-6 mt-5">
      <h3>Article Form</h3>
      <form action="#" @submit.prevent="submitData">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Title"
            v-model="article.title"
            @blur="validate('title')"
          />
        </div>
        <div class="form-group">
          <textarea
            type="text"
            class="form-control"
            placeholder="description"
            v-model="article.description"
            @blur="validate('description')"
          ></textarea>
        </div>
        <div class="form-group">
          <input type="submit" class="btn btn-primary btn-block" value="submit" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import * as Yup from "yup";

const ArticleSchema = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .min(5, "title should be atleasst 5 charecters")
    .max(25, "title should be less than 25 charecters"),
  description: Yup.string().required("Description is required"),
});
export default {
  name: "Images",
  setup() {
    let article = ref({
      title: "",
      description: "",
    });

    function submitData() {
      const submittedData = `${article.value.title} ${article.value.description}`;
      console.log(submittedData);
    }
    function validate(field) {
      ArticleSchema.validateAt(field, article.value).then(() => {
        console.log("article", article.value);
      });
    }
    return {
      submitData,
      validate,
      article,
    };
  },
};
</script>
