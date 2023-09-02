<!-- 作者: 余亚勇 -->
<!-- 创建时间: 2023-09-02 14:51:18 -->
<!-- 模块主要作用:  -->

<template>
  <div class="pinia">
    <h1>Pinia</h1>
    <div class="flex">
        <Child />
        <Child1 />
    </div>
  </div>
</template>

<script setup lang='ts'>
import Child from './child.vue'
import Child1 from './child1.vue'
</script>

<style scoped>
.pinia {
    width: 600px;
    height: 400px;
    background-color: skyblue;
}

.flex {
    display: flex;
}
</style>