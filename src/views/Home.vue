<template>
  <section class="section">
    <div class="container">
      <h2 class="title">Top 20 Simulator</h2>
      <h2 class="subtitle subpred">2019 Edition</h2>
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
    if(!this.item){
      this.$children[0].clearTops()
    }
    console.log('updated')
  }
}
</script>
<style>
.section {
  padding:1rem 1.5rem !important;
}
</style>