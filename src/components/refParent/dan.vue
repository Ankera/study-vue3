<!-- 作者: 余亚勇 -->
<!-- 创建时间: 2023-09-02 14:32:42 -->
<!-- 模块主要作用:  -->

<template>
  <div class="dan">
    <h1>女儿组件222</h1>
    <p>女儿的钱: {{money}}</p>
    <button @click="handler($parent)">点击，我爸爸给我100</button>
  </div>
</template>

<script setup lang='ts'>
  import { ref } from 'vue'
  const money = ref(888)

    const handler = ($parent) => {
        money.value += 100;
        console.log('$parent', $parent)

        $parent.money -= 100;
    }
</script>

<style scoped>
.dan {
    width: 200px;
    height: 100px;
    background-color: orange;
}
</style>