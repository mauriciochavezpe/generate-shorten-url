<template>
  <div :class="getDarkMode ? 'bg-gray-50' : 'bg-gray-800'">
    <nav>
      <darkmode />
    </nav>
    <Nuxt />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";

export default Vue.extend({
  data() {
    return { 
    };
  },
  computed: {
    ...mapGetters(["getDarkMode"]),
  },
});
</script>
