<!-- 作者: 余亚勇 -->
<!-- 创建时间: 2023-09-02 14:23:31 -->
<!-- 模块主要作用:  -->

<template>
  <div class="son">
    <h1>我是儿子组件</h1>
    <button>儿子的钱: {{money}}</button>
  </div>
</template>

<script setup lang='ts'>
  import { ref } from 'vue'
  const money = ref(666)



  defineExpose({
    money,
    fly: () => {
        console.log('son fly')
    }
  })

</script>

<style scoped>
.son {
    width: 200px;
    height: 100px;
    background-color: hotpink
}
</style>