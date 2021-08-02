<template>
  <div>
    <div class="flex flex-col mt-2 space-y-2" v-for="item in items" :key="item.link">
      <router-link class="flex-none bg-green-600 hover:bg-green-900 text-gray-200 font-bold py-2 px-4 rounded-md no-underline" :to=item.link>
        {{item.text}}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigator',
  data () {
    return {
      items: [
        { link: '/', text: '帮助' },
        { link: '/table', text: '表格' },
        { link: '/about', text: '说明' }
      ]
    }
  }
}
</script>
