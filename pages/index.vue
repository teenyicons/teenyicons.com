<template>
  <div class="space-y-5">
    <div class="sticky z-10 bg-white pt-2" style="top: 0;">
      <div
        class="bg-white px-3 p-2 w-full inline-flex items-center justify-between border border-black space-x-3"
      >
        <icon-search />
        <input
          aria-label="Search icons"
          v-model="searchTerm"
          class="w-full placeholder-black placeholder-opacity-50 outline-none"
          type="search"
          :placeholder="`Search ${$icons.length} icons...`"
          spellcheck="false"
        />
      </div>
    </div>

    <div
      class="grid gap-1"
      style="grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));"
    >
      <div v-for="(icon, index) in searchIcons" :key="index">
        <app-icon :icon="icon" :size="IconsSize"></app-icon>
      </div>
    </div>
  </div>
</template>

<script>
import IconSearch from '@/assets/icons/search.svg';
import AppIcon from '@/components/AppIcon';

export default {
  components: { IconSearch, AppIcon },
  data() {
    return { searchTerm: '' };
  },
  computed: {
    searchIcons() {
      return this.$icons.filter((el) => {
        return el
          .replace('icon-', '')
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase());
      });
    },
  },
};
</script>
