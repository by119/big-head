const state = {
    buttonSetting: {num: 0,
        setting: []}
};

const mutations = {
    changeStateNum (state, value) {
        state.buttonSetting.num = value;
        let setting = [];
        for (let i = 0; i < value; i++) {
            setting.push({top: 1, bottom: 1, right: 1, left: 1, width: 1, height: 1, jumpto: 'go2App(2)', backgroundImage: 'url()'});
        }
        state.buttonSetting.setting = setting;
    },
    changeStatePicUp (state, value) {
        state.buttonSetting.setting[value].top -= 0.05;
    },
    changeStatePicDown (state, value) {
        state.buttonSetting.setting[value].top += 0.05;
    },
    changeStatePicLeft (state, value) {
        state.buttonSetting.setting[value].left -= 0.05;
    },
    changeStatePicRight (state, value) {
        state.buttonSetting.setting[value].left += 0.05;
    },
    changeState (state, value) {
        console.log(value);
        if (value) {
            value.config.map(function (item, index) {
                if (item !== undefined && index === 0) {
                    state.buttonSetting.setting[value.NumIndex].backgroundImage = 'url(' + item + ')';
                }
                if (item !== undefined && index === 1) {
                    state.buttonSetting.setting[value.NumIndex].width = parseInt(item);
                }
                if (item !== undefined && index === 2) {
                    state.buttonSetting.setting[value.NumIndex].height = parseInt(item);
                }
                if (item !== undefined && index === 3) {
                    state.buttonSetting.setting[value.NumIndex].top = parseInt(item);
                }
                if (item !== undefined && index === 4) {
                    state.buttonSetting.setting[value.NumIndex].bottom = parseInt(item);
                }
                if (item !== undefined && index === 5) {
                    state.buttonSetting.setting[value.NumIndex].left = parseInt(item);
                }
                if (item !== undefined && index === 6) {
                    state.buttonSetting.setting[value.NumIndex].right = parseInt(item);
                }
                if (item !== undefined && index === 7) {
                    console.log(item);
                    state.buttonSetting.setting[value.NumIndex].jumpto = 'go2App(' + item + ')';
                }
            });
        }
    }
};

const actions = {
    changeStateNum: ({ commit }, value) => commit('changeStateNum', parseInt(value)),
    changeStatePicUp: ({ commit }, value) => commit('changeStatePicUp', parseInt(value)),
    changeStatePicDown: ({ commit }, value) => commit('changeStatePicDown', parseInt(value)),
    changeStatePicLeft: ({ commit }, value) => commit('changeStatePicLeft', parseInt(value)),
    changeStatePicRight: ({ commit }, value) => commit('changeStatePicRight', parseInt(value)),
    changeState: ({ commit }, value) => commit('changeState', value)
};

export default {
    state,
    mutations,
    actions
};
