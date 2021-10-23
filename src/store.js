import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex)

const SET_SEARCH_QUERY = "SET_SEARCH_QUERY"
const SET_LOADING = "SET_LOADING"
const SET_USER = "SET_USER"
const SET_REPO = "SET_REPO"
const SET_LOADING_REPO = "SET_LOADING_REPO"
const RESET_USER = "RESET_USER"

export default new Vuex.Store({
  state: {
    searchQuery: "",
    loading: false,
    user: null,
    loadingRepo: false,
    repo: null
  },
  mutations: {
    [SET_SEARCH_QUERY]: (state, searchQuery) =>
      (state.searchQuery = searchQuery),
    [SET_LOADING]: (state, loading) => (state.loading = loading),
    [SET_LOADING_REPO]: (state, loading) => (state.loadingRepo = loading),
    [SET_USER]: (state, data) => {
      state.user = data.user
      state.repo = data.repos
    },
    [RESET_USER]: state => {
      state.user = null
      state.repo = null
    },
    [SET_REPO]: (state, repo) => (state.repo = repo)
  },
  actions: {
    setSearchQuery({ commit }, searchQuery) {
      commit(SET_SEARCH_QUERY, searchQuery)
    },
    async search({ commit }, state) {
      commit(SET_LOADING, true)
      try {
        const { data } = await axios.get(
          `https://api.github.com/users/${this.state.searchQuery}`
        )

        let repos = []
        if(data.name != undefined){
          let get = await axios.get(
            `https://api.github.com/users/${this.state.searchQuery}/repos`
          )

          if(get.data != undefined){
            repos = get.data
          }
        }

        console.log(repos)
        commit(SET_USER, {
          'user': data,
          'repos': repos
        })
      } catch (e) {
        commit(RESET_USER)
      }
      commit(SET_LOADING, false)
    },
    async searchRepo({ commit }, state) {
      commit(SET_LOADING_REPO, true)
      try {
        const { data } = await axios.get(this.state.user.repos_url)
        commit(SET_REPO, data)
      } catch (e) {}
      commit(SET_LOADING_REPO, false)
    }
  }
})
