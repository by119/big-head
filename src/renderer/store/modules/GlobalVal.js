const state = {
    showView: 0,
    showMenu: 0
};

const mutations = {
    changeView (state, value) {
        state.showView = value;
    },
    changeMenu (state, value) {
        state.showMenu = value;
    }
};

const actions = {
    changeView: ({ commit }, value) => commit('changeView', parseInt(value)),
    changeMenu: ({ commit }, value) => commit('changeMenu', parseInt(value))
};

export default {
    state,
    mutations,
    actions
};
