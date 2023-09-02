<script setup lang="ts">

</script>

<template>
  <div class="app-contaienr">
    <span class="item"><router-link to="/parentSon">父子传值</router-link></span>
    <span class="item"><router-link to="/tree">树形结构</router-link></span>
    <span class="item"><router-link to="/components">多组件+性能</router-link></span>
    <span class="item"><router-link to="/eventBus">$BUS</router-link></span>

    <router-view></router-view>
  </div>
</template>

<style scoped>

.item {
  margin-right: 16px;
  text-decoration: underline;
}
</style>
