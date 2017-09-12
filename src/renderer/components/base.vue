<template>
<div class="base">
    <div class="setList">
        <div style="max-width:17rem;">
            <h5>添加活动标题：</h5>
            <el-input v-model="active_title" placeholder="请输入活动标题 例：加息联盟 邀您加入"></el-input>
            <h5>添加活动介绍：</h5>
            <el-input v-model="active_desc" placeholder="请输入活动介绍 例：华安未来战略入股 收益开启安全加速"></el-input>
            <h5>添加活动链接地址：</h5>
            <el-input v-model="active_url" placeholder="请输入活动链接地址 例：https://image.ppmiao.com/Public/activity/Notice20170717_alliance/index.html"></el-input>
        </div>
        <div class="first-pic">
            <h5>设置图片数量：</h5>
            <p style="color:#F56C00">
                图片分辨率必须为 750*750
            </p>
            <el-input v-model="input" placeholder="请输入图片数"></el-input>
            <h5>设置最后一张图片的高度：</h5>
            <el-input v-model="lastPic_height" placeholder="请输入数字（单位:px）例：300" style='width:5.5rem'></el-input>
            <el-button @click="lastheight" style="padding: 10px 20px;">转为rem</el-button>
            <h5>选择图片的添加方式：</h5>
            <el-switch :width='90' v-model="updata" on-color="#13ce66" off-color="#ff4949" on-text="添加CDN" off-text="本地上传" style="margin-bottom:.4rem">
            </el-switch>
        </div>
        <el-input v-if="(pic__number != undefined || pic__number.length != 0) && updata == true" v-for="(item,index) in pic__number" v-model="pic[index]" placeholder="请按填写图片cdn"></el-input>
        <el-button v-if="updata == true" @click="preview" style="margin-top: 15px;" type="warning">预览生成页</el-button>
        <div class="" v-if="updata == false">
            <input v-for="(item,index) in pic__number" type="file" ref="picInput" class="file-input" multiple webkitRelativePath :style="{ display: index === 0 ? 'block' : 'none' }">
            <div>
                    <el-button style="margin-top:.5rem;" type="primary" @click="imgShow">点击上传</el-button>
            </div>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </div>
        <div class="config-time">
            <h5>设置活动时间：(例如：活动时间：2017年7月1日-7月3日)</h5>
            <el-input v-model="active_time" placeholder="请输入活动时间"></el-input>
            <el-input v-model="active_time_color" placeholder="请输入活动时间的颜色 例：#fff"></el-input>
            <el-button @click="upheight">上移</el-button>
            <el-button @click="downheight">下移</el-button>
            <el-input v-model="font_size_input" placeholder="字号（单位:px)" style="width:3rem;margin-left:10px"></el-input>
        </div>
        <div class="last-pic">
            <h5>设置按钮：</h5>
            <el-dropdown @command="handleCommand" style="margin:10px 0">
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
            <el-input v-model="investment_str" placeholder="请输入按钮文字 例：立即投资"></el-input>
            <el-input v-model="investment_bg" placeholder="请输入按钮背景颜色 例：#fff"></el-input>
            <el-input v-model="investment_color" placeholder="请输入按钮文字颜色 例：#fff"></el-input>
        </div>
        <el-button type="primary" style="margin: 10px 0 20px" @click="downloadHTML()">生成HTML</el-button>
    </div>
</div>
</template>
<script>
import {dataHeader1, dataHeader2, dataHeaderEnd, dataFooter, dataGo2AppBefore, dataGo2AppAfter, dataWeixin1, dataScroll, dataWeixin2, dataWeixin3, dataWeixin4, dataWeixin5} from '../../../static/param';
export default {
    name: 'base',
    data () {
        return {
            input: '',
            active_time: '活动时间：2017年7月1日-7月3日',
            active_time_color: '',
            top: 5,
            lastPic_height: '750',
            font_size: 0.3733,
            font_size_input: '',
            pic__number: 0,
            pic: [],
            imgDataArr: [],
            renderArr: [],
            investment_str: '',
            investment_bg: '',
            investment_color: '',
            investment_page: '',
            investment_Name: '',
            active_url: '',
            active_title: '',
            active_desc: '',
            scroll_port: '',
            updata: true
        };
    },
    props: {
        render__html: Object
    },
    methods: {
        downloadHTML: function () {
            this.$emit('update:pro', false);
            this.download('index.html', dataHeader1 + this.active_title + dataHeader2 + dataHeaderEnd + this.render__html.app.innerHTML + dataGo2AppBefore + this.investment_page + dataGo2AppAfter + dataWeixin1 + this.scroll_port + dataScroll +
                this.active_url + dataWeixin2 + this.active_url + dataWeixin3 + this.active_title + dataWeixin4 + this.active_desc + dataWeixin5 + dataFooter);
            this.$emit('update:pro', true);
        },
        handleCommand (command) {
            this.investment_Name = command;
            switch (command) {
            case '首页':
                this.investment_page = 1;
                break;
            case '产品列表':
                this.investment_page = 2;
                break;
            case '账户中心':
                this.investment_page = 3;
                break;
            case '更多页':
                this.investment_page = 4;
                break;
            case '我的奖励':
                this.investment_page = 5;
                break;
            case '好友推荐':
                this.investment_page = 6;
                break;
            case '我的钱包':
                this.investment_page = 7;
                break;
            case '银行卡列表':
                this.investment_page = 8;
                break;
            default:
                this.investment_page = 2;
            }
        },
        createAndDownloadFile: function (fileName, content) {
            var aTag = document.createElement('a');
            aTag.innerHTML = '点击下载';
            var blob = new Blob([content]);
            aTag.download = fileName;
            aTag.href = URL.createObjectURL(blob);
            aTag.click();
            URL.revokeObjectURL(blob);
        },
        download: function (filename, text) {
            var element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
            element.setAttribute('download', filename);
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        },
        preview: function () {
            this.renderArr = this.pic;
            this.$emit('update:render__pic', this.renderArr);
        },
        lastheight: function () {
            if (this.lastPic_height !== '') {
                this.lastPic_height = parseInt(this.lastPic_height) / 75 + 'rem';
                this.$emit('update:render__lastPic_height', this.lastPic_height);
            }
        },
        upheight: function () {
            this.top -= 0.1;
            this.$emit('update:render__active_time_top', this.top);
        },
        downheight: function () {
            this.top += 0.1;
            this.$emit('update:render__active_time_top', this.top);
        },
        imgShow: function () {
            var _this = this;
            this.imgDataArr = [];
            for (let i = 0; i < this.pic__number; i++) {
                _this.imgDataArr.push('');
            }
            console.log(this.$refs.picInput);
            this.$refs.picInput.map(function (item, index) {
                if (item.files[0] !== undefined) {
                    Object.keys(item.files).forEach(function (index) {
                        if (!/\/(?:jpeg|jpg|png)/i.test(item.files[index].type)) return;
                        var reader = new FileReader();
                        reader.readAsDataURL(item.files[index]);
                        reader.onload = function () {
                            var result = this.result;
                            _this.imgDataArr.splice(index, 1, result);
                        };
                    });
                }
            });
            this.renderArr = this.imgDataArr;
            this.$emit('update:render__pic', this.renderArr);
            console.log(this.imgDataArr);
        }
    },
    watch: {
        input: function () {
            if (this.input !== '') {
                this.pic__number = parseInt(this.input);
                this.$emit('update:render__num', this.pic__number);
            }
        },
        active_time: function () {
            if (this.active_time !== '') {
                console.log(this.active_time);
                this.$emit('update:render__active_time', this.active_time);
            }
        },
        active_title: function () {
            if (this.active_title !== '') {
                return this.active_title;
            }
        },
        active_desc: function () {
            if (this.active_desc !== '') {
                return this.active_desc;
            }
        },
        active_url: function () {
            if (this.active_url !== '') {
                return this.active_url;
            }
        },
        scroll_port: function () {
            if (this.scroll_port !== '') {
                return this.scroll_port;
            }
        },
        investment_str: function () {
            if (this.investment_str !== '') {
                this.$emit('update:render__investment_str', this.investment_str);
            }
        },
        investment_bg: function () {
            if (this.investment_bg !== '') {
                this.$emit('update:render__investment_bg', this.investment_bg);
            }
        },
        active_time_color: function () {
            if (this.active_time_color !== '') {
                this.$emit('update:render__active_time_color', this.active_time_color);
            }
        },
        investment_color: function () {
            if (this.investment_color !== '') {
                this.$emit('update:render__investment_color', this.investment_color);
            }
        },
        investment_page: function () {
            if (this.investment_page !== '') {
                return this.investment_page;
            }
        },
        value: function () {
            console.log(this.value);
        },
        font_size_input: function () {
            if (this.font_size_input !== '') {
                this.font_size = parseInt(this.font_size_input) / 75 + 'rem';
                this.$emit('update:render__font_size_input', this.font_size);
            }
        }
    }
};
</script>

<style lang="scss">
    .setting {
        background-color: #EFD9C7;
        width: calc(100% - 13.8rem);
        padding: 0 0.8rem;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        overflow: scroll;
        min-height: 25rem;
        .file-input{
            background-color: #fff;
            background-image: none;
            border-radius: 4px;
            border: 1px solid #bfcbd9;
            box-sizing: border-box;
            color: #1f2d3d;
            font-size: inherit;
            height: 27px;
            margin: .1rem .3rem;
            outline: 0;
            padding: 3px 10px;
            transition: border-color .2s;
        }
        .openMenuBox {
            width: 50px;
            height: 50px;
            line-height: 50px;
            position: absolute;
            border-radius: 50%;
            top: 50%;
            right: -25px;
            margin-top: -25px;
            text-align: right;
            font-size: 26px;
            z-index: 98;
            .openMenuCover {
                width: 25px;
                height: 50px;
                position: absolute;
                background-color: #FCD6A1;
                z-index: 12;
            }
            .openMenu {
                width: 44px;
                height: 50px;
                padding-right: 6px;
                line-height: 50px;
                position: absolute;
                border-radius: 50%;
                position: absolute;
                // background-color: #F56C00;
                background-color: rgba(245,108,0,0.5);
                color: #fff;

            }
        }
        .menuListSetting {
            width: calc(100% - 3.8rem);
            height: 22.66rem;
            padding: 0.5rem;
            background-color: #EFD9C7;
            position: absolute;
            left: 4rem;
            display: none;
        }
        .add {
            left:0rem!important;
        }
        .menuBox {
            width: 4rem;
            height: 23.66rem;
            position: fixed;
            left: -4rem;
            transition: left 0.5s;
            z-index: 99;
        }
        .menu {
            position: absolute;
            background-color: #FCD6A1;
            float: left;
            width: 4rem;
            height: 100%;
            ul {
                width: 100%;
                .list {
                    font-size: 26px;
                    height: 1.5rem;
                    line-height: 1.5rem;
                }
                li {
                    width: 100%;
                    height: 1rem;
                    line-height: 1rem;
                    text-align: center;
                    font-size: 18px;
                    color: #333;
                }
                .active {
                    background-color: rgba(245,108,0,0.5);
                }
            }

        }
        .setList {
            float: left;
            padding-top: .73rem;
            .first-pic {
                width: 8rem;
            }
            .last-pic {
                width: 6.7rem;
            }
            h5 {
                margin: 15px 0 5px;
            }
            .el-input__inner {
                margin: 3px 0;
            }
            .config-time {
                width: 6.7rem;
            }
        }

    }
</style>
