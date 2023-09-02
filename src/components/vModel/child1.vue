<!-- 作者: 余亚勇 -->
<!-- 创建时间: 2023-09-02 12:08:48 -->
<!-- 模块主要作用:  -->

<template>
  <div class="child">
    <h1>同时绑定多个v-modle</h1>
    <button @click="handler">pageNo = {{pageNo}}</button>
    <button @click='handler2'>pageSize = {{ pageSize }}</button>
  </div>
</template>

<script setup lang='ts'>

const props = defineProps(['pageNo', 'pageSize'])

const $emit = defineEmits(['update:pageNo', 'update:pageSize'])

const handler = () => {
    $emit('update:pageNo', props.pageNo + 2)
}

const handler2 = () => {
    $emit('update:pageSize', props.pageSize + 3)
}
</script>

<style scoped>
.child {
    width: 300px;
    height: 300px;
    background-color: hotpink;
}
</style>