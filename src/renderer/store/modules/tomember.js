const state = {
    tomember_str: '',
    tomember_width: '3.8',
    tomember_line: '0.96',
    tomember_size: '0.43',
    tomember_radius: '0.3',
    tomember_color: '#fff',
    tomember_bgc: '#489cf7',
    tomember_bottom: '4.5'
};

const mutations = {
    changeStr (state, value) {
        state.tomember_str = value;
    },
    changeWidth (state, value) {
        state.tomember_width = value;
    },
    changeLine (state, value) {
        state.tomember_line = value;
    },
    changeSize (state, value) {
        state.tomember_size = value;
    },
    changeRadius (state, value) {
        state.tomember_radius = value;
    },
    changeColor (state, value) {
        state.tomember_color = value;
    },
    changeBgc (state, value) {
        state.tomember_bgc = value;
    },
    changeBottom (state, value) {
        state.tomember_bottom = value;
    }
};

const actions = {
    changeStr: ({ commit }, value) => commit('changeStr', value),
    changeWidth: ({ commit }, value) => commit('changeWidth', value),
    changeLine: ({ commit }, value) => commit('changeLine', value),
    changeSize: ({ commit }, value) => commit('changeSize', value),
    changeRadius: ({ commit }, value) => commit('changeRadius', value),
    changeColor: ({ commit }, value) => commit('changeColor', value),
    changeBgc: ({ commit }, value) => commit('changeBgc', value),
    changeBottom: ({ commit }, value) => commit('changeBottom', value)
};

export default {
    state,
    mutations,
    actions
};
