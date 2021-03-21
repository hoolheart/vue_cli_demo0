<template>
  <div class="hello">
    <h1 class="font-bold text-lg text-green-900">{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3 class="font-bold mt-4">Installed CLI Plugins</h3>
    <ul class="flex flex-row space-x-2">
      <li class="flex-initial"><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li class="flex-initial"><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li class="flex-initial"><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">vuex</a></li>
      <li class="flex-initial"><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
      <li class="flex-initial"><a href="https://github.com/forsartis/vue-cli-plugin-tailwind" target="_blank" rel="noopener">tailwind</a></li>
    </ul>
    <h3 class="font-bold mt-4">Essential Links</h3>
    <ul  class="flex flex-row space-x-2">
      <li class="flex-initial"><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li class="flex-initial"><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li class="flex-initial"><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li class="flex-initial"><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li class="flex-initial"><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3 class="font-bold mt-4">Ecosystem</h3>
    <ul  class="flex flex-row space-x-2">
      <li class="flex-initial"><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li class="flex-initial"><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li class="flex-initial"><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li class="flex-initial"><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li class="flex-initial"><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
    <p class="invisible">black line</p>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
      按钮
    </button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
