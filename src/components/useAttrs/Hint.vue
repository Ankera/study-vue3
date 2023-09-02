<!-- 作者: 余亚勇 -->
<!-- 创建时间: 2023-09-02 14:11:08 -->
<!-- 模块主要作用:  -->

<template>
  <div>
    <p>hello</p>
    {{ attrs.type }}
  </div>
</template>

<script setup lang='ts'>
import { useAttrs } from 'vue';
// const props = defineProps(['type', 'size'])

const attrs = useAttrs();

console.log('attrs', attrs)
</script>

<style scoped>

</style>