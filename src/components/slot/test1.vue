<!-- 作者: 余亚勇 -->
<!-- 创建时间: 2023-09-02 15:29:52 -->
<!-- 模块主要作用:  -->

<template>
  <div>
    <p>Test1</p>
    {{ todos }}
    <ul>
        <li v-for="(item, index) in todos" :key="item.id">
            <slot :$row="item" :$index="index"></slot>
        </li>
    </ul>
  </div>
</template>

<script setup lang='ts'>
defineProps(['todos'])
</script>

<style scoped>

</style>