<template>
    <div class="space-y-2">
        <TodoItem v-for="(todo,index) in $store.state.todos" :key="index" :todo="todo"/>
        <!-- <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/> -->
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default{
    components:{TodoItem}
}

</script>