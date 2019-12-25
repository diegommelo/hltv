<template>
    <div class="player-select">
        <div>
            <img v-if="player" :src="player.team_logo" class="team_logo is-pulled-right" :alt="player.team_name" />
            <figure class="image">
                <img v-bind:class="['image','is-rounded',size]" v-if="player" :src="'https://static.hltv.org/images/playerprofile/thumb/'+player.id+'/400.jpeg?v=4'" >
                <img v-bind:class="['image','is-rounded',size]" v-else src="https://static.hltv.org/images/team/logo/undefined">
            </figure>
        </div>
        <p v-if="player" class="player-name"><img :src="player.country" class="flag" />{{player.name}}</p>
        <p v-else class="player-empty"></p>   
    </div>
</template>

<script>
export default {
    name:'Player',
    props: ['player', 'size']
}
</script>

<style scoped>
figure img {
    margin: 0 auto;
  box-shadow: 0 0 20px rgba(0,0,0,0.6);
  border: solid 2px #333333;    
}
.player-empty{
    height:20px;
}
.player-name {
    font-weight: bold;
    padding-top:5px;
    padding-bottom:5px;
    font-size:0.9rem;
    color:#929a9e;
}
.team_logo {
    width:20px;
    position: absolute;
    z-index:1;
    margin-left:20px;
}
.flag {
    width:20px;
    vertical-align: middle;
    margin-right: 5px;
}
</style>