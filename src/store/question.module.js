import Vue from "vue";
import {
  QuestionsService,
  CommentsService,
  FavoriteService
} from "@/common/api.service";
import {
  FETCH_ARTICLE,
  FETCH_COMMENTS,
  COMMENT_CREATE,
  COMMENT_DESTROY,
  FAVORITE_ADD,
  FAVORITE_REMOVE,
  ARTICLE_PUBLISH,
  ARTICLE_EDIT,
  ARTICLE_EDIT_ADD_TAG,
  ARTICLE_EDIT_REMOVE_TAG,
  ARTICLE_DELETE,
  ARTICLE_RESET_STATE
} from "./actions.type";
import {
  RESET_STATE,
  SET_ARTICLE,
  SET_COMMENTS,
  TAG_ADD,
  TAG_REMOVE,
  UPDATE_ARTICLE_IN_LIST
} from "./mutations.type";

const initialState = {
  question: {
    author: {},
    title: "",
    description: "",
    body: "",
    tagList: []
  },
  comments: []
};

export const state = { ...initialState };

export const actions = {
  async [FETCH_ARTICLE](context, questionSlug, prevQuestion) {
    // avoid extronuous network call if question exists
    if (prevQuestion !== undefined) {
      return context.commit(SET_ARTICLE, prevQuestion);
    }
    const { data } = await QuestionsService.get(questionSlug);
    context.commit(SET_ARTICLE, data.question);
    return data;
  },
  async [FETCH_COMMENTS](context, questionSlug) {
    const { data } = await CommentsService.get(questionSlug);
    context.commit(SET_COMMENTS, data.comments);
    return data.comments;
  },
  async [COMMENT_CREATE](context, payload) {
    await CommentsService.post(payload.slug, payload.comment);
    context.dispatch(FETCH_COMMENTS, payload.slug);
  },
  async [COMMENT_DESTROY](context, payload) {
    await CommentsService.destroy(payload.slug, payload.commentId);
    context.dispatch(FETCH_COMMENTS, payload.slug);
  },
  async [FAVORITE_ADD](context, slug) {
    const { data } = await FavoriteService.add(slug);
    context.commit(UPDATE_ARTICLE_IN_LIST, data.question, { root: true });
    context.commit(SET_ARTICLE, data.question);
  },
  async [FAVORITE_REMOVE](context, slug) {
    const { data } = await FavoriteService.remove(slug);
    // Update list as well. This allows us to favorite an question in the Home view.
    context.commit(UPDATE_ARTICLE_IN_LIST, data.question, { root: true });
    context.commit(SET_ARTICLE, data.question);
  },
  [ARTICLE_PUBLISH]({ state }) {
    return QuestionsService.create(state.question);
  },
  [ARTICLE_DELETE](context, slug) {
    return QuestionsService.destroy(slug);
  },
  [ARTICLE_EDIT]({ state }) {
    return QuestionsService.update(state.question.slug, state.question);
  },
  [ARTICLE_EDIT_ADD_TAG](context, tag) {
    context.commit(TAG_ADD, tag);
  },
  [ARTICLE_EDIT_REMOVE_TAG](context, tag) {
    context.commit(TAG_REMOVE, tag);
  },
  [ARTICLE_RESET_STATE]({ commit }) {
    commit(RESET_STATE);
  }
};

/* eslint no-param-reassign: ["error", { "props": false }] */
export const mutations = {
  [SET_ARTICLE](state, question) {
    state.question = question;
  },
  [SET_COMMENTS](state, comments) {
    state.comments = comments;
  },
  [TAG_ADD](state, tag) {
    if (!state.question.tagList) {
      console.log(
        "Question tagList is not retrieved properly and that's why new tags can't be added."
      );
    }
    state.question.tagList = state.question.tagList.concat([tag]);
  },
  [TAG_REMOVE](state, tag) {
    state.question.tagList = state.question.tagList.filter(t => t !== tag);
  },
  [RESET_STATE]() {
    for (let f in state) {
      Vue.set(state, f, initialState[f]);
    }
  }
};

const getters = {
  question(state) {
    return state.question;
  },
  comments(state) {
    return state.comments;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
