<template>
  <fancy-grid-vue :config='gridConfig' :data='students'></fancy-grid-vue>
</template>

<script>
import FancyGridVue from 'fancy-grid-vue'
export default {
  name: 'StudentInfo',
  data: function () {
    return {
      students: [
        { id: 'KJP2201298333', name: '张三', age: 17, gender: '男', nationality: '中国', info: '' },
        { id: 'KJP222348333', name: '色粉', age: 16, gender: '女', nationality: '中国', info: '' },
        { id: 'KJP220129jdskle', name: '始于', age: 19, gender: '男', nationality: '中国', info: '' },
        { id: 'KJP220DEU333', name: '鸿禧', age: 16, gender: '女', nationality: '中国', info: '' },
        { id: 'KJP220129Z8DVW3', name: 'David', age: 17, gender: '男', nationality: 'U.K.', info: '' },
        { id: 'KDDS201298333', name: 'Lucy', age: 17, gender: '女', nationality: 'Australia', info: '' },
        { id: 'VDS201298333', name: 'Monica', age: 18, gender: '女', nationality: 'France', info: '' },
        { id: 'KJDVSE98333', name: 'Arthur', age: 18, gender: '男', nationality: 'France', info: '' },
        { id: 'KJR34DS3298333', name: 'Kuca', age: 17, gender: '男', nationality: 'Espagnol', info: '' }
      ],
      gridConfig: {
        title: '学生信息',
        theme: 'blue',
        width: 600,
        height: 'fit',
        resizable: false,
        defaults: {
          type: 'string',
          width: 100,
          sortable: true,
          editable: false,
          resizable: true
        },
        selModel: 'rows',
        trackOver: true,
        columns: [
          { type: 'select', width: 30 },
          { index: 'id', title: '学号' },
          { index: 'name', title: '姓名' },
          { index: 'age', title: '年龄', type: 'number', width: 80 },
          { index: 'gender', title: '性别', width: 50 },
          { index: 'nationality', title: '国籍' },
          { index: 'info', title: '备注', editable: true }
        ]
      }
    }
  },
  components: {
    FancyGridVue
  }
}
</script>
