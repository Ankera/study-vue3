<!-- 作者: 余亚勇 -->
<!-- 创建时间: 2023-09-02 15:22:16 -->
<!-- 模块主要作用:  -->

<template>
  <div class="slot">
    <h1>Slot</h1>
    <SlotTest>
        <p>222</p>
        <template v-slot:a>
            <div>
                这个是剧名插槽
            </div>
        </template>
        
        <template #b>
            <div>
                这个是剧名插槽1111
            </div>
        </template>
    </SlotTest>

    <p>-------</p>


    <h1>作用域插槽 必会*必会*必会</h1>
    <Test1 :todos="todos">
        <template v-slot="{$row, $index}">
            <div>
                {{$row.title}} --- {{$index + 1}}
             </div>
        </template>
    </Test1>
  </div>
</template>

<script setup lang='ts'>
import SlotTest from './slotTest.vue'
import Test1 from './test1.vue'
import { ref } from 'vue'

const todos = ref([{id: 1, title: '吃饭', done: true}, { id: 2, title: '睡觉', done: false }])
</script>

<style scoped>
.slot {
    width: 600px;
    height: 400px;
    background-color: skyblue;
}
</style>