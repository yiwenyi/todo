<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <Todo></Todo>
    <Footer></Footer>
  </div>
</template>


<script>
import Header from './todolist/header.vue'
import Footer from './todolist/footer.jsx'
import Todo from './todolist/todo.vue'


export default {
  components:{
    Header,
    Footer,
    Todo
  }
}
</script>

<style lang='stylus' scoped>
#app{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
#cover{
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  opacity: .2;
  z-index: -1;
}
</style>
