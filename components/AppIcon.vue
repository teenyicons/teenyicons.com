<template>
  <div
    :title="icon"
    class="cursor-pointer py-8 flex flex-col justify-center items-center space-y-2 hover:border-black border-transparent border"
  >
    <component :is="icon" :width="size" :height="size" />
    <span class="w-full text-center truncat text-xs">{{
      icon.replace('icon-', '')
    }}</span>
  </div>
</template>

<script>
export default {
  props: {
    icon: { type: String, required: true },
    size: { type: Number, required: true },
  },
};
</script>
