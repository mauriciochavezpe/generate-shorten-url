<template>
  <!-- <div class="w"> -->
  <div class="w-full md:w-5/12">
    <ul class="w-full  max-h-96 overflow-y-scroll">
      <li class="my-3 bg-white" v-for="(item, key) in getlsUrlShort " :key="key">
        <div class="p-4">
          <div class="flex my-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
            <h3 class="px-2 text-lg leading-6 font-semibold text-gray-900">
              Your url shorterd
            </h3>
          </div>
          <div
            class="
              mt-2
              max-w-xl
              text-xs
              font-medium
              leading-5
              text-gray-500
              overflow-hidden
            "
          >
            <p>{{ item.url }}</p>
          </div>
          <!-- <span class="my-1"></span> -->
          <div class="flex mt-3 text-sm">
            <!-- <span class=""> -->
            <a
              :href="item.url"
              target="_blank"
              class="
                font-medium
                text-indigo-600
                hover:text-indigo-500
                transition
                ease-in-out
                duration-150
              "
              >{{ item.path }} &rarr;</a
            >
            <!-- </span> -->
          </div>
        </div>
      </li>
    </ul>
  </div>
  <!-- </div> -->
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
// usar TypeScript aqui

export default Vue.extend({
  name: "List",
  data() {
    const message: string = "This is a message";

    return {
      message,
      // list,
    };
  },
  computed: {
    ...mapGetters(["getlsUrlShort"]),
  },
});
</script>

<style scoped>
.h-85 {
  height: 25rem;
}
</style>
