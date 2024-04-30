<template>
  <!-- Content -->
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-1/2 lg:w-1/2 mx-auto">
      <!-- <pre>
        {{ $store.state.todos }}
      </pre> -->
      <!--/ Todo spinner -->
      <TodoSpinner v-if="loading" />
      <!--/ Todo spinner -->
      <template v-else>
        <!--/ Todo form -->
        <TodoFormAdd />
        <!--/ Todo form -->

        <!--/ Todo items -->
        <TodoItems />
        <!--/ Todo items -->

        <!--/ Todo empty -->
        <TodoEmpaty />
        <!--/ Todo empty -->

      </template>
    </div>
  </div>
  <!--/ Content -->
</template>

<script>
import TodoSpinner from '@/components/TodoSpinner.vue'
import TodoFormAdd from './components/TodoFormAdd.vue';
import TodoItems from './components/TodoItems.vue';
import TodoEmpaty from './components/TodoEmpaty.vue';


export default {
  name: 'App',
  components: {
    TodoSpinner,
    TodoFormAdd,
    TodoItems,
    TodoEmpaty
  },
  data() {
    return {
      loading: false
    }
  },
  // async created(){
  //   const {data} = await axios.get('http://localhost:3000/todos')
  //   this.todos = data
  //   console.log(this.todos)
  // }
  created() {
    this.loading = true
    this.$store.dispatch('getTodos').finally(() => {
      this.loading = false
    })

  }
}
</script>
