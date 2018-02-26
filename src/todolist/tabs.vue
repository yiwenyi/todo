<template>
  <div class="helper">
    <span class="left">{{unFinishedTodoLenth}} items left</span>
    <span class="tabs">
      <span 
        v-for="state in states"
        :key="state"
        :class="[state,filter === state? 'actived':'']"
        @click="toggleFile(state)"
      >
        {{state}}
      </span>
    </span>
    <span class="clear" @click="clearAllCompleted">clear completed</span>
  </div>
</template>

<script>
export default {
  props:{
    filter:{
      type:String,
      required:true,
    },
    todos:{
      type:Array,
      required:true
    }
  },
  data(){
    return{
      states:['all','active','completed']
    }
  },
  computed:{
    unFinishedTodoLenth(){
      return this.todos.filter(todo => !todo.completed).length
    }
  },
  methods:{
    toggleFile(state){
      this.$emit('toggle',state)
    },
    clearAllCompleted(){
      this.$emit('clearAllCompleted')
    },
    // unFinishedTodoLenth(){
    //   return this.todos.filter(todo => !todo.completed).length
    // }
  }
}
</script>

<style lang="stylus" scoped>
.helper
  font-weight 100
  display flex
  justify-content space-around
  padding 5px 0
  line-height 30px
  background-color #ffffff
  font-size 14px
.clear
  text-align right 
  cursor pointer
.left
  text-align left 

.left, .clear
  width 150px

.left,.clear,.tabs
  padding 0 10px
  box-sizing border-box
.tabs
  width 200px
  display flex
  justify-content space-around
  *
    display inline-block
    padding 0 10px
    cursor pointer
    border 1px solid rgba(175,47,47,0)
    &.actived
      border-color rgba(175,47,47,0.4)
      border-radius 5px
  
</style>

