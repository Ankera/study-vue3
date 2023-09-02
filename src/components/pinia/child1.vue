<!-- 作者: 余亚勇 -->
<!-- 创建时间: 2023-09-02 14:54:26 -->
<!-- 模块主要作用:  -->

<template>
    <div class="child1">
      Child1
      <p>Child1 === {{infoStore.count}}</p>
      <hr />
      <p @click="updateTodo">{{todos.todos}}</p>

      <h1>{{todos.total}}</h1>
    </div>
  </template>
  
  <script setup lang='ts'>
  import useInfoStore from '../store/modules/info'
  import useTodoStore from '../store/modules/todos';

    const infoStore = useInfoStore();

    const todos = useTodoStore();

    const updateTodo = () => {
        todos.updateTodo();
    }
  </script>
  
  <style scoped>
  .child1 {
      width: 200px;
      height: 200px;
      background-color: blueviolet;
  }
  </style>