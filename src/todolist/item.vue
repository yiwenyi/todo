<template>
  <div :class="['todo-item',todo.completed?'completed':'']">
    <input 
      type="checkbox"
      class="toggle"
      v-model="todo.completed"
    >
    <label>{{todo.content}}</label>
    <button class="destory" @click="deletoTodo"></button>
  </div>
</template>

<script>
export default {
  props:{
    todo:{
      type:Object,
      required:true,
    }
  },
  methods:{
    deletoTodo(){
      this.$emit('del',this.todo.id)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .todo-item{
    position relative
    background-color #ffffff
    font-size 24px
    border-bottom 1px solid rgba(0,0,0,0,0.06)
    &:hover{
      background-color #FEDFE1
      .destory:after{
        content:'x'
      }
      
    }
    label{
      white-space pre-line
      word-break break-all
      padding 15px 60px 15px 15px
      margin-left 45px
      display block 
      line-height 1.2em
      transition color .4s
    }
    &.completed{
      label{
        color #d9d9d9
        text-decoration line-through
      }
    }
  }
  .toggle{
    text-align center 
    width 40px
    height 40px
    position absolute
    top 0
    bottom 0
    margin auto 0
    border none 
    appearance none
    outline none 
    padding 0 10px
    &:after{
      // content url('../assets/images/circle.svg')
      content ''
      border 2px solid #D0104C
      width 20px
      height 20px
      display block
      margin 8px 0
    }
    &:checked:after{
      // content url('../assets/images/circle2.svg')
      content 'X'
      display block 
      color #D0104C
      font-size 20px
      // margin-bottom 5px
      line-height 20px
    }
  }
  .destory{
      position absolute
      top 0
      right 0
      bottom 0;
      width 40px
      height 100%
      margin auto 0;
      font-size inherit
      color #cc9a9a;
      transition: color 0.2s east-out
      background-color transparent
      appearance none
      border none
      cursor pointer
      outline none
    }
</style>
