<!-- 作者: 余亚勇 -->
<!-- 创建时间: 2023-09-02 11:42:57 -->
<!-- 模块主要作用:  -->

<template>
  <div class="event">
    <div>我是子组件111</div>
    <p>{{ car }}</p>
  </div>
</template>

<script setup lang='ts'>
import  $bus from '../../bus/index';
import { onMounted, ref } from 'vue'

const car = ref('')

onMounted(() => {
    $bus.on('Car', (data) => {
        console.log('data1===', data)

        car.value = data;
    })
})
</script>


<style scoped>
    .event {
        width: 200px;
        height: 200px;
        border: 1px solid red;
    }
</style>