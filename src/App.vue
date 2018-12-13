<template>
  <div id="app">
    <img class="logo" alt="Github Logo" src="./assets/github_logo.png" />
    <Search placeHolder="Insert Github Username" />
    <User />
    <Repo />
  </div>
</template>

<script>
import Search from "./components/Search"
import User from "./components/User"
import Repo from "./components/Repo"

export default {
  name: "app",
  components: {
    Search,
    User,
    Repo
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
}
.logo {
  width: 200px;
}
</style>
