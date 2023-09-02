<!-- 作者: 余亚勇 -->
<!-- 创建时间: 2023-09-02 12:08:31 -->
<!-- 模块主要作用:  -->

<template>
  <div>
    <p>{{pageNo}} ---- {{pageSize}}</p>
    <Child1 v-model:pageNo="pageNo" v-model:pageSize="pageSize" />
  </div>
</template>

<script setup lang='ts'>
import Child1 from './child1.vue'
import { ref } from 'vue'
const pageNo = ref(1)
const pageSize = ref(20)
</script>

<style scoped>

</style>