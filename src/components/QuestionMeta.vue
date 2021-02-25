<template>
  <div class="question-meta">
    <!-- <router-link v-if="isCurrentUser()"
      :to="{ name: 'profile', params: { username: question.author.username } }"
    >
      <img v-if="question.author.image" :src="question.author.image" />
      <img v-else src="/img/avatar.png" />
    </router-link> -->
    <div class="info">
      <!-- <router-link
        :to="{ name: 'profile', params: { username: question.author.username } }"
        class="author"
      >
        {{ question.author.username }}
      </router-link> -->
      <span class="date">{{ question.createdAt | date }}</span>
    </div>
    <rwv-question-actions
      v-if="actions"
      :question="question"
      :canModify="isCurrentUser()"
    ></rwv-question-actions>
    <button
      v-else
      class="btn btn-sm pull-xs-right"
      @click="toggleFavorite"
      :class="{
        'btn-primary': question.favorited,
        'btn-outline-primary': !question.favorited
      }"
    >
      <i class="ion-heart"></i>
      <span class="counter"> {{ question.favoritesCount }} </span>
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import RwvQuestionActions from "@/components/QuestionActions";
import { FAVORITE_ADD, FAVORITE_REMOVE } from "@/store/actions.type";

export default {
  name: "RwvQuestionMeta",
  components: {
    RwvQuestionActions
  },
  props: {
    question: {
      type: Object,
      required: true
    },
    actions: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"])
  },
  methods: {
    isCurrentUser() {
      if (this.currentUser.username && this.question.author.username) {
        return this.currentUser.username === this.question.author.username;
      }
      return false;
    },
    toggleFavorite() {
      if (!this.isAuthenticated) {
        this.$router.push({ name: "login" });
        return;
      }
      const action = this.question.favorited ? FAVORITE_REMOVE : FAVORITE_ADD;
      this.$store.dispatch(action, this.question.slug);
    }
  }
};
</script>
