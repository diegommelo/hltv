<template>
  <section class="section">
    <div class="container">
      <HelloWorld v-bind:year='year' v-bind:item='item'></HelloWorld>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  props:['item','year'],
  components: {
    HelloWorld,
  },
  updated() {
    this.$children[0].clearTops()
  }
}
</script>
<style>
.section {
  padding:1rem 1.5rem !important;
}
</style>