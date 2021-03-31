<template>
  <div class="max-w-6xl mx-auto" id="app">
    <TitleBar title="Vue学习" />
    <div class="flex flex-row m-0 space-x-0 md:space-x-2">
      <Navigator class="hidden md:block w-52 flex-none" />
      <router-view/>
    </div>
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar.vue'
import Navigator from '@/components/Navigator.vue'
export default {
  components: {
    TitleBar,
    Navigator
  }
}
</script>
