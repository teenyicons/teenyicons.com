<template>
  <div
    :title="icon"
    class="relative flex flex-col items-center justify-center py-8 space-y-2 border border-transparent rounded cursor-pointer icon-card hover:border-theme-secondary hover:shadow-mermaid"
    :class="copied ? 'border-theme-secondary shadow-mermaid' : ''"
    @click="copy"
    @keydown.enter="copy"
    @keydown.space.prevent="copy"
  >
    <component :is="icon" ref="icon" :width="size" :height="size" />
    <span class="w-full px-1 text-xs text-center truncat">{{
      icon.replace(variant + '-', '')
    }}</span>
    <span
      v-show="copied"
      class="absolute inset-x-0 bottom-0 w-full mx-auto text-xs text-center text-black rounded-b bg-mermaid"
      >Copied!</span
    >
  </div>
</template>

<script>
import copyToClipboard from '@/helpers/copyToClipboard';
export default {
  name: 'Icon',
  props: {
    icon: { type: String, required: true },
    variant: { type: String, default: 'outline' },
    size: { type: Number, default: 15 },
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
