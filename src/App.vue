<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Make your predictions</router-link>
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
    <footer>
      <div class="content has-text-centered rodape">
        <p class="has-text-light">made in 🇧🇷 by <a href="https://www.reddit.com/user/diegomelo1">/u/diegomelo1</a></p>
        <p class="has-text-light">stats and images by <a href="https://hltv.org" target="_blank">HLTV.org</a> · all rights reserved</p>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name:'Principal',
    head: {
      title:{
        inner:'Top 20 Simulator',
        separator:' ',
        complement:' '
      },
      meta: [
        {name:'application-name',content:'Top 20 Simulator'},
        {name:'description', content:'Make your Top 20 CS:GO players predictions'},
        //Twitter
        {name:'twitter:title', content:'Top 20 Simulator'},
        {name:'twitter:description', content:'Make your Top 20 CS:GO Players predictions'},
        {name:'twitter:card', value:'summary'},
        {name:'twitter:site', content:'https://top20.diegomelo.com'},
        {name:'twitter:creator', content:'@dieguitoo'},
        {name:'twitter:image', content:'https://hltv-76648.firebaseapp.com/img/2019.png'},
        // Google+ / Schema.org
        { itemprop: 'name', content: 'Top 20 Simulator'},
        { itemprop: 'description', content: 'Make your Top 20 CS:GO Players predictions' },
        // ...
        // Facebook / Open Graph
        { property: 'og:title', content: 'Top 20 Simulator' },
        { property: 'og:site_name', content:'Top 20 Simulator'},
        { property: 'og:description', content:'Make your Top 20 CS:GO Players predictions'},
        { property: 'og:image', content: 'https://hltv-76648.firebaseapp.com/img/2019.png'},        
        { property: 'og:type', content:'website'},
        { property: 'og:locale', content:"en_US"}
      ]
    }
  }
</script>

<style>
@import url('https://use.fontawesome.com/releases/v5.2.0/css/all.css');
@import url('https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #efefef !important;
  background-color:#181b1f;
}
.title, .subtitle {
  color:#929a9e !important;
}
.rodape {
  font-size:0.8rem;
  padding-bottom:10px;
}
#nav {
  padding: 30px;
  color:#2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

 a {
   font-weight: bold;
   color:#2c3e50 !important;
 }

 a:hover {
   color:#929a9e !important;
   font-weight: bold;
 }

/* #nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
