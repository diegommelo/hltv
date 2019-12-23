
<template>
  <section class="section">
    <div class="container players-pick">
      <div class="columns is-mobile">
        <div class="column">
          <div class="player-wrapper" @click="openTable('first')">
            <Player v-bind:player="top.first"></Player>
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/1.png" class="image is-32x32" />
            </div>                 
          </div>     
        </div>
        <div class="column">
          <div class="player-wrapper" @click="openTable('second')">
            <Player v-bind:player="top.second"></Player> 
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/2.png" class="image is-32x32" />
            </div>                                   
          </div>
        </div>
        <div class="column">
          <div class="player-wrapper" @click="openTable('third')">
            <Player v-bind:player="top.third"></Player> 
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/3.png" class="image is-32x32" />
            </div>                                   
          </div>          
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
      top:{},
      position:''
    }
  },
  props: {
    msg: String
  },
  components: {
    Player,
    PlayersTable
  },
  methods: {
    openTable(position){
      let el = this
      this.position = position
      this.$buefy.modal.open({
        parent:this,
        component:PlayersTable,
        hasModalCard:false,
        events:{
          'teste':function($event){
            el.selectPlayer($event)
          }
        }
      })
    },
    selectPlayer(player){
      this.top[this.position]=player
      this.$forceUpdate()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.trophy {
  width:32px;
  height:32px;
  margin: 0 auto;
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
