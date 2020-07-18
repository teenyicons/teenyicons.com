<template>
  <div class="space-y-5">
    <div class="sticky z-10 bg-white pt-2" style="top: 0;">
      <div
        class="bg-white px-3 p-2 w-full inline-flex items-center justify-between border border-black space-x-3"
      >
        <icon-search />
        <input
          v-model="searchTerm"
          aria-label="Search icons"
          class="w-full placeholder-black placeholder-opacity-50 focus:outline-none"
          type="search"
          :placeholder="`Search ${$icons.length} icons...`"
          spellcheck="false"
        />
      </div>
      <div
        class="text-xs px-4 flex justify-between items-center border-b border-r border-l border-black"
      >
        <label for="range"
          >Size:
          <input
            v-model.number="IconsSize"
            class="appearance-none"
            name="range"
            min="15"
            step="1"
            max="30"
            type="range"
        /></label>
        <nav>
          <ul class="flex justify-center items-center space-x-5">
            <li class="underline cursor-pointer">Outline</li>
            <li class="cursor-pointer">Filled</li>
          </ul>
        </nav>
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
    return { searchTerm: '', IconsSize: 15 };
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

<style lang="postcss">
input[type='range'] {
  -webkit-appearance: none;
  margin: 18px 0;
}
input[type='range']:focus {
  outline: none;
}
input[type='range']::-webkit-slider-runnable-track {
  width: 100%;
  height: 1px;
  padding: 3px;
  cursor: pointer;
  background: transparent;
  border: 1px solid black;
}
input[type='range']::-webkit-slider-thumb {
  border: 1px solid #000;
  height: 10px;
  width: 10px;
  background: #fff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -5px;
}
input[type='range']:focus::-webkit-slider-runnable-track {
  background: #fff;
}
input[type='range']::-moz-range-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  background: #fff;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}
input[type='range']::-moz-range-thumb {
  border: 1px solid #000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #fff;
  cursor: pointer;
}
input[type='range']::-ms-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  border-width: 16px 0;
  color: transparent;
}
input[type='range']::-ms-fill-lower {
  background: #fff;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
}
input[type='range']::-ms-fill-upper {
  background: #fff;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
}
input[type='range']::-ms-thumb {
  border: 1px solid #000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #fff;
  cursor: pointer;
}
input[type='range']:focus::-ms-fill-lower {
  background: #fff;
}
input[type='range']:focus::-ms-fill-upper {
  background: #fff;
}
</style>
