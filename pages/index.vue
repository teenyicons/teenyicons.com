<template>
  <div class="space-y-5">
    <div class="sticky z-10 bg-white pt-2" style="top: 0;">
      <div
        class="bg-white px-3 p-2 w-full inline-flex items-center justify-between border border-black space-x-3"
      >
        <img src="@/assets/icons/search.svg" alt="" />
        <input
          v-model="searchTerm"
          class="w-full placeholder-black placeholder-opacity-50 outline-none"
          type="text"
          :placeholder="`Search ${$options.icons.length} icons...`"
          spellcheck="false"
        />
      </div>
    </div>

    <div class="grid grid-cols-6 gap-1">
      <div
        v-for="(icon, index) in searchIcons"
        :key="index"
        class="relative cursor-pointer p-10 flex flex-col justify-center items-center space-y-2 hover:border-black border-transparent border"
      >
        <span
          v-if="icon.new"
          class="absolute px-1 m-1 top-0 right-0 text-xs bg-black text-white"
          >new</span
        >
        <img
          class="w-4"
          :title="icon.description"
          :src="require(`@/assets/icons/${icon.name}.svg`)"
          :alt="icon.description"
        />
        <span class="truncate text-xs">{{ icon.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { icons } from '@/assets/icons.js';
export default {
  icons,
  data() {
    return { searchTerm: '' };
  },
  computed: {
    searchIcons() {
      return this.$options.icons.filter((el) => {
        return el.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    },
  },
};
</script>
