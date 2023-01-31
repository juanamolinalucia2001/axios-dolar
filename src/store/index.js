import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading:{
      titulo:'',
      estado:false
    }
  },
  getters: {
  },
  mutations: {
    mostrarLoading(state, payload){
      state.loading.titulo = payload.titulo
      state.loading.estado=true
    },
    acultarLoading(state){
      state.loading.estado=false
    }
  },
  actions: {
  },
  modules: {
  }
})
