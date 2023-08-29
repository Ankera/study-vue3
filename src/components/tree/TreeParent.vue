<!-- 作者: 余亚勇 -->
<!-- 创建时间: 2023-08-29 15:12:56 -->
<!-- 模块主要作用:  -->

<template>
  <div>
    <Tree :data="data" />
  </div>
</template>

<script setup lang="ts">
import Tree from "./Tree.vue";

interface TreeProps {
  name: string;
  checked: boolean;
  children?: TreeProps[];
}

const data: TreeProps[] = [
  {
    name: "1",
    checked: false,
    children: [
      {
        name: "1-1",
        checked: true,
      },
      {
        name: "1-2",
        checked: false,
      },
      {
        name: "1-3",
        checked: true,
      },
    ],
  },
  {
    name: "2",
    checked: false,
    children: [
      {
        name: "2-1",
        checked: true,
      },
      {
        name: "2-2",
        checked: false,
      },
      {
        name: "2-3",
        checked: true,
      },
    ],
  },
];
</script>

<style scoped></style>
