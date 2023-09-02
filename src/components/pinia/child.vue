<!-- 作者: 余亚勇 -->
<!-- 创建时间: 2023-09-02 14:53:38 -->
<!-- 模块主要作用:  -->

<template>
  <div class="child">
    Child
    <p> Child === {{infoStore.count}}</p>
    <button @click="updateCount">修改仓库数据</button>
    <h1>{{infoStore.countPX}}</h1>
  </div>
</template>

<script setup lang='ts'>
import useInfoStore from '../store/modules/info'

const infoStore = useInfoStore();

const updateCount = () => {
    infoStore.updateNum();
}

</script>

<style scoped>
.child {
    width: 200px;
    height: 200px;
    background-color: orange;
}
</style>