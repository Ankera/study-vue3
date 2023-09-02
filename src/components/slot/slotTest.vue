<!-- 作者: 余亚勇 -->
<!-- 创建时间: 2023-09-02 15:24:06 -->
<!-- 模块主要作用:  -->

<template>
  <div>
    <h1>插件前</h1>
    <slot></slot>
    <h1>插件后</h1>

    <slot name="a"></slot>

    <hr>
    <slot name="b"></slot>
  </div>
</template>

<script setup lang='ts'>

</script>

<style scoped>

</style>