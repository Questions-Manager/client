<template>
  <div class="profile-page">
    <RwvQuestionList :favorited="favorited" :items-per-page="5">
    </RwvQuestionList>
  </div>
</template>

<script>
import RwvQuestionList from "@/components/QuestionList";

export default {
  name: "RwvProfileFavorited",
  components: {
    RwvQuestionList
  },
  computed: {
    favorited() {
      return this.$route.params.username;
    }
  }
};
</script>
