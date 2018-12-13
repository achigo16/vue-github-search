<template>
    <input v-model="query" @input="debouncedSearch" :placeholder="placeHolder" />
</template>

<script>
import { mapActions, mapState } from "vuex"
import debounce from "lodash/debounce"

export default {
  name: "search",
  props: {
    placeHolder: String
  },
  computed: {
    ...mapState(["searchQuery"]),
    query: {
      get() {
        return this.searchQuery
      },
      set(val) {
        return this.setSearchQuery(val)
      }
    }
  },
  methods: {
    ...mapActions(["setSearchQuery", "search"]),
    debouncedSearch: debounce(function() {
      this.search()
    }, 500)
  }
}
</script>

<style lang="stylus">
input {
    width: 100%;
    font-size: 20px;
    padding: 10px 0;
    text-align: center;
    outline: none;
    border: 0;
    background: #f1f1f1;
    border-radius: 10px;
    color: #000;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
