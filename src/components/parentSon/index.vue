<!-- 作者: 余亚勇 -->
<!-- 创建时间: 2023-09-02 11:16:05 -->
<!-- 模块主要作用:  -->

<template>
  <div>
    <Son :name="name" />
    <button @click="updateName">+</button>
    <hr />
    <Event @click="handle2" />
    <Event2 @xxx="handle3" />
  </div>
</template>

<script setup lang="ts">
import Son from "./son.vue";
import Event1 from './event1.vue'
import Event2 from './event2.vue'
import { ref } from "vue";

const name = ref("Tom");

const updateName = () => {
  name.value = "John";
};

const handle2 = () => {
    console.log(111)
}

const handle3 = (a, b) => {
    console.log('=====', a, b)
}

</script>

<style scoped></style>
