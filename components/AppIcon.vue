<template>
  <div
    :title="icon"
    class="relative cursor-pointer py-8 flex flex-col justify-center items-center space-y-2 hover:border-black border-transparent border"
    @click="copy"
    @keydown.enter="copy"
    @keydown.space.prevent="copy"
  >
    <component :is="icon" ref="icon" :width="size" :height="size" />
    <span class="w-full text-center truncat text-xs">{{
      icon.replace('icon-', '')
    }}</span>
    <span
      v-show="copied"
      class="absolute inset-x-0 bottom-0 mx-auto w-full text-center text-xs bg-black text-white"
      >Copied!</span
    >
  </div>
</template>

<script>
import copyToClipboard from '@/helpers/copyToClipboard';
export default {
  props: {
    icon: { type: String, required: true },
    size: { type: Number, required: true },
  },
  data() {
    return { copied: false };
  },
  methods: {
    copy() {
      copyToClipboard(this.$refs.icon.$el.outerHTML);
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 1000);
    },
  },
};
</script>
