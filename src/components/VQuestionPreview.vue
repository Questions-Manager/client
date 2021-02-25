<template>
  <div class="question-preview">
    <router-link :to="questionLink" class="preview-link">
      <h1 v-text="question.title" />
      <!-- <p v-text="question.description" /> -->
      <!-- <span>Read more...</span> -->
      <TagList :tags="question.tagList" />
    </router-link>
    <RwvQuestionMeta isPreview :question="question" />
  </div>
</template>

<script>
import RwvQuestionMeta from "./QuestionMeta";
import TagList from "./TagList";

export default {
  name: "RwvQuestionPreview",
  components: {
    RwvQuestionMeta,
    TagList
  },
  props: {
    question: { type: Object, required: true }
  },
  computed: {
    questionLink() {
      return {
        name: "question",
        params: {
          slug: this.question.slug
        }
      };
    }
  }
};
</script>
