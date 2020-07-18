<template>
  <div class="h-full flex flex-col min-h-screen max-w-screen-md mx-auto px-10">
    <header class="py-6 text-center space-y-6 mb-5">
      <nav>
        <ul class="flex items-center justify-center space-x-3">
          <li>
            <a class="underline" href="https://github.com/smhmd/teenycons"
              >github</a
            >
          </li>
          <li>
            <a
              class="underline"
              href="https://www.figma.com/community/file/863456942245162897/Teenycons"
              >figma</a
            >
          </li>
        </ul>
      </nav>
      <div>
        <h1 class="font-bold text-5xl">
          Teenycons
        </h1>
        <p class="text-sm">Tiny minimal 1px icons</p>
      </div>
      <p>
        Icons by
        <a class="underline" href="https://twitter.com/rebellenoire">
          <img
            class="inline w-8 h-7 rounded-full"
            src="@/assets/anja.png"
            alt="anja"
        /></a>
        Viewer by
        <a class="underline" href="https://twitter.com/_smhmd">
          <img
            class="inline w-8 h-7 rounded-full"
            src="@/assets/smhmd.png"
            alt="simohamed"
          />
        </a>
      </p>
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
  overflow-y: scroll;
}
</style>
