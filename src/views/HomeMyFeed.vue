<template>
  <div class="home-my-feed"><RwvQuestionList type="feed" /></div>
</template>

<script>
import RwvQuestionList from "@/components/QuestionList";

export default {
  name: "rwv-home-my-feed",
  components: {
    RwvQuestionList
  }
};
</script>
