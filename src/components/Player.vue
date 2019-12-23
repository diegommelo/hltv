<template>
    <div class="player-select">
        <figure class="image">
            <img v-bind:class="['image','is-rounded',size]" v-if="player" :src="'https://static.hltv.org/images/playerprofile/thumb/'+player.id+'/400.jpeg?v=4'" >
            <img v-bind:class="['image','is-rounded',size]" v-else src="https://bulma.io/images/placeholders/128x128.png">
        </figure>
        <p v-if="player" class="player-name"><img :src="player.country" class=" flag" />{{player.name}}</p>
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
}
.player-empty{
    height:20px;
}
.player-name {
    font-weight: bold;
    padding-top:5px;
    padding-bottom:5px;
    font-size:0.9rem;
}
.flag {
    width:28px;
    vertical-align: middle;
}
</style>