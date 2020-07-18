<template>
  <div class="h-full flex flex-col min-h-screen max-w-screen-md mx-auto px-10">
    <header class="py-6 text-center space-y-6 mb-5">
      <nav>
        <ul class="flex items-center justify-center space-x-3">
          <li><a class="underline" href="#">github</a></li>
          <li><a class="underline" href="#">figma</a></li>
        </ul>
      </nav>
      <div>
        <h1 class="font-bold text-5xl">
          Teenycons
        </h1>
        <p class="text-sm">Tiny minimal 1px icons</p>
      </div>
      <p>Made by person. Viewer by person.</p>
    </header>
    <Nuxt class="flex-grow" />
    <footer class="py-6 text-center text-xs">
      Released under SOME License
    </footer>
  </div>
</template>

<style lang="postcss">
body {
  font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, Ubuntu,
    Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, 'Helvetica Neue',
    Arial, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji';
  overflow: overlay;
}
</style>
