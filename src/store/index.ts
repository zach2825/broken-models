import database from '@/models/index';
import VuexORM from '@vuex-orm/core'
import { createStore } from 'vuex'

export default createStore({
  plugins: [VuexORM.install(database)],
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
