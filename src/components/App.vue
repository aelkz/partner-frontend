<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
      <span class="navbar-brand mb-0 h1">{{ title }}</span>
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link to="/store" class="nav-link">Store</router-link>
        </li>
        <li class="nav-item active">
          <router-link to="/login" v-if="!loggedIn" class="nav-link">Login</router-link>
          <router-link to="/login" v-if="loggedIn" class="nav-link">Logout</router-link>
        </li>
      </ul>
    </nav>
    <router-view>
    </router-view>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import auth from '../auth'

export default {
  name: 'app',
  computed: mapState({
    currentRoute: state => state.currentRoute,
    title: state => state.title,
    loggedIn: state => state.loggedIn
  })
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  padding-top: 30px;
}

.title {
  text-align: center;
}

h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
