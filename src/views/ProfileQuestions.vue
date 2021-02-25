<template>
  <div class="profile-page">
    <RwvQuestionList :author="author" :items-per-page="5"></RwvQuestionList>
  </div>
</template>

<script>
import RwvQuestionList from "@/components/QuestionList";

export default {
  name: "RwvProfileQuestions",
  components: {
    RwvQuestionList
  },
  computed: {
    author() {
      return this.$route.params.username;
    }
  }
};
</script>
