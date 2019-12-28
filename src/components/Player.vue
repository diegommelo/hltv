<template>
    <div class="player-select">
        <div>
            <img v-if="player" :src="player.team_logo" class="team_logo is-pulled-right" :title="player.team_name" :alt="player.team_name" />
            <figure class="image">
                <lazy-img v-bind:class="['avatar','image',size]" v-if="player" :src="'https://static.hltv.org/images/playerprofile/thumb/'+player.id+'/400.jpeg?v=4'" placeholder="/img/loading.gif" />
                <lazy-img v-bind:class="['avatar','image',size]" v-else src="/img/undefined.png" />                    
                <img v-if="player" :src="player.country" class="flag" :alt="player.country_name" :title="player.country_name" />                                   
            </figure>
        </div>
        <p v-if="player" class="player-name">{{player.name}}</p>
        <p v-else class="player-empty"></p>   
    </div>
</template>

<script>

export default {
    name:'Player',
    props: ['player', 'size'],
}
</script>

<style scoped>
@media only screen and (min-width:320px) {
    .avatar-big {
        max-width:70px;
        min-width:70px;
    }
    .avatar-medium {
        max-width:60px;
        min-width:60px;
    }
    .avatar-small {
        max-width:55px;
        min-width:55px;
    }
    .flag {
        width:12px !important;
        margin-top:-18px !important;
    }
    .team_logo {
        width:12px;
        position: absolute;
        z-index:1;
        margin-left:12px;
        margin-top:2px;
    }    
    .top-three .flag{
        display: block;
        position: relative;
        margin-top:-20px !important;
        z-index:1;
        width:13px;
    }    
}
@media only screen and (min-width: 321px) {
    .avatar-big {
        max-width:96px;
        min-width:96px;
    }
    .avatar-medium {
        max-width:86px;
        min-width:86px;
    }
    .avatar-small {
        max-width:70px;
        min-width:70px;
    }    
    .team_logo {
        width:16px;
        position: absolute;
        z-index:1;
        margin-left:18px;
        margin-top:2px;
    }    
    .top-three .flag{
        display: block;
        position: relative;
        margin-top:-25px !important;
        z-index:1;
        width:18px !important;
    }    
    .top-three .team_logo {
        width:20px !important;
        margin-left:20px;
    }
    .flag {
        width:16px !important;
        margin-top:-22px !important;
    }    
}
@media only screen and (min-width:768px) {
    .avatar-big {
        min-width:176px;
    }
    .avatar-medium {
        min-width:148px;
    }
    .avatar-small {
        min-width:128px;
    }    
    .team_logo {
        width:20px;
        position: absolute;
        z-index:1;
        margin-left:35px;
        margin-top:2px;
    }    
    .top-three .team_logo {
        width:25px !important;
        margin-left:45px;
    }    
    .top-three .flag{
        display: block;
        position: relative;
        margin-top:-16px;
        z-index:1;
        width:20px !important;
        margin-left:8px
    }    
    .top-three .top-one .team_logo {
        margin-left:60px !important;
    }
    .flag {
        width:18px !important;
        margin-top:-25px !important;
    }      
}
.avatar {
    margin: 0 auto;
    box-shadow: 0 0 20px rgba(0,0,0,0.6);
    border: solid 2px #333333; 
    border-radius: 10px; 
    z-index:0;  
}
.player-empty{
    height:20px;
}
.player-name {
    font-weight: bold;
    padding-top:8px;
    padding-bottom:5px;
    font-size:0.9rem;
    color:#929a9e;
}

.flag {
   width:32px;
   display: block;
   position: relative;
   margin-top:-15px;
   margin-left:5px;
   border:1px solid #000;
}
</style>