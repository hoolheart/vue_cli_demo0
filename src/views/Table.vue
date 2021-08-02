<template>
  <div class="home space-y-10">
    <p class="text-center text-2xl my-10">表格示例</p>
    <StudentInfo />
  </div>
</template>

<script>
import StudentInfo from '@/components/StudentInfo.vue'
export default {
  name: 'Table',
  components: {
    StudentInfo
  }
}
</script>
