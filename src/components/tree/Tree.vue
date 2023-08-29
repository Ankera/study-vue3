<!-- 作者: 余亚勇 -->
<!-- 创建时间: 2023-08-29 15:07:37 -->
<!-- 模块主要作用:  -->

<template>
  <div class="items" v-for="item in data" :key="item.name">
    <input v-model="item.checked" type="checkbox"> <span>{{item.name}}</span>
    <Tree v-if="item.children" :data="item.children" />
  </div>
</template>

<script setup lang="ts">

interface TreeProps {
  name: string;
  checked: boolean;
  children?: TreeProps[];
}

withDefaults(defineProps<{data?: TreeProps[]}>(), {
  data: () => [],
});

</script>

<style scoped>
.items {
  margin-left: 32px;
}
</style>
