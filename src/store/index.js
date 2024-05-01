import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    todos:[]
  },
  getters: {
  },
  mutations: {
    storeTodos(state,payload){
      state.todos = payload
      // state.todos.push(payload)
    },
    storeTodo(state,payload){
      // state.todos.push(payload)
      state.todos.push(payload)
      // state.todos.push(payload)
    }
  },
  actions: {

    getTodos({commit}){
      return new Promise((resolve)=>{
        setTimeout(() => {
          return axios.get('http://localhost:3000/todos')
          .then((response) => {
            // console.log(response)
            commit('storeTodos', response.data)
            resolve()
            // console.log(this.todos)
          })
        }, 1000);
      })
    },

    addTodo({commit},data){
      return axios.post('http://localhost:3000/todos',data).then((response)=>{
        commit('storeTodo',response.data)
      })
    },
    updateTodo({commit},{id,data}){
      
      //realizar utilizando desestruturação
      return axios.put(`http://localhost:3000/todos/${id}`,data).then((response)=>{
        commit('storeTodo',response.data)
      })
      
      // da para fazer assim por propriedade alterando para data
      // return axios.put(`http://localhost:3000/todos/${data.id}`,{
      //   title:data.title,
      //   completed:data.completed
      // })
    }
  },
  modules: {
  }
})
