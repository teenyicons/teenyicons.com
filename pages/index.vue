<template>
  <main class="w-full max-w-screen-md mx-auto">
    <section
      class="sticky top-0 z-10 flex flex-col justify-center pt-3 -mt-3 space-y-2 bg-theme-primary"
    >
      <div class="relative">
        <input
          v-model="searchTerm"
          type="search"
          :placeholder="`Search icons...`"
          class="w-full py-6 pl-16 border rounded appearance-none bg-theme-primary border-theme-secondary focus:outline-none focus:border-mermaid"
        />
        <div
          class="absolute inset-y-0 left-0 flex items-center justify-center pl-6 pointer-events-none text-mermaid"
          style="margin-left: -2px; margin-top: 2px;"
        >
          <svg
            class="w-4 h-4 stroke-current"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 15 15"
          >
            <path d="M14.5 14.5l-4-4m-4 2a6 6 0 110-12 6 6 0 010 12z" />
          </svg>
        </div>
        <div
          class="absolute inset-y-0 left-0 flex items-center justify-center pl-6 pointer-events-none"
        >
          <svg
            class="w-4 h-4 stroke-current"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 15 15"
          >
            <path d="M14.5 14.5l-4-4m-4 2a6 6 0 110-12 6 6 0 010 12z" />
          </svg>
        </div>
      </div>
      <div
        class="flex items-center justify-between px-5 py-4 rounded bg-theme-secondary text-theme-primary"
      >
        <div class="flex items-center justify-center space-x-3">
          <label for="size">Size</label>
          <input
            v-model.number="size"
            min="15"
            step="1"
            max="30"
            type="range"
            name="size"
          />
        </div>
        <ul class="flex space-x-3">
          <li>
            <button
              :class="
                variant === 'outline'
                  ? 'text-theme-ternary'
                  : 'text-theme-disabled'
              "
              @click="variant = 'outline'"
            >
              Outline
            </button>
          </li>
          <li>
            <button
              :class="
                variant === 'filled'
                  ? 'text-theme-ternary'
                  : 'text-theme-disabled'
              "
              @click="variant = 'filled'"
            >
              Filled
            </button>
          </li>
        </ul>
      </div>
    </section>
    <section
      class="grid gap-1 pt-5"
      style="grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));"
    >
      <template v-if="variant === 'outline'">
        <div v-for="(icon, index) in outlineIconsFiltered" :key="index">
          <app-icon :icon="icon" :size="size" :variant="variant"></app-icon>
        </div>
      </template>
      <template v-else-if="variant === 'filled'">
        <div v-for="(icon, index) in filledIconsFiltered" :key="index">
          <app-icon :icon="icon" :size="size" :variant="variant"></app-icon>
        </div>
      </template>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return { searchTerm: '', size: 15, variant: 'outline' };
  },
  computed: {
    outlineIconsFiltered() {
      return this.$outlineIcons.filter((el) => {
        return el
          .replace('outline-', '')
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase());
      });
    },
    filledIconsFiltered() {
      return this.$filledIcons.filter((el) => {
        return el
          .replace('filled-', '')
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase());
      });
    },
  },
};
</script>

<style lang="postcss">
input[type='range'] {
  background: transparent;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
}
input[type='range']:focus {
  outline: none;
}
input[type='range']::-webkit-slider-runnable-track {
  width: 100%;
  height: 1px;
  cursor: pointer;
  background: var(--primary);
}
input[type='range']::-webkit-slider-thumb {
  height: 18px;
  width: 18px;
  border-radius: 9px;
  background: #01e2c7;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -8.5px;
}
input[type='range']:focus::-webkit-slider-runnable-track {
  background: var(--primary);
}
input[type='range']::-moz-range-track {
  width: 100%;
  height: 1px;
  cursor: pointer;
  background: var(--primary);
  border-radius: 0;
}
input[type='range']::-moz-range-thumb {
  height: 18px;
  width: 18px;
  border-radius: 9px;
  background: #01e2c7;
  cursor: pointer;
}
input[type='range']::-ms-track {
  width: 100%;
  height: 1px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type='range']::-ms-fill-lower {
  background: var(--primary);
}
input[type='range']::-ms-fill-upper {
  background: var(--primary);
}
input[type='range']::-ms-thumb {
  margin-top: 1px;
  height: 18px;
  width: 18px;
  border-radius: 9px;
  background: #01e2c7;
  cursor: pointer;
}
input[type='range']:focus::-ms-fill-lower {
  background: var(--primary);
}
input[type='range']:focus::-ms-fill-upper {
  background: var(--primary);
}
</style>
