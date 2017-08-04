<template>
<div id="app">
    <div class="setting" style="height:24rem;">
        <div class="openMenu" @click="toggleMenu"><i></i><i></i><i></i></div>
            <div>
                <transition name="fade">
                    <div class="menu" v-if="isMenuOpen">
                        <ul>
                            <li>111111111111</li>
                            <li>222222222222</li>
                            <li>333333333333</li>
                            <li>444444444444</li>
                            <li>555555555555</li>
                        </ul>
                    </div>
                </transition>
            </div>
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
                <el-switch :width = '90' v-model="updata" on-color="#13ce66" off-color="#ff4949" on-text="添加CDN" off-text="本地上传">
                </el-switch>
            </div>
            <el-input v-if="(pic__number != undefined || pic__number.length != 0) && updata == true" v-for="(item,index) in pic__number" v-model="pic[index]" placeholder="请按填写图片cdn"></el-input>
            <el-button v-if="updata == true" @click="preview" style="margin-top: 15px;" type="warning">预览生成页</el-button>
            <div class="" v-if="updata == false">
                <input v-for="(item,index) in pic__number" type="file" class="file-input" @change="addImg(index)" multiple webkitRelativePath>
                <el-button size="small" type="primary" @click="imgShow">点击上传</el-button>
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
    <div class="iphone">
        <div class="view">
            <div ref="app">
                <div class="container">
                    <div v-if="renderArr.length != 0 && index + 1 != renderArr.length" v-for="(item,index) in pic__number" class="div__size" :style="'background-image:url('+ renderArr[index] +')'"></div>
                    <div v-else class="div__size" :style="'background-image:url('+ renderArr[index] +');height:'+lastPic_height"></div>
                    <p class="event-date" :style="'top:'+ top + 'rem;' + 'font-size:'+ font_size + ';color:' + active_time_color + ';font-family: PingFangSC-Regular!important'">{{active_time}}</p>
                    <div v-show="investment_str !== ''" class="investment" :style="'color:' + investment_color +
                      ';background-color:' + investment_bg + ';font-family: PingFangSC-Regular!important'">{{investment_str}}</div>
                    <span class="investment_page" style="display: none">{{investment_page}}</span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script src="https://image.ppmiao.com/Public/js/jquery.min.js"></script>
<script>
export default {
    name: 'big-head',
    data() {
        return {
            input: '',
            active_time: '活动时间：2017年7月1日-7月3日',
            active_time_color: '',
            top: 5,
            isMenuOpen: true,
            lastPic_height: '',
            font_size: 0.3733,
            font_size_input:'',
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
            updata: true,
            fileList: [{
                    name: 'food.jpeg',
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                },
                {
                    name: 'food2.jpeg',
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }
            ],
            dataHeader1: "<!DOCTYPE html><html lang='en'><head><meta charset='utf-8'><meta content='yes' name='apple-mobile-web-app-capable'><meta content='yes' name='apple-touch-fullscreen'><meta content='telephone=no,email=no' name='format-detection'><title>",
            dataHeader2: "</title><link rel='stylesheet' href='https://image.ppmiao.com/Public/css/common.css'>" + '<scr' + 'ipt src="https://image.ppmiao.com/Public/js/flexible.js"></scr' + 'ipt><scr' +
                'ipt src="https://image.ppmiao.com/Public/js/flexible_css.js"></scr' + 'ipt><scr' + 'ipt src="https://image.ppmiao.com/Public/js/jquery.min.js"></scr' + 'ipt>' + '<scr' + 'ipt src="https://image.ppmiao.com/Public/js/go2app.js"></scr' + 'ipt>' + '<scr' +
                'ipt src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js" type="text/javascript" charset="utf-8">' + '</scr' + 'ipt>',
            dataHeaderEnd: '</head><body><div style="display:none;"><img src="https://image.ppmiao.com/H5picture/common/300.png" /></div>',
            dataFooter: '</body></html>',
            dataGo2AppBefore: '<scr' + 'ipt>' + '$(".investment").click( function(){go2App(',
            dataGo2AppAfter: ')})' + '</scr' + 'ipt>',
            dataWeixin1: `<scr` + `ipt>` +
                `var result = "";
                  $(document).ready(function() {
                      $.ajax({
                          type: 'POST',
                          url: 'https://sailsact.ppmiao.com/wxToken',
                          data: {
                              url: "`,
            dataWeixin2: `"
                          },
                          success:function(data){
                                  result = data;
                                 },
                          dataType: 'json'
                      });
                  });
                  wx.config(result);
                  wx.ready(function() {

                      // 2. 分享接口
                      // 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
                      var dataForWeixin = {
                          img: "https://image.ppmiao.com/H5picture/common/300.png",
                          linkurl: "`,
            dataWeixin3: `",title: "`,
            dataWeixin4: `",desc: "`,
            dataWeixin5: `",};
                  wx.onMenuShareAppMessage({
                      title: dataForWeixin.title,
                      desc: dataForWeixin.desc,
                      link: dataForWeixin.linkurl,
                      imgUrl: dataForWeixin.img,
                      trigger: function(res) {

                      },
                      success: function(res) {
                          //alert('已分享');
                          //                share();
                      },
                      cancel: function(res) {
                          //alert('已取消');
                      },
                      fail: function(res) {
                          //alert(JSON.stringify(res));
                      }
                  });
                  // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
                  wx.onMenuShareTimeline({
                      title: dataForWeixin.desc,
                      link: dataForWeixin.linkurl,
                      imgUrl: dataForWeixin.img,
                      trigger: function(res) {
                          // alert('用户点击分享到朋友圈');
                      },
                      success: function(res) {
                          //alert('已分享');
                          //                share()
                      },
                      cancel: function(res) {
                          //alert('已取消');
                      },
                      fail: function(res) {
                          //alert(JSON.stringify(res));
                      }
                  });

                  wx.onMenuShareQQ({
                      title: dataForWeixin.title,
                      desc: dataForWeixin.desc,
                      link: dataForWeixin.linkurl,
                      imgUrl: dataForWeixin.img,
                      trigger: function(res) {
                          //alert('用户点击分享到QQ');
                      },
                      complete: function(res) {
                          //alert(JSON.stringify(res));
                      },
                      success: function(res) {
                          //alert('已分享');
                      },
                      cancel: function(res) {
                          //alert('已取消');
                      },
                      fail: function(res) {
                          //alert(JSON.stringify(res));
                      }
                  });
              });` +
                `</scr` + `ipt>`
        };
    },
    components: {},
    methods: {
        downloadHTML: function() {
            this.download('index.html', this.dataHeader1 + this.active_title + this.dataHeader2 + this.dataHeaderEnd + this.$refs.app.innerHTML + this.dataGo2AppBefore + this.investment_page + this.dataGo2AppAfter + this.dataWeixin1 +
                this.active_url + this.dataWeixin2 + this.active_url + this.dataWeixin3 + this.active_title + this.dataWeixin4 + this.active_desc + this.dataWeixin5 + this.dataFooter);
        },
        handleCommand(command) {
            this.investment_Name = command;
            switch(command)
                {
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
                console.log(this.investment_page);
        },
        createAndDownloadFile: function(fileName, content) {
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
        preview: function() {
            this.renderArr = this.pic;
        },
        lastheight: function() {
            if (this.lastPic_height !== '') {
                this.lastPic_height = parseInt(this.lastPic_height) / 75 + 'rem';
            }
        },
        upheight: function() {
            this.top -= 0.1;
        },
        downheight: function() {
            this.top += 0.1;
        },
        addImg: function(index){
            var files = document.querySelectorAll('.file-input')[index].files;
			var file = files[0];
			// 接受 jpeg, jpg, png 类型的图片
			if (!/\/(?:jpeg|jpg|png)/i.test(file.type)) return;
			var reader = new FileReader();
            var _this = this;
			reader.onload = function() {
				var result = this.result;
                _this.imgDataArr.push(result);
			}
			reader.readAsDataURL(file);
        },
        imgShow: function(){
            this.renderArr = this.imgDataArr;
        },
        toggleMenu:function(){
            this.isMenuOpen = !this.isMenuOpen;
            console.log(this.isMenuOpen);
        }
    },
    watch: {
        input: function() {
            if (this.input !== '') {
                this.pic__number = parseInt(this.input);
            }
        },
        active_time: function() {
            if (this.active_time !== '') {
                return this.active_time;
            }
        },
        active_title: function() {
            if (this.active_title !== '') {
                return this.active_title;
            }
        },
        active_desc: function() {
            if (this.active_desc !== '') {
                return this.active_desc;
            }
        },
        active_url: function() {
            if (this.active_url !== '') {
                return this.active_url;
            }
        },
        investment_str: function() {
            if (this.investment_str !== '') {
                return this.investment_str;
            }
        },
        investment_bg: function() {
            if (this.investment_bg !== '') {
                return this.investment_bg;
            }
        },
        active_time_color: function() {
            if (this.active_time_color !== '') {
                return this.active_time_color;
            }
        },
        investment_color: function() {
            if (this.investment_color !== '') {
                return this.investment_color;
            }
        },
        investment_page: function() {
            if (this.investment_page !== '') {
                return this.investment_page;
            }
        },
        value: function() {
            console.log(this.value);
        },
        font_size_input: function() {
            if (this.font_size_input !== '') {
                this.font_size = parseInt(this.font_size_input) / 75 + 'rem';
                console.log(this.font_size);
            }
        }
    },

    created: function() {}
};
</script>

<style lang="scss">
html {
    height: 100%;
}
body {
    height: 100%;
}
#app {
    font-family: Helvetica, sans-serif;
    .setting {
        background-color: #EFD9C7;
        width: calc(100% - 13rem);
        padding: 0 0.33rem;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        overflow: scroll;
        .openMenu {
            margin: .2rem;
            width: 30px;
            height: 26px;
            background-color: #F56C00;
            padding-top: 4px;
            i {
                display: block;
                width: 16px;
                height: 3px;
                margin: 3px auto;
                background-color: #fff;
            }
        }
        .menu {
            background-color: pink;
            float: left;
            position: absolute;
            left: 0;
            width: 3rem;
            max-width: 4rem;
            height: 10rem;
            z-index: 99;
            ul {
                width: 100px;
                height: 200px;
                li {
                    width: 100%;
                    height: .67rem;
                    line-height: .67rem;
                    padding-left: .13rem;
                }
                li:hover {
                    background-color: rgba(255, 0, 0, 0.3);
                }
            }

        }
        // .menu:hover {
        //     left:300px;
        // }
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
    .iphone{
        width: 11.62rem;
        background-image: url(./assets/iphone.png);
        background-repeat: no-repeat;
        background-size: 100%;
        position: relative;
        height: 23.7rem;
        float: right;
        right: .3rem;
        top: .5rem;
    }
    .view {
        width: 10rem;
        background-color: #fff;
        position: absolute;
        top: 2.812rem;
        bottom: 3.15rem;
        right: 0.84rem;
        overflow: scroll;
    }

}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
</style>
