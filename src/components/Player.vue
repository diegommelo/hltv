<template>
    <div class="player-select">
        <figure class="image">
            <img class="is-rounded" v-if="player" :src="'https://static.hltv.org/images/playerprofile/thumb/'+player.id+'/400.jpeg?v=4'" >
            <img class="is-rounded" v-else src="https://bulma.io/images/placeholders/128x128.png">
        </figure>
        <span v-if="player" class="player-name">{{player.name}}</span>   
    </div>
</template>

<script>
export default {
    name:'Player',
    props: ['player']
}
</script>

<style scoped>

</style>