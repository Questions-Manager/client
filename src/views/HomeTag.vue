<template>
  <div class="home-tag"><RwvQuestionList :tag="tag"></RwvQuestionList></div>
</template>

<script>
import RwvQuestionList from "@/components/QuestionList";

export default {
  name: "RwvHomeTag",
  components: {
    RwvQuestionList
  },
  computed: {
    tag() {
      return this.$route.params.tag;
    }
  }
};
</script>
