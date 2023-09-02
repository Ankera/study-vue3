<!-- 作者: 余亚勇 -->
<!-- 创建时间: 2023-09-02 11:41:28 -->
<!-- 模块主要作用:  -->

<template>
  <div>
    <h1>全局事件总$BUS</h1>
    <div class="container">
        <Child1 />
        <Child2 />
    </div>
  </div>
</template>

<script setup lang='ts'>
import Child1 from './child1.vue'
import Child2 from './child2.vue'

</script>

<style scoped>
.container {
    display: flex;
}
</style>