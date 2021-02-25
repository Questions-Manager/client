import { QuestionsService, CommentsService } from "@/common/api.service";
import { FETCH_ARTICLE, FETCH_COMMENTS } from "./actions.type";
import { SET_ARTICLE, SET_COMMENTS } from "./mutations.type";

export const state = {
  question: {},
  comments: []
};

export const actions = {
  [FETCH_ARTICLE](context, questionSlug) {
    return QuestionsService.get(questionSlug)
      .then(({ data }) => {
        context.commit(SET_ARTICLE, data.question);
      })
      .catch(error => {
        throw new Error(error);
      });
  },
  [FETCH_COMMENTS](context, questionSlug) {
    return CommentsService.get(questionSlug)
      .then(({ data }) => {
        context.commit(SET_COMMENTS, data.comments);
      })
      .catch(error => {
        throw new Error(error);
      });
  }
};

/* eslint no-param-reassign: ["error", { "props": false }] */
export const mutations = {
  [SET_ARTICLE](state, question) {
    state.question = question;
  },
  [SET_COMMENTS](state, comments) {
    state.comments = comments;
  }
};

export default {
  state,
  actions,
  mutations
};
