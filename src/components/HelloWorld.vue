
<template>
  <section class="section">
    <div v-if="username">
      <h4 class="subtitle">predictions</h4>
      <h4 class="title by-user">by {{username}}</h4>
    </div>
    <div class="container players-pick">
      <div class="columns is-mobile top-three">
        <div class="column">
          <div class="player-wrapper" @click="openTable('second')">
            <Player v-bind:player="top.second" size="is-96x96"></Player>
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/2.png" class="image is-32x32" />
            </div>                 
          </div>     
        </div>
        <div class="column">
          <div class="player-wrapper" @click="openTable('first')">
            <Player v-bind:player="top.first" size="is-128x128"></Player> 
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/1.png" class="image is-32x32" />
            </div>                                   
          </div>
        </div>
        <div class="column">
          <div class="player-wrapper" @click="openTable('third')">
            <Player v-bind:player="top.third" size="is-96x96"></Player> 
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/3.png" class="image is-32x32" />
            </div>                                   
          </div>          
        </div>
      </div>
      <div class="divisor"><hr></hr></div>
      <div class="columns is-mobile">
        <div class="column">
          <div class="player-wrapper" @click="openTable('fourth')">
            <Player v-bind:player="top.fourth" size="is-64x64"></Player> 
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/4.png" class="image is-32x32" />
            </div>                                   
          </div>         
        </div>
        <div class="column">
          <div class="player-wrapper" @click="openTable('fifth')">
            <Player v-bind:player="top.fifth" size="is-64x64"></Player> 
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/5.png" class="image is-32x32" />
            </div>                                   
          </div>          
        </div>
        <div class="column">
          <div class="player-wrapper" @click="openTable('sixth')">
            <Player v-bind:player="top.sixth" size="is-64x64"></Player> 
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/6.png" class="image is-32x32" />
            </div>                                   
          </div>         
        </div>
        <div class="column">
          <div class="player-wrapper" @click="openTable('seventh')">
            <Player v-bind:player="top.seventh" size="is-64x64"></Player> 
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/7.png" class="image is-32x32" />
            </div>                                   
          </div>          
        </div>                  
      </div>
      <div class="columns is-mobile">
        <div class="column">
          <div class="player-wrapper" @click="openTable('eighth')">
            <Player v-bind:player="top.eighth" size="is-64x64"></Player> 
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/8.png" class="image is-32x32" />
            </div>                                   
          </div>         
        </div>
        <div class="column">
          <div class="player-wrapper" @click="openTable('ninth')">
            <Player v-bind:player="top.ninth" size="is-64x64"></Player> 
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/9.png" class="image is-32x32" />
            </div>                                   
          </div>          
        </div>
        <div class="column">
          <div class="player-wrapper" @click="openTable('tenth')">
            <Player v-bind:player="top.tenth" size="is-64x64"></Player> 
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/10.png" class="image is-32x32" />
            </div>                                   
          </div>         
        </div>
        <div class="column">
          <div class="player-wrapper" @click="openTable('eleventh')">
            <Player v-bind:player="top.eleventh" size="is-64x64"></Player> 
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/11.png" class="image is-32x32" />
            </div>                                   
          </div>   
        </div>                  
      </div>
      <div class="columns is-mobile">
        <div class="column">
          <div class="player-wrapper" @click="openTable('twelfth')">
            <Player v-bind:player="top.twelfth" size="is-64x64"></Player> 
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/12.png" class="image is-32x32" />
            </div>                                   
          </div>          
        </div>
        <div class="column">
          <div class="player-wrapper" @click="openTable('thirteenth')">
            <Player v-bind:player="top.thirteenth" size="is-64x64"></Player> 
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/13.png" class="image is-32x32" />
            </div>                                   
          </div>          
        </div>
        <div class="column">
          <div class="player-wrapper" @click="openTable('fourteenth')">
            <Player v-bind:player="top.fourteenth" size="is-64x64"></Player> 
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/14.png" class="image is-32x32" />
            </div>                                   
          </div>       
        </div>
        <div class="column">
          <div class="player-wrapper" @click="openTable('fifteenth')">
            <Player v-bind:player="top.fifteenth" size="is-64x64"></Player> 
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/15.png" class="image is-32x32" />
            </div>                                   
          </div>   
        </div>                  
      </div>  
      <div class="columns is-mobile">
        <div class="column">
          <div class="player-wrapper" @click="openTable('sixteenth')">
            <Player v-bind:player="top.sixteenth" size="is-64x64"></Player> 
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/16.png" class="image is-32x32" />
            </div>                                   
          </div>             
        </div>
        <div class="column">
          <div class="player-wrapper" @click="openTable('seventeenth')">
            <Player v-bind:player="top.seventeenth" size="is-64x64"></Player> 
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/17.png" class="image is-32x32" />
            </div>                                   
          </div>            
        </div>
        <div class="column">
          <div class="player-wrapper" @click="openTable('eighteenth')">
            <Player v-bind:player="top.eighteenth" size="is-64x64"></Player> 
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/18.png" class="image is-32x32" />
            </div>                                   
          </div>         
        </div>
        <div class="column">
          <div class="player-wrapper" @click="openTable('nineteenth')">
            <Player v-bind:player="top.nineteenth" size="is-64x64"></Player> 
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/19.png" class="image is-32x32" />
            </div>                                   
          </div>   
        </div> 
        <div class="column">
          <div class="player-wrapper" @click="openTable('twentieth')">
            <Player v-bind:player="top.twentieth" size="is-64x64"></Player> 
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/20.png" class="image is-32x32" />
            </div>                                   
          </div>          
        </div>                  
      </div> 
      <div v-if="!item" class="username">
        <b-input v-model="username" placeholder="Username" maxlength="50"></b-input>
      </div>
      <div v-if="!item" class="btnActions">
        <b-button type="is-dark" icon-left="content-save" @click="saveTops">Save Predictions</b-button>     
        <b-button type="is-danger" icon-left="delete" @click="clearTops">Start Over</b-button>
      </div>
      <b-loading :is-full-page="true" :active.sync="isLoading" :can-cancel="true"></b-loading>
    </div>
  </section>
</template>

<script>
import { db } from '@/db'
import { Timestamp } from '@/db'
import Player from '@/components/Player.vue'
import PlayersTable from '@/components/PlayersTable.vue'

export default {
  name: 'HelloWorld',
  props:['item','year'],
  data: function () {
    return {
      isModalActive:false,
      top:{},
      position:'',
      topsLoaded:[],
      isLoading:false,
      username:''
    }
  },
  components: {
    Player,
    PlayersTable
  },
  methods: {
    openTable(position){
      if(!this.item){
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
      } else {
        event.preventDefault()
      }
    },
    selectPlayer(player){
      this.top[this.position]=player
      this.$forceUpdate()
    },
    saveTops(){
      if(Object.keys(this.top).length < 20) {
        this.$buefy.toast.open({
          message:'Top 20 incomplete',
          type:'is-danger'
        })
      } else {
        try {
          db.collection('tops').add({
            tops:this.top,
            created_at:Timestamp.now(),
            year:2019,
            username:this.username
          }).then(ref=>{
            this.$buefy.toast.open({
              message:'Top 20 saved',
              type:'is-success'
            })            
            this.$router.replace('/2019/'+ref.id)
          })
        } catch (error) {
          console.log(error)
        }
      }
    },
    clearTops(){
      this.top={}
      this.username=''
    },
    fetchData(item){
      if(item!=undefined){
        let el = this
        this.isLoading = true
        db.collection('tops').doc(item).get().then(snapshot => {
          const data = snapshot.data()
          el.top = data.tops
          el.username = data.username
          this.isLoading = false
        })
      }
    }
  },
  mounted() {
    if(this.item){
      this.fetchData(this.item)
    }
  },
  firestore: {
    topsLoaded: db.collection('data')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.top-three .team_logo {
  width:25px !important;
}
.divisor {
  margin-bottom:30px;
}
.divisor hr {
    border: 0;
    height: 1px;
    width:20%;
    margin: 0 auto;
    background-color:#333333;
}
.top-three {
  margin-top:20px;
}
.by-user {
  font-size:1.3rem !important;
}
.username {
  padding:20px;
  max-width: 220px;
  margin:0 auto;
}
.btnActions {
  margin-top:20px;
}
.btnActions button {
  margin:0 auto;
  margin:10px;
}
.trophy {
  width:32px;
  height:32px;
  margin: 0 auto;
}
.player-wrapper {
  margin-top:auto;
}
.players-pick {
  max-width:500px !important;
  margin-top:40px !important;
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
