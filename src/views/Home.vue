<template>
  <section class="section">
    <div class="container">
      <!-- <PlayersTable></PlayersTable> -->
      <HelloWorld></HelloWorld>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import PlayersTable from '@/components/PlayersTable.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    PlayersTable
  }
}
</script>
