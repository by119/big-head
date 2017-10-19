<template>
<div class="buttonSetting" :style="{left: this.$store.state.GlobalVal.showMenu === 1 ? '5rem' : '1rem'}">
    <div class="setList">
        <div style="width:20rem;">
            <h5>请输入添加自定义按钮数</h5>
            <el-input v-model="button_num" placeholder="请输入按钮数 例：1000" style="width:5rem;"></el-input>
            <button-setting-view v-for="(item,index) in buttonSetting.buttonSetting.num " :NumIndex = "index" ></button-setting-view>
        </div>
    </div>
</div>
</template>
<script>
import ButtonSettingView from './ButtonSettingView.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'buttonSetting',
    data () {
        return {
            buttonSetting: this.$store.state.ButtonSetting,
            button_num: ''
        };
    },
    components: {
        ButtonSettingView
    },
    props: {
    },
    computed: mapGetters([]),
    methods: {
        ...mapActions(['changeStateNum'])
    },
    watch: {
        button_num: function () {
            if (this.button_num !== '') {
                this.changeStateNum(this.button_num);
            }
        }
    }
};
</script>

<style lang="scss">
.buttonSetting{
    width: 18.3rem;
    min-width: 18.3rem;
    left: 5rem;
    height: 20rem;
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
}
</style>
