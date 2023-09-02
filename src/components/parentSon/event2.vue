<!-- 作者: 余亚勇 -->
<!-- 创建时间: 2023-09-02 11:32:32 -->
<!-- 模块主要作用:  -->

<template>
  <div>
    <h1>这是event组件2</h1>
    <button @click="updateEvent">+++</button>
  </div>
</template>

<script setup lang='ts'>

const $emit = defineEmits(['xxx'])

const updateEvent = () => {
    $emit('xxx', 1, 2, 3)
}
</script>

<style scoped>

</style>