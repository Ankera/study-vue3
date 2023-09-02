<!-- 作者: 余亚勇 -->
<!-- 创建时间: 2023-09-02 14:41:38 -->
<!-- 模块主要作用:  -->

<template>
  <div>
    <h3>孙子组件</h3>
    <p>孙子从爷爷那里获取到的 = {{gar}}</p>
    <button @click="updateCar">修改</button>
  </div>
</template>

<script setup lang='ts'>
import { inject, InjectionKey, Ref } from 'vue'

const gar = inject<any>('TOKEN')

const updateCar = () => {
    gar.value = '自行车'
}

</script>

<style scoped>

</style>