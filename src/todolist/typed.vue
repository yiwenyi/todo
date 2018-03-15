<template>
  <div class="type-wrap">
    <div id="typed-strings">
      <span>Typed.js is a <strong>JavaScript</strong> library.</span>
      <p>It <em>types</em> out sentences.</p>
      <p>And then deletes them.</p>
      <p>Try it out!</p>
      <span>欢迎来到<strong>易易妹</strong>的空间</span>
    </div>
    <span id="typed" style="white-space:pre;"></span>
  </div>
</template>

<script>
import Vue from "vue";
import Typed from "typed.js";

export default {
  data(){
    return{
      
    }
  },
  pops:{
    
  },
  mounted(){
    var typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 50,
      backSpeed: 0,
      backDelay: 1000,
      startDelay: 1000,
      loop: false,
      fadeOut: true,
      fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 500,
      onComplete: (self) => {
        this.$emit('isTypeComplete')
      },
    });
  }
}
</script>

<style lang="stylus" scoped>
.type-wrap
  position relative
  top 50%
  margin auto 0
  text-align center
</style>
