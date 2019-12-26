<template>
  <section class="">
    <div v-if="username">
      <h4 class="subtitle">predictions</h4>
      <h4 class="title by-user">by {{username}}</h4>
    </div>
    <div class="container players-pick">
      <div class="top-three">
        <div class="columns is-mobile">
          <div class="column">
            <div class="player-wrapper" @click="openTable('second')">
              <Player v-bind:player="top.second" size="avatar-medium"></Player>
              <div class="trophy">
                <img src="https://www.hltv.org/img/static/event/trophies/2018/2.png" class="image is-32x32" />
              </div>                 
            </div>     
          </div>
          <div class="column top-one">
            <div class="player-wrapper" @click="openTable('first')">
              <Player v-bind:player="top.first" size="avatar-big"></Player> 
              <div class="trophy">
                <img src="https://www.hltv.org/img/static/event/trophies/2018/1.png" class="image is-32x32" />
              </div>                                   
            </div>
          </div>
          <div class="column">
            <div class="player-wrapper" @click="openTable('third')">
              <Player v-bind:player="top.third" size="avatar-medium"></Player> 
              <div class="trophy">
                <img src="https://www.hltv.org/img/static/event/trophies/2018/3.png" class="image is-32x32" />
              </div>                                   
            </div>          
          </div>
        </div>
      </div>
      <div class="divisor"><hr></hr></div>
      <div class="teste">
        <div class="col">
          <div class="player-wrapper" @click="openTable('fourth')">
            <Player v-bind:player="top.fourth" size="avatar-small"></Player> 
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/4.png" class="image is-32x32" />
            </div>                                   
          </div>         
        </div>
        <div class="col">
          <div class="player-wrapper" @click="openTable('fifth')">
            <Player v-bind:player="top.fifth" size="avatar-small"></Player> 
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/5.png" class="image is-32x32" />
            </div>                                   
          </div>          
        </div>
        <div class="col">
          <div class="player-wrapper" @click="openTable('sixth')">
            <Player v-bind:player="top.sixth" size="avatar-small"></Player> 
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/6.png" class="image is-32x32" />
            </div>                                   
          </div>         
        </div>
        <div class="col">
          <div class="player-wrapper" @click="openTable('seventh')">
            <Player v-bind:player="top.seventh" size="avatar-small"></Player> 
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/7.png" class="image is-32x32" />
            </div>                                   
          </div>          
        </div>                  

        <div class="col">
          <div class="player-wrapper" @click="openTable('eighth')">
            <Player v-bind:player="top.eighth" size="avatar-small"></Player> 
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/8.png" class="image is-32x32" />
            </div>                                   
          </div>         
        </div>
        <div class="col">
          <div class="player-wrapper" @click="openTable('ninth')">
            <Player v-bind:player="top.ninth" size="avatar-small"></Player> 
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/9.png" class="image is-32x32" />
            </div>                                   
          </div>          
        </div>
        <div class="col">
          <div class="player-wrapper" @click="openTable('tenth')">
            <Player v-bind:player="top.tenth" size="avatar-small"></Player> 
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/10.png" class="image is-32x32" />
            </div>                                   
          </div>         
        </div>
        <div class="col">
          <div class="player-wrapper" @click="openTable('eleventh')">
            <Player v-bind:player="top.eleventh" size="avatar-small"></Player> 
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/11.png" class="image is-32x32" />
            </div>                                   
          </div>   
        </div>                  

        <div class="col">
          <div class="player-wrapper" @click="openTable('twelfth')">
            <Player v-bind:player="top.twelfth" size="avatar-small"></Player> 
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/12.png" class="image is-32x32" />
            </div>                                   
          </div>          
        </div>
        <div class="col">
          <div class="player-wrapper" @click="openTable('thirteenth')">
            <Player v-bind:player="top.thirteenth" size="avatar-small"></Player> 
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/13.png" class="image is-32x32" />
            </div>                                   
          </div>          
        </div>
        <div class="col">
          <div class="player-wrapper" @click="openTable('fourteenth')">
            <Player v-bind:player="top.fourteenth" size="avatar-small"></Player> 
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/14.png" class="image is-32x32" />
            </div>                                   
          </div>       
        </div>
        <div class="col">
          <div class="player-wrapper" @click="openTable('fifteenth')">
            <Player v-bind:player="top.fifteenth" size="avatar-small"></Player> 
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/15.png" class="image is-32x32" />
            </div>                                   
          </div>   
        </div>                  
 
        <div class="col">
          <div class="player-wrapper" @click="openTable('sixteenth')">
            <Player v-bind:player="top.sixteenth" size="avatar-small"></Player> 
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/16.png" class="image is-32x32" />
            </div>                                   
          </div>             
        </div>
        <div class="col">
          <div class="player-wrapper" @click="openTable('seventeenth')">
            <Player v-bind:player="top.seventeenth" size="avatar-small"></Player> 
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/17.png" class="image is-32x32" />
            </div>                                   
          </div>            
        </div>
        <div class="col">
          <div class="player-wrapper" @click="openTable('eighteenth')">
            <Player v-bind:player="top.eighteenth" size="avatar-small"></Player> 
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/18.png" class="image is-32x32" />
            </div>                                   
          </div>         
        </div>
        <div class="col">
          <div class="player-wrapper" @click="openTable('nineteenth')">
            <Player v-bind:player="top.nineteenth" size="avatar-small"></Player> 
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/19.png" class="image is-32x32" />
            </div>                                   
          </div>   
        </div> 
        <div class="col">
          <div class="player-wrapper" @click="openTable('twentieth')">
            <Player v-bind:player="top.twentieth" size="avatar-small"></Player> 
            <div class="trophy">
              <img src="https://www.hltv.org/img/static/event/trophies/2018/20.png" class="image is-32x32" />
            </div>                                   
          </div>          
        </div>                  
      </div> 
      <div class="share">
        <p class="share-it">Share:</p>
        <div class="share-buttons">
          <i class="fab fa-facebook-square facebook"></i>     
          <i class="fab fa-twitter-square twitter"></i>    
          <i class="fas fa-link link"></i>                     
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
      username:'',
      chosen:[]
    }
  },
  components: {
    Player,
    PlayersTable
  },
  methods: {
    openTable(position){
      this.chosen = []
      for(let x in this.top){
        this.chosen.push(this.top[x].id)
      }
      if(!this.item){
        let el = this
        this.position = position
        this.$buefy.modal.open({
          parent:this,
          component:PlayersTable,
          hasModalCard:false,
          props:{'chosen':this.chosen},
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
            window.scrollTo(0,0)
          })
        } catch (error) {
          console.log(error)
        }
      }
    },
    clearTops(){
      this.top={}
      this.chosen=[]
      this.username=''
      window.scrollTo(0,0)
    },
    fetchData(item){
      if(item!=undefined){
        let el = this
        this.isLoading = true
        db.collection('tops').doc(item).get().then(snapshot => {
          const data = snapshot.data()
          if(data!==undefined){
            el.top = data.tops
            el.username = data.username
            this.isLoading = false
          } else {
            el.$buefy.toast.open({
              message:'Top 20 not found',
              type:'is-danger'
            })
            this.isLoading = false
            el.$router.replace('/')
          }
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
.share {
  margin-top:10px;
  margin-bottom:10px;
  color:#929a9e;
}
.share-buttons i {
  padding:10px;
  font-size:30px;
}
.share .facebook {
  color:#3b5998;
}
.share .twitter {
  color:#1DA1F2;
}
.share .link {
  color:#2c3e50;
}
.teste {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-evenly;
}
.col {
  box-sizing: border-box;
  min-width: 60px;
  padding:10px;
}
.subpred {
    font-style: italic;
}

.divisor {
  margin-top:30px;
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
  max-width: 500px;
  margin:0 auto;
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
  max-width:600px !important;
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
