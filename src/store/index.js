import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    developers: [
      {
        id: 0,
        name: 'Peter Yo',
        email: 'petar-yo@test.com',
        phone: '9999999999',
        location: 'Westburn Grove 14',
        pictureUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjooinn.com%2Fimages%2Fman39s-face-11.jpg&f=1&nofb=1',
        pricePerHour: 50,
        technology: 'Java',
        description: 'lorem20',
        experince: 10,
        language: 'English',
        linkedIn: 'https://linkedin.com/'
      },
      {
        id: 1,
        name: 'Peter Yo',
        email: 'petar-yo@test.com',
        phone: '9999999999',
        location: 'Westburn Grove 14',
        pictureUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjooinn.com%2Fimages%2Fman39s-face-11.jpg&f=1&nofb=1',
        pricePerHour: 50,
        technology: 'Java',
        description: 'lorem20',
        experince: 10,
        language: 'English',
        linkedIn: 'https://linkedin.com/'
      },
    ],
  },
  mutations: {
    delete (state, [id]) {
      state.developers.splice(id,1);
    },
    update (state, payload) {
      state.developers[payload.id] = {...state.developers[payload.id], ...payload}
    },
    add (state, payload) {
      state.developers.push(payload),
      state.developers[state.developers.length-1].id = state.developers.length;
    }
  },
  actions: {
  },
  getters: {
    getCandidate: (state) => (id) => {
      return state.developers[id];
    },
    getCandidates: (state) => {
      return state.developers;
    }
  },
  modules: {
  }
})
