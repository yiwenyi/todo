<template>
  <div id="app">
    <div id="cover"></div>
    <div id="welcome" v-show="typedIsCompleted">
      <typed @isTypeComplete="welcomeFade"></typed>
    </div>
    <Header></Header>
    <Todo></Todo>
    <Footer></Footer>
  </div>
</template>


<script>
import Header from './todolist/header.vue'
import Footer from './todolist/footer.jsx'
import Todo from './todolist/todo.vue'
import Typed from './todolist/typed.vue'



export default {
  data(){
    return{
      typedIsCompleted:true
    }
  },
  components:{
    Header,
    Footer,
    Todo,
    Typed
  },
  methods:{
    welcomeFade(){
      this.typedIsCompleted = false
    }
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
#welcome{
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  // opacity: .2;
  z-index: 100;
  font-size 50px
}
</style>
