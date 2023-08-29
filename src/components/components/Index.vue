<!-- 作者: 余亚勇 -->
<!-- 创建时间: 2023-08-29 16:17:59 -->
<!-- 模块主要作用:  -->



<template>
  <div>
    <div class="comonents">
        <div :class="activeIndex===index ? 'active item' : 'item'" v-for="(item, index) in data" :key="item.name" @click="addItem(index)">
            {{item.name}}
        </div>
    </div>

    <component :is="comId"></component>
  </div>
</template>

<script setup lang='ts'>
import { ref, shallowRef, reactive, markRaw } from 'vue';
import TestA from './TestA.vue';
import TestB from './TestB.vue';
import TestC from './TestC.vue';

const comId = shallowRef(TestA);

const activeIndex = ref(0)

const data = reactive([
    {
        name: "TestA",
        com: markRaw(TestA)
    },
    {
        name: "TestB",
        com: markRaw(TestB)
    },
    {
        name: "TestC",
        com: markRaw(TestC)
    }
])


const addItem = (index: number) => {
    activeIndex.value = index;

    comId.value = data[index].com;
}

</script>

<style scoped>
.comonents {
    display: flex;
}
.item {
    cursor: pointer;
    margin-right: 32px;
}
.active {
    color: red;
}
</style>