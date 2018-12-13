<template>
  <div id="app">
    <Search />
    <User />
  </div>
</template>

<script>
import Search from "./components/Search"
import User from "./components/User"

export default {
  name: "app",
  components: {
    Search,
    User
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
