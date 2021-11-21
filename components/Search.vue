<template>
  <!-- <div class=" w-full"> -->
  <div class="flex items-center w-full md:w-5/12 | mb-10">
    <div class="relative shadow-xl flex rounded-lg w-full">
      <input
        class="
          p-3
          |
          bg-gray-50
          focus:outline-none focus:ring-2
          border-none
          w-screen
          |
          rounded-l-lg
        "
        placeholder="www.google.com"
        type="text"
        v-model="sUrl"
      />
      <button
        class="
          group
          -ml-px
          relative
          inline-flex
          items-center
          px-3
          py-3
          border border-indigo-300
          text-sm
          leading-5
          font-medium
          rounded-r-md
          text-white
          bg-indigo-700
          hover:text-indigo-700 hover:bg-white
          focus:outline-none focus:shadow-outline-blue focus:border-indigo-300
          active:bg-gray-100 active:text-indigo-700
          transition
          ease-in-out
          duration-150
        "
        @click="invokeValidate"
      >
        <div class="w-8 h-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-full"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        shorten
      </button>
      <span class="absolute mt-14 p-2 bg-red-600 w-4/5 rounded-b-lg text-white">
        <p class="text-xs">
          El texto ingresado no coincide con una cadena url <br />Por favor
          intente con otra.
        </p>
      </span>
    </div>
  </div>
  <!-- </div> -->
</template>

<script lang="ts">
import Vue from "vue";
import {mapActions} from "vuex";

// usar TypeScript aqui
function validateUrl(url: string) {
  var regex = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  if (!regex.test(url)) {
    return false;
  } else {
    return true;
  }
}

export default Vue.extend({
  data() {
    const message: string = "This is a message";
    const sUrl: string = "";
    const bValidUrl: boolean = false;

    return {
      message,
      sUrl,
      bValidUrl,
    };
  },
  methods: {
    ...mapActions(["addShortUrl"]),
    invokeValidate(): void {
      
      if (validateUrl(this.sUrl)) {
       this.addShortUrl(this.sUrl);
        this.bValidUrl = true;
      } else {
        console.log("no es valido");
        
        this.bValidUrl = false;
      }
    },
  },
});
</script>

<style></style>
