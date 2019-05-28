import { namespace as FEED_MODULE } from '~/store/feed'

export const actions = {
  nuxtServerInit({ commit }, { env }) {
    if (env.FEED_HOST) {
      // Set CTM host so it may be used client side where process.env is not available
      commit(`${FEED_MODULE}SET_HOST`, env.FEED_HOST)
    }
  }
}
