import { namespace as namespaceHelper } from 'nuxt-property-decorator'
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import Axios from 'axios'

export const namespace = 'feed/'

export const state = () => ({
  feed: [],
  host: null
})

export const mutations = {
  FETCHED_FEED(state, payload) {
    state.feed = payload
  },
  SET_HOST(state, payload) {
    state.host = payload
  }
}

export const actions = {
  async fetchFeed({ commit, state }) {
    console.log(this)
    const client = Axios
    const feed = await client.get(state.host)
    commit('FETCHED_FEED', feed.data)
  }
}

export const getters = {
  feed(state) {
    return state.feed
  }
}

export const feedNamespace = namespaceHelper(namespace)
