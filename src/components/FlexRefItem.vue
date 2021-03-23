<template>
  <li class="flex-initial"><a :href="link" target="_blank" rel="noopener">{{ text }}</a></li>
</template>

<script>
export default {
  name: 'FlexRefItem',
  props: {
    link: String,
    text: String
  }
}
</script>
