<template>
  <div class="w-full bg-blue-600 text-gray-100 h-14 flex flex-row">
    <router-link class="md:hidden flex-none bg-transparent hover:bg-blue-900 no-underline" to="/nav">
      <img class="object-none object-center w-12 h-12" alt="Navigation" src="../assets/ic_view_list_48px.png" />
    </router-link>
    <div class="flex-none hidden md:inline text-left py-4">{{cur_date}}</div>
    <div class="flex-1 object-none object-center text-center py-4">{{title}}</div>
    <router-link class="flex-none bg-transparent hover:bg-blue-900 no-underline" to="/account">
      <img class="object-none object-center w-12 h-12" alt="Account" src="../assets/ic_account_circle_48px.png" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TitleBar',
  props: {
    title: String
  },
  data () {
    return {
      cur_date: '2021-03-31' // todo
    }
  }
}
</script>
