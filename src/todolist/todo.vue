<template>
  <section class="real-app">
    <tabs 
      :filter="filter"
      :todos="todos"
      @toggle="toggleFilter"
      @clearAllCompleted="clearAllCompleted"
    />
    <input 
      type="text"
      class="add-input"
      autofocus="autofucus"
      placeholder="婚礼进行时"
      @keyup.enter="addTodo" 
    >
    <Item 
      v-for="todo in filteredTodo"
      :key="todo.id"
      :todo="todo"
      @del = "deleteTodo"
    />
  </section>
</template>

<script>
import Item from './item.vue'
import Tabs from './tabs.vue'
let id = 0
export default {
  data(){
    return{
      todos:[],
      filter:'all'
    }
  },
  components:{
    Item,Tabs
  },
  computed:{
    filteredTodo(){
      if(this.filter == 'all'){
        return this.todos
      }
      const completed = this.filter === 'completed'
      return this.todos.filter(todo => todo.completed === completed)
    }
  },
  methods:{
    addTodo(e){
      var val =  e.target.value
      if (val) {
        this.todos.unshift({
          id:id++,
          content:val.trim(),
          completed:false
        })
        e.target.value = ''
      }
    },
    deleteTodo(id){
      this.todos.splice(this.todos.findIndex(item => item.id === id),1)
    },
    toggleFilter(state){
      this.filter = state
    },
    clearAllCompleted(){
      this.todos = this.todos.filter(todo => !todo.completed)
    }
  }
}
</script>

<style lang="stylus" scoped>
.real-app{
  width 600px
  margin 0 auto 
  box-shadow 0 0 5px #666
}
.add-input{
  position relative
  width 100%
  font-size 24px
  line-height 1.4em
  border none
  outline none 
  padding 6px
  box-sizing border-box
  // font-smoothing antialiased 
  padding 16px 16px 16px 60px
  box-shadow inset 0 -2px 1px rgba(0,0,0,0)
}
</style>
