<template>
  <div class="hello">
    <h1 class="font-bold text-lg text-green-900">{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,
      check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
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
import Vue from 'vue'
import FlexRefItem from '@/components/FlexRefItem.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      groups: [{ title: 'Loading help info...', items: [] }]
    }
  },
  mounted () {
    // console.info('try get help info')
    Vue.http.get('/api/help').then(
      response => {
        // console.info(response.body)
        this.groups = response.body
      },
      response => {
        console.error(response)
      }
    )
  },
  components: {
    FlexRefItem
  }
}
</script>
