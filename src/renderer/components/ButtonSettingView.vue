<template>
<div class="ButtonSettingView">
    <div class="urlIndex">
        <span style="fontSize:.5rem;">{{NumIndex + 1}}</span>
        <input type="file" class="file-input" @change="addImg()" webkitRelativePath>
    </div>
    <div style="float:left;width:12.2rem">
        <el-input v-model="picConfig[0]" placeholder="URL" class="urlInput" :disabled="inputDisable"></el-input>
        <el-input v-model="picConfig[1]" placeholder="width" class="urlInput-short"></el-input>
        <el-input v-model="picConfig[2]" placeholder="heght" class="urlInput-short"></el-input>
        <el-input v-model="picConfig[3]" placeholder="top" class="urlInput-short"></el-input>
        <el-input v-model="picConfig[4]" placeholder="bottom" class="urlInput-short"></el-input>
        <el-input v-model="picConfig[5]" placeholder="left" class="urlInput-short"></el-input>
        <el-input v-model="picConfig[6]" placeholder="right" class="urlInput-short"></el-input>
    </div>
    <steering style="float:left;position: relative;
    top: 1rem;" :NumIndex = "NumIndex"></steering>
    <el-dropdown @command="handleCommand" class="urlJump">
        <span class="el-dropdown-link">
            {{investment_Name || '跳转页面'}}<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command='首页' name="1">首页</el-dropdown-item>
            <el-dropdown-item command='产品列表' name="2">产品列表</el-dropdown-item>
            <el-dropdown-item command='账户中心' name="3">账户中心</el-dropdown-item>
            <el-dropdown-item command='更多页' name="4">更多页</el-dropdown-item>
            <el-dropdown-item command='我的奖励' name="5">我的奖励</el-dropdown-item>
            <el-dropdown-item command='好友推荐' name="6">好友推荐</el-dropdown-item>
            <el-dropdown-item command='我的钱包' name="7">我的钱包</el-dropdown-item>
            <el-dropdown-item command='银行卡列表' name="8">银行卡列表</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</div>
</template>
<script>
import Steering from './Steering.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'ButtonSettingView',
    data () {
        return {
            picConfig: [],
            investment_Name: '',
            inputDisable: false
        };
    },
    components: {
        Steering},
    props: {
        NumIndex: Number
    },
    computed: mapGetters([]),
    methods: {
        ...mapActions(['changeState']),
        handleCommand (command) {
            this.investment_Name = command;
            switch (command) {
            case '首页':
                this.picConfig[7] = 1;
                break;
            case '产品列表':
                this.picConfig[7] = 2;
                break;
            case '账户中心':
                this.picConfig[7] = 3;
                break;
            case '更多页':
                this.picConfig[7] = 4;
                break;
            case '我的奖励':
                this.picConfig[7] = 5;
                break;
            case '好友推荐':
                this.picConfig[7] = 6;
                break;
            case '我的钱包':
                this.picConfig[7] = 7;
                break;
            case '银行卡列表':
                this.picConfig[7] = 8;
                break;
            default:
                this.picConfig[7] = 2;
            }
            this.changeState({NumIndex: this.NumIndex, config: this.picConfig});
        },
        addImg: function () {
            var files = document.querySelectorAll('.file-input')[0].files;
            var file = files[0];
            var _this = this;
            if (!/\/(?:jpeg|jpg|png)/i.test(file.type)) return;
            var reader = new FileReader();
            this.inputDisable = true;
            reader.onload = function () {
                _this.picConfig[0] = this.result;
                _this.changeState({NumIndex: _this.NumIndex, config: _this.picConfig});
            };
            reader.readAsDataURL(file);
        }
    },
    watch: {
        picConfig: function () {
            this.changeState({NumIndex: this.NumIndex, config: this.picConfig});
        }
    }
};
</script>

<style lang="scss">
.ButtonSettingView{
    position: relative;
    top: 1rem;
    margin: .3rem 0;
    width: 19rem;
    height: 4.5rem;
    .urlInput{
        width: 12.2rem;
        position: relative;
        top: .9rem;
        display: inherit
    }
    .urlInput-short{
        width: 4rem;
        position: relative;
        top: .9rem;
    }
    .urlJump{
        margin: 0;
        position: relative;
        top: 1.3rem;
        float:left;
    }
    .urlIndex{
        height: .7rem;
    }
}
</style>
