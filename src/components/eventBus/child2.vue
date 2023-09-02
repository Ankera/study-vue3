<!-- 作者: 余亚勇 -->
<!-- 创建时间: 2023-09-02 11:42:57 -->
<!-- 模块主要作用:  -->

<template>
  <div class="event">
    <div>我是子组件2222</div>
    <button @click="handleCar">给子组件111送一台法拉利</button>
  </div>
</template>

<script setup lang='ts'>
import  $bus from '../../bus/index';

const handleCar = () => {
  $bus.emit('Car', '法拉利')
}
</script>


<style scoped>
    .event {
        width: 200px;
        height: 200px;
        border: 1px solid red;
    }
</style>