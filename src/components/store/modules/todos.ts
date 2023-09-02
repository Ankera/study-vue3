import { defineStore } from "pinia";
import { ref, computed } from 'vue'; 

const useTodoStore = defineStore('todo', () => {
    const todos = ref([{id: 1, title: '吃饭'}, { id: 2, title: '睡觉' }])

    const arr = ref([1,2,3,4])

    const total = computed(() => {
        return arr.value.reduce((p, n) => p + n, 0)
    })

    const updateTodo = () => {
        todos.value  = [{id: 1111, title: '吃饭'}, { id: 22222, title: '睡觉' }]
    }

    return {
        todos,
        updateTodo,
        total
    }
})

export default useTodoStore;