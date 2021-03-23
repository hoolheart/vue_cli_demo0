<template>
  <div class="hello">
    <h1 class="font-bold text-lg text-green-900">{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <div v-for="group in groups" :key="group.title">
      <h3 class="font-bold mt-4">{{ group.title }}</h3>
      <ul class="flex flex-row space-x-2">
        <FlexRefItem v-for="item in group.items" :key="item.text" :link="item.link" :text="item.text" />
      </ul>
    </div>
    <p class="invisible">black line</p>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
      按钮
    </button>
  </div>
</template>

<script>
import FlexRefItem from '@/components/FlexRefItem.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      groups: [
        {
          title: 'Installed CLI Plugins',
          items: [
            { link: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel', text: 'babel' },
            { link: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router', text: 'router' },
            { link: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex', text: 'vuex' },
            { link: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint', text: 'eslint' },
            { link: 'https://github.com/forsartis/vue-cli-plugin-tailwind', text: 'tailwind' }
          ]
        },
        {
          title: 'Essential Links',
          items: [
            { link: 'https://vuejs.org', text: 'Core Docs' },
            { link: 'https://forum.vuejs.org', text: 'Forum' },
            { link: 'https://chat.vuejs.org', text: 'Community Chat' },
            { link: 'https://twitter.com/vuejs', text: 'Twitter' },
            { link: 'https://news.vuejs.org', text: 'News' }
          ]
        },
        {
          title: 'Ecosystem',
          items: [
            { link: 'https://router.vuejs.org', text: 'vue-router' },
            { link: 'https://vuex.vuejs.org', text: 'vuex' },
            { link: 'https://github.com/vuejs/vue-devtools#vue-devtools', text: 'vue-devtools' },
            { link: 'https://vue-loader.vuejs.org', text: 'vue-loader' },
            { link: 'https://github.com/vuejs/awesome-vue', text: 'awesome-vue' }
          ]
        }
      ]
    }
  },
  components: {
    FlexRefItem
  }
}
</script>
