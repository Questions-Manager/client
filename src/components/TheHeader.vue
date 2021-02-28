<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'home' }">
        Popcorns
      </router-link>
      <span v-if="isAuthenticated">
        <router-link
          style="margin-top: 7px"
          class="btn btn-sm btn-primary"
          active-class="active"
          :to="{ name: 'question-edit' }"
        >
          NEW QUESTION
        </router-link>
      </span>
      <ul v-if="!isAuthenticated" class="nav navbar-nav pull-xs-right">
        <!-- <li class="nav-item">
          <router-link
            class="nav-link"
            active-class="active"
            exact
            :to="{ name: 'home' }"
          >
            HOME
          </router-link>
        </li> -->
        <li class="nav-item">
          <router-link
            class="nav-link"
            active-class="active"
            exact
            :to="{ name: 'login' }"
          >
            LOG IN
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            active-class="active"
            exact
            :to="{ name: 'register' }"
          >
            REGISTER
          </router-link>
        </li>
      </ul>
      <ul v-else class="nav navbar-nav pull-xs-right">
        <!-- <li class="nav-item">
          <router-link
            class="nav-link"
            active-class="active"
            exact
            :to="{ name: 'home' }"
          >
            HOME
          </router-link>
        </li> -->
        <!-- <li class="nav-item">
          <router-link
            class="nav-link"
            active-class="active"
            exact
            :to="{ name: 'settings' }"
          >
            <i class="ion-gear-a"></i>&nbsp;SETTINGS
          </router-link>
        </li> -->
        <li class="nav-item" v-if="currentUser.username">
          <router-link
            class="nav-link"
            active-class="active"
            exact
            :to="{
              name: 'settings',
              params: { username: currentUser.username }
            }"
          >
            <img
              :src="currentUser.image || '/img/avatar.png'"
              class="user-img"
              style="width: 39px; height: 39px; border-radius: 50%"
            />
            <!-- {{ currentUser.username }} -->
          </router-link>
        </li>
        <li class="nav-item">
          <button
            @click="logout"
            class="btn btn-sm btn-outline-secondary action-btn"
            style="margin-top: 10px"
          >
            Log out
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import { LOGOUT } from "@/store/actions.type";

export default {
  name: "RwvHeader",
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"])
  },
  methods: {
    logout() {
      this.$store.dispatch(LOGOUT).then(() => {
        this.$router.push({ name: "home" });
      });
    }
  }
};
</script>
