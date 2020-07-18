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
        class="text-xs px-4 py-2 flex justify-between items-center border-b border-r border-l border-black"
      >
        <div class="flex space-x-2">
          <label for="range">Size: </label>
          <input
            v-model.number="IconsSize"
            class="appearance-none"
            name="range"
            min="15"
            step="1"
            max="30"
            type="range"
          />
        </div>
        <nav>
          <ul class="flex justify-center items-center space-x-5">
            <li class="cursor-pointer">
              <button
                class="focus:outline-none"
                :class="variant === 'outline' ? 'underline' : ''"
                @click="variant = 'outline'"
              >
                Outline
              </button>
            </li>
            <li class="cursor-pointer">
              <button
                class="focus:outline-none"
                :class="variant === 'filled' ? 'underline' : ''"
                @click="variant = 'filled'"
              >
                Filled
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div
      v-if="variant === 'outline'"
      class="grid gap-1"
      style="grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));"
    >
      <div v-for="(icon, index) in searchIcons" :key="index">
        <app-icon :icon="icon" :size="IconsSize"></app-icon>
      </div>
    </div>
    <div v-if="variant === 'filled'" class="text-center">Coming soon.</div>
  </div>
</template>

<script>
import IconSearch from '@/assets/icons/search.svg';
import AppIcon from '@/components/AppIcon';

export default {
  components: { IconSearch, AppIcon },
  data() {
    return { searchTerm: '', IconsSize: 15, variant: 'outline' };
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
  margin: 1.5px 0;
  background-color: transparent;
  -webkit-appearance: none;
}
input[type='range']:focus {
  outline: none;
}
input[type='range']::-webkit-slider-runnable-track {
  background: #fff;
  border: 1px solid #010101;
  width: 100%;
  height: 8px;
  cursor: pointer;
}
input[type='range']::-webkit-slider-thumb {
  margin-top: -2.5px;
  width: 10px;
  height: 10px;
  background: #fff;
  border: 1px solid #000;
  cursor: pointer;
  -webkit-appearance: none;
}
input[type='range']:focus::-webkit-slider-runnable-track {
  background: #fff;
}
input[type='range']::-moz-range-track {
  background: #fff;
  border: 1px solid #010101;
  width: 100%;
  height: 8px;
  cursor: pointer;
}
input[type='range']::-moz-range-thumb {
  border-radius: 0;
  width: 10px;
  height: 10px;
  background: #fff;
  border: 1px solid #000;
  cursor: pointer;
}
input[type='range']::-ms-track {
  background: transparent;
  border-color: transparent;
  border-width: 1.5px 0;
  color: transparent;
  width: 100%;
  height: 8px;
  cursor: pointer;
}
input[type='range']::-ms-fill-lower {
  background: #fafafa;
  border: 1px solid #010101;
}
input[type='range']::-ms-fill-upper {
  background: #fff;
  border: 1px solid #010101;
}
input[type='range']::-ms-thumb {
  width: 10px;
  height: 10px;
  background: #fff;
  border: 1px solid #000;
  cursor: pointer;
  margin-top: 0;
}
input[type='range']:focus::-ms-fill-lower {
  background: #fff;
}
input[type='range']:focus::-ms-fill-upper {
  background: #fff;
}
@supports (-ms-ime-align: auto) {
  input[type='range'] {
    margin: 0;
  }
}
</style>
