<!-- 作者: 余亚勇 -->
<!-- 创建时间: 2023-09-02 14:21:30 -->
<!-- 模块主要作用:  -->

<template>
    <div class="box">
      <h1>我是父组件</h1>
      <p>父亲的钱: {{money}}</p>
      <button @click="handler">找我儿子借10元</button>

      <Son ref="son"/>
      <Dan />
    </div>
  </template>
  
  <script setup lang='ts'>
  import { ref } from 'vue'
  import Son from './son.vue'
  import Dan from './dan.vue'

  const son = ref();
  
  const money = ref(10000)

  const handler = () => {
    money.value += 10;

    console.log(son)
    son.value.money -= 10;

    son.value.fly();
  }

  defineExpose({
    money
  })
  </script>
  
  <style scoped>
  .box {
      width: 300px;
      height: 500px;
      background-color: aqua;
  }
  </style>