import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    isLoading: false,
    isError: false,
  },

  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setLoading(state, status) {
      state.isLoading = status;
    },
    error(state, status) {
      state.isError = status;
    },
  },

  actions: {
    async fetchUsers({ commit }) {
      try {
        commit('setLoading', true);
        const data = await fetch('https://jsonplaceholder.typicode.com/users/');
        const users = await data.json();
        const filteredUsers = users.map((el) => ({
          id: el.id, name: el.name, phone: el.phone, address: el.address, status: false,
        }));
        commit('setUsers', filteredUsers);
        commit('setLoading', false);
        commit('error', false);
      } catch (error) {
        commit('setLoading', false);
        commit('error', true);
      }
    },

    setUserStatus(ctx, { id, status }) {
      const { users } = ctx.state;
      users[users.findIndex((el) => el.id === id)].status = status;
      ctx.commit('setUsers', users);
    },
  },

  getters: {
    getIncludedUsers: (state) => state.users.filter((user) => user.status),
    getUserInfo: (state) => (id) => state.users.find((user) => user.id === +id),
  },

  modules: {
  },
});
