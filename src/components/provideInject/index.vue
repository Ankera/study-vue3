<!-- 作者: 余亚勇 -->
<!-- 创建时间: 2023-09-02 14:39:40 -->
<!-- 模块主要作用:  -->

<template>
  <div>
    <h1>父组件 provideInject</h1>
    <p>爷爷自己的 {{ car }}</p>
    <Son />
   
  </div>
</template>

<script setup lang='ts'>
import Son from './son.vue'
import { ref, provide } from 'vue';
const car = ref('法拉利')

provide('TOKEN', car)

</script>

<style scoped>

</style>