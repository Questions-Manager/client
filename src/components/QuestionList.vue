<template>
  <div v-if="isAuthenticated">
    <div v-if="isLoading" class="question-preview">Loading questions...</div>
    <div v-else>
      <div v-if="questions.length === 0" class="question-preview">
        No questions are here... yet.
      </div>
      <RwvQuestionPreview
        v-for="(question, index) in questions"
        :question="question"
        :key="question.title + index"
      />
      <VPagination :pages="pages" :currentPage.sync="currentPage" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import RwvQuestionPreview from "./VQuestionPreview";
import VPagination from "./VPagination";
import { FETCH_ARTICLES } from "../store/actions.type";

export default {
  name: "RwvQuestionList",
  components: {
    RwvQuestionPreview,
    VPagination
  },
  props: {
    type: {
      type: String,
      required: false,
      default: "all"
    },
    author: {
      type: String,
      required: false
    },
    tag: {
      type: String,
      required: false
    },
    favorited: {
      type: String,
      required: false
    },
    itemsPerPage: {
      type: Number,
      required: false,
      default: 10
    }
  },
  data() {
    return {
      currentPage: 1
    };
  },
  computed: {
    listConfig() {
      const { type } = this;
      const filters = {
        offset: (this.currentPage - 1) * this.itemsPerPage,
        limit: this.itemsPerPage
      };
      if (this.author) {
        filters.author = this.author;
      }
      if (this.tag) {
        filters.tag = this.tag;
      }
      if (this.favorited) {
        filters.favorited = this.favorited;
      }
      return {
        type,
        filters
      };
    },
    pages() {
      if (this.isLoading || this.questionsCount <= this.itemsPerPage) {
        return [];
      }
      if (!this.questionsCount) {
        return [];
      }
      return [
        ...Array(Math.ceil(this.questionsCount / this.itemsPerPage)).keys()
      ].map(e => e + 1);
    },
    ...mapGetters([
      "questionsCount",
      "isLoading",
      "questions",
      "isAuthenticated"
    ])
  },
  watch: {
    currentPage(newValue) {
      this.listConfig.filters.offset = (newValue - 1) * this.itemsPerPage;
      this.fetchQuestions();
    },
    type() {
      this.resetPagination();
      this.fetchQuestions();
    },
    author() {
      this.resetPagination();
      this.fetchQuestions();
    },
    tag() {
      this.resetPagination();
      this.fetchQuestions();
    },
    favorited() {
      this.resetPagination();
      this.fetchQuestions();
    }
  },
  mounted() {
    this.fetchQuestions();
  },
  methods: {
    fetchQuestions() {
      this.$store.dispatch(FETCH_ARTICLES, this.listConfig);
    },
    resetPagination() {
      this.listConfig.offset = 0;
      this.currentPage = 1;
    }
  }
};
</script>
