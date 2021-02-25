<template>
  <div class="question-page">
    <div class="banner">
      <div class="container">
        <h1>{{ question.title }}</h1>
        <RwvQuestionMeta :question="question" :actions="true"></RwvQuestionMeta>
      </div>
    </div>
    <div class="container page">
      <div class="row question-content">
        <div class="col-xs-12">
          <div v-html="parseMarkdown(question.body)"></div>
          <ul class="tag-list">
            <li v-for="(tag, index) of question.tagList" :key="tag + index">
              <RwvTag
                :name="tag"
                className="tag-default tag-pill tag-outline"
              ></RwvTag>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <!-- <div class="question-actions">
        <RwvQuestionMeta :question="question" :actions="true"></RwvQuestionMeta>
      </div> -->
      <div class="row">
        <div class="col-xs-12 col-md-12">
          <RwvComment
            v-for="(comment, index) in comments"
            :slug="slug"
            :comment="comment"
            :key="index"
          >
          </RwvComment>
          <RwvCommentEditor
            v-if="isAuthenticated"
            :slug="slug"
            :userImage="currentUser.image"
          >
          </RwvCommentEditor>
          <p v-else>
            <router-link :to="{ name: 'login' }">Sign in</router-link>
            or
            <router-link :to="{ name: 'register' }">sign up</router-link>
            to add comments on this question.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import marked from "marked";
import store from "@/store";
import RwvQuestionMeta from "@/components/QuestionMeta";
import RwvComment from "@/components/Comment";
import RwvCommentEditor from "@/components/CommentEditor";
import RwvTag from "@/components/VTag";
import { FETCH_ARTICLE, FETCH_COMMENTS } from "@/store/actions.type";

export default {
  name: "rwv-question",
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  components: {
    RwvQuestionMeta,
    RwvComment,
    RwvCommentEditor,
    RwvTag
  },
  beforeRouteEnter(to, from, next) {
    Promise.all([
      store.dispatch(FETCH_ARTICLE, to.params.slug),
      store.dispatch(FETCH_COMMENTS, to.params.slug)
    ]).then(() => {
      next();
    });
  },
  computed: {
    ...mapGetters(["question", "currentUser", "comments", "isAuthenticated"])
  },
  methods: {
    parseMarkdown(content) {
      return marked(content);
    }
  }
};
</script>
