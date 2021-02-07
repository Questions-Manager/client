<template>
  <footer>
    <div class="container">
      <router-link class="logo-font" :to="{ name: 'home', params: {} }">
        Popcorns
      </router-link>
      <span class="attribution">
        For Product People That Gain Knowledge by Asking Questions
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "RwvFooter"
};
</script>
