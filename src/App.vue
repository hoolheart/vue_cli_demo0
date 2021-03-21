<template>
  <div class=" max-w-4xl mx-auto" id="app">
    <p class="invisible">blank</p>
    <div class="flex flex-row space-x-4" id="nav">
      <router-link class="flex-initial bg-yellow-400 hover:bg-yellow-900 text-white font-bold py-2 px-4 rounded-md no-underline" to="/">主页</router-link>
      <router-link class="flex-initial bg-yellow-400 hover:bg-yellow-900 text-white font-bold py-2 px-4 rounded-md no-underline" to="/about">说明</router-link>
    </div>
    <router-view/>
  </div>
</template>
