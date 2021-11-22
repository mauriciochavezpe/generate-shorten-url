<template>
  <div class="container mx-auto p-4">
    <div class="flex justify-end">
      <div class="flex items-center">
        <div class="w-9 h-9">
          <svg
            class="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            :fill="getDarkMode ? 'none' : 'white'"
            viewBox="0 0 24 24"
            :stroke="getDarkMode ? 'black' : 'white'"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="{2}"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </div>
        <label class="switch mx-2">
          <input type="checkbox" v-model="flagMode" />
          <span class="slider round"></span>
        </label>
        <div class="w-9 h-9">
          <svg
            class="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            :fill="getDarkMode ? 'none' : 'white'"
            viewBox="0 0 24 24"
            :stroke="getDarkMode ? 'black' : 'white'"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="{2}"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";

export default Vue.extend({
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getDarkMode"]),
    flagMode: {
      get(): boolean {
        return this.getDarkMode;
      },
      set(v: boolean): void {
        this.changeMode(v);
      },
    },
  },
  methods: {
    check() {
      console.log(":) ", this.flagMode);
      this.flagMode = !this.flagMode;
    },
    ...mapActions(["changeMode"]),
  },
});
</script>

<style scoped>
input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(218, 218, 218);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
</style>
