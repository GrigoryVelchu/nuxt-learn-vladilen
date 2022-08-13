export const state = () => {
  return {
    token: null
  }
}
export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  clearToken(state){
    state.token = null
  }
}
export const actions = {
  nuxtServerInit(){
    console.log('!Server Start!')
  },
  login({commit}) {
    commit('setToken', 'trueToken')
  },
  logout({commit}){
    commit("clearToken")
  },
}
export const getters = {
  hasToken: s => !!s.token
}

