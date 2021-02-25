import { TagsService, QuestionsService } from "@/common/api.service";
import { FETCH_ARTICLES, FETCH_TAGS } from "./actions.type";
import {
  FETCH_START,
  FETCH_END,
  SET_TAGS,
  UPDATE_ARTICLE_IN_LIST
} from "./mutations.type";

const state = {
  tags: [],
  questions: [],
  isLoading: true,
  questionsCount: 0
};

const getters = {
  questionsCount(state) {
    return state.questionsCount;
  },
  questions(state) {
    return state.questions;
  },
  isLoading(state) {
    return state.isLoading;
  },
  tags(state) {
    return state.tags;
  }
};

const actions = {
  [FETCH_ARTICLES]({ commit }, params) {
    commit(FETCH_START);
    return QuestionsService.query(params.type, params.filters)
      .then(({ data }) => {
        commit(FETCH_END, data);
      })
      .catch(error => {
        throw new Error(error);
      });
  },
  [FETCH_TAGS]({ commit }) {
    return TagsService.get()
      .then(({ data }) => {
        commit(SET_TAGS, data.tags);
      })
      .catch(error => {
        throw new Error(error);
      });
  }
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  [FETCH_START](state) {
    state.isLoading = true;
  },
  [FETCH_END](state, { questions, questionsCount }) {
    state.questions = questions;
    state.questionsCount = questionsCount;
    state.isLoading = false;
  },
  [SET_TAGS](state, tags) {
    state.tags = tags;
  },
  [UPDATE_ARTICLE_IN_LIST](state, data) {
    state.questions = state.questions.map(question => {
      if (question.slug !== data.slug) {
        return question;
      }
      // We could just return data, but it seems dangerous to
      // mix the results of different api calls, so we
      // protect ourselves by copying the information.
      question.favorited = data.favorited;
      question.favoritesCount = data.favoritesCount;
      return question;
    });
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
