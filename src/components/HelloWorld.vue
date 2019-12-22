
<template>
  <section class="section">
    <div class="container players-pick">
      <div class="columns is-mobile">
        <div class="column" @click="isModalActive = true">
          <div class="trophy">
            <img src="https://www.hltv.org/img/static/event/trophies/2018/1.png" class="image is-32x32" />
          </div>
          <Player></Player>
        </div>
        <div class="column">
          <Player></Player>         
        </div>
        <div class="column">
          <Player></Player>
        </div>
      </div>
      <div class="columns is-mobile">
        <div class="column">
          <Player></Player>         
        </div>
        <div class="column">
          <Player></Player>         
        </div>
        <div class="column">
          <Player></Player>        
        </div>
        <div class="column">
          <Player></Player>         
        </div>                  
      </div>
      <div class="columns is-mobile">
        <div class="column">
          <Player></Player>        
        </div>
        <div class="column">
          <Player></Player>          
        </div>
        <div class="column">
          <Player></Player>          
        </div>
        <div class="column">
          <Player></Player> 
        </div>                  
      </div>
      <div class="columns is-mobile">
        <div class="column">
          <Player></Player>         
        </div>
        <div class="column">
          <Player></Player>          
        </div>
        <div class="column">
          <Player></Player>        
        </div>
        <div class="column">
          <Player></Player> 
        </div>                  
      </div>  
      <div class="columns is-mobile">
        <div class="column">
          <Player></Player>           
        </div>
        <div class="column">
          <Player></Player>           
        </div>
        <div class="column">
          <Player></Player>         
        </div>
        <div class="column">
          <Player></Player> 
        </div> 
        <div class="column">
          <Player></Player>           
        </div>                  
      </div>      
    </div>
    <b-modal :active.sync="isModalActive">
        <PlayersTable></PlayersTable>
    </b-modal>    
  </section>
</template>

<script>
import Player from '@/components/Player.vue'
import PlayersTable from '@/components/PlayersTable.vue'

export default {
  name: 'HelloWorld',
  data: function () {
    return {
      isModalActive:false,
      
    }
  },
  props: {
    msg: String
  },
  components: {
    Player,
    PlayersTable
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.trophy {
  display: block;
}
.players-pick {
  max-width:600px;
}
.players-pick .column {
  display: flex;
  justify-content: center;  
}
.players-pick figure {
  margin:auto;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
