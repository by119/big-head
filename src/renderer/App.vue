<template>
  <div id="app">
      <div class="setting">
          <h5>添加活动标题：</h5>
          <el-input v-model="active_title" placeholder="请输入活动标题"></el-input>
          <h5>添加活动介绍：</h5>
          <el-input v-model="active_desc" placeholder="请输入活动介绍"></el-input>
          <h5>添加活动链接地址：</h5>
          <el-input v-model="active_url" placeholder="请输入活动链接地址"></el-input>
          <div class="first-pic">
            <h5>设置图片：</h5>
              <p>
                  图片分辨率 750*750
              </p>
              <el-input v-model="input" placeholder="请输入图片数"></el-input>
              <h5>选择图片的添加方式：</h5>
              <el-switch
                  v-model="updata"
                  on-color="#13ce66"
                  off-color="#ff4949">
            </el-switch>
          </div>
          <el-input v-if="(pic__number != undefined || pic__number.length != 0) && updata == true"
          v-for="(item,index) in pic__number" v-model="pic[index]" placeholder="请按填写图片cdn"></el-input>
         <el-button v-if="updata == true" @click="preview">预览</el-button>
        <!-- <el-upload
             v-if="updata == false"
             class="upload-demo"
             action="https://jsonplaceholder.typicode.com/posts/"
             :on-preview="handlePreview"
             :on-remove="handleRemove"
             :file-list="fileList">
             <el-button size="small" type="primary">点击上传</el-button>
             <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
       </el-upload> -->
        <!-- <div v-if="updata == false">
            <input type="file" id="file-input" multiple webkitdirectory :change=handleFiles()>
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </div> -->
        <div class="" v-if="updata == false">
            <input v-for="(item,index) in pic__number" type="file" class="file-input" multiple webkitRelativePath>
            <el-button size="small" type="primary" @click="addArr">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </div>
         <div class="config-time">
             <h5>设置活动时间：(例如：活动时间：2017年7月1日-7月3日)</h5>
             <el-input v-model="active_time" placeholder="请输入活动时间"></el-input>
             <el-button @click="upheight">上移</el-button>
             <el-button @click="downheight">下移</el-button>
         </div>
         <div class="last-pic">
            <h5>设置最后一张图片的高度：</h5>
             <el-input v-model="lastPic_height" placeholder="请输入数字（单位:px）"></el-input>
             <el-button @click="lastheight">转为rem</el-button>
         </div>
         <div class="last-pic">
            <h5>设置按钮：</h5>
            <el-input v-model="investment_str" placeholder="请输入按钮文字"></el-input>
             <el-input v-model="investment_bg" placeholder="请输入按钮背景颜色"></el-input>
             <el-input v-model="investment_color" placeholder="请输入按钮文字颜色"></el-input>
             <el-input v-model="investment_page" placeholder="请输入按钮跳转页面序号"></el-input>
         </div>
         <div class="" style="width: 30px;text-align: center; padding: 10px; margin-bottom:20px;border-radius: 5px;color: #fff;font-weight: 700;background-color: #20a0ff;" @click="test()">
             生成
         </div>
      </div>
      <div class="view">
          <div ref="app">
              <div class="container">
                  <div v-if="renderArr.length != 0 && index + 1 != renderArr.length"  v-for="(item,index) in pic__number" class="div__size"
                      :style="'background-image:url('+ renderArr[index] +')'"
                  ></div>
                  <div v-else class="div__size"
                      :style="'background-image:url('+ renderArr[index] +');height:'+lastPic_height"
                  ></div>
                  <p class="event-date" :style="'top:'+ top + 'rem'">{{active_time}}</p>
                  <div v-show = "investment_str !== ''" class="investment" :style="'color:' + investment_color +
                  ';background-color:' + investment_bg">{{investment_str}}</div>
                  <span class="investment_page" style="display: none">{{investment_page}}</span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
      name: 'big-head',
      data () {
          return {
              input: '',
              active_time: '活动时间：2017年7月1日-7月3日',
              top: 5,
              lastPic_height: '',
              pic__number: 0,
              pic: [],
            //   renderArr: ['https://image.ppmiao.com/H5picture/common/1.jpg',
            //       'https://image.ppmiao.com/H5picture/common/2.jpg',
            //       'https://image.ppmiao.com/H5picture/common/3.jpg',
            //       'https://image.ppmiao.com/H5picture/common/4.jpg'],
            //   renderArr: ['./images/01.jpg',
            //       './images/02.jpg',
            //       './images/03.jpg',
            //       './images/04.jpg',
            //       './images/05.jpg'],
              renderArr: [],
              investment_str: '立即投资',
              investment_bg: '#fb6c04',
              investment_color: '#fff',
              investment_page: '3',
              active_url: "https://image.ppmiao.com/Public/activity/Notice20170717_alliance/index.html",
              active_title: '加息联盟 邀您加入',
              active_desc: '华安未来战略入股 收益开启安全加速',
              updata: true,
              fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
              {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
              dataHeader1: "<!DOCTYPE html><html lang='en'><head><meta charset='utf-8'><meta content='yes' name='apple-mobile-web-app-capable'><meta content='yes' name='apple-touch-fullscreen'><meta content='telephone=no,email=no' name='format-detection'><title>",
              dataHeader2: "</title><link rel='stylesheet' href='https://image.ppmiao.com/Public/css/common.css'>" + '<scr'+'ipt src="https://image.ppmiao.com/Public/js/flexible.js"></scr' + 'ipt><scr'+'ipt src="https://image.ppmiao.com/Public/js/flexible_css.js"></scr' + 'ipt><scr' + 'ipt src="https://image.ppmiao.com/Public/js/jquery.min.js"></scr' + 'ipt>' + '<scr' + 'ipt src="./go2app.js"></scr' + 'ipt>' + '<scr' + 'ipt src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js" type="text/javascript" charset="utf-8">' + '</scr' + 'ipt>',
              dataHeaderEnd: '</head><body><div style="display:none;"><img src="https://image.ppmiao.com/H5picture/common/300.png" /></div>',
              dataFooter: '</body></html>',
              dataGo2AppBefore:'<scr' + 'ipt>' + '$(".investment").click( function(){go2App(',
              dataGo2AppAfter:')})' + '</scr' + 'ipt>',
              dataWeixin1: `<scr` + `ipt>`+`var result = "";
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
              });`
              + `</scr` + `ipt>`
          };
      },
      components: {
      },
      // directives: {
      //     myOn: {
      //         bind (el, binding, vnode) {
      //             const event = binding.arg;
      //             const fn = binding.value;
      //             el.addEventListener(event, fn);
      //         }
      //     }
      // },
      methods: {
          test: function () {
              this.createAndDownloadFile('index.html', this.dataHeader1 + this.active_title + this.dataHeader2 + this.dataHeaderEnd + this.$refs.app.innerHTML + this.dataGo2AppBefore + this.investment_page + this.dataGo2AppAfter + this.dataWeixin1 + this.active_url + this.dataWeixin2 + this.active_url + this.dataWeixin3 + this.active_title + this.dataWeixin4 + this.active_desc + this.dataWeixin5 + this.dataFooter);
          },
          createAndDownloadFile: function (fileName, content) {
              console.log(this.$refs.app.innerHTML);
              var aTag = document.createElement('a');
              aTag.innerHTML = '点击下载';
              var blob = new Blob([content]);
              aTag.download = fileName;
              aTag.href = URL.createObjectURL(blob);
              aTag.click();
              URL.revokeObjectURL(blob);
          },
          preview: function () {
              this.renderArr = this.pic;
          },
          lastheight: function () {
              if (this.lastPic_height !== '') {
                  this.lastPic_height = parseInt(this.lastPic_height) / 75 + 'rem';
              }
          },
          upheight: function () {
              // console.log(this.top);
              this.top -= 0.1;
          },
          downheight: function () {
              this.top += 0.1;
          },
          handleRemove: function (file, fileList) {
              // console.log(file, fileList);
          },
          handlePreview: function (file) {
              // console.log(file);
          },
          handleFiles: function () {
              // var fileList = this.files;
              // console.log(document.querySelector('.file-input'));
              // console.log(document.querySelector('.file-input').files[0]);
              // console.log(document.querySelector('.file-input').files[0].path);
              // var fileList = document.querySelectorAll('.file-input');
              // var str = [];
              // for (var i = 0; i < fileList.length; i++) {
              //     str.push(document.querySelectorAll('.file-input')[i].files[0].path);
              //     // console.log(document.querySelector('.file-input').files[i]);
              //     // console.log(document.querySelector('.file-input').files[i].file.path);
              //     // console.log(document.querySelectorAll('.file-input')[i].files[0].path);
              // }
              // console.log(str);
          },
          addArr: function () {
              var arr = [];
              for (var i = 0; i < this.input; i++) {
                  var str = document.querySelectorAll('.file-input')[i].files[0].path;
                  str = str.slice(1);
                  arr.push(str);
              }
              console.log(arr);
              this.renderArr = arr;
              console.log(this.renderArr);
          }
      },
      watch: {
          input: function () {
              if (this.input !== '') {
                  this.pic__number = parseInt(this.input);
              }
          },
          active_time: function () {
              if (this.active_time !== '') {
                  return this.active_time;
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
          investment_str: function () {
              if (this.investment_str !== '') {
                  return this.investment_str;
              }
          },
          investment_bg: function () {
              if (this.investment_bg !== '') {
                  return this.investment_bg;
              }
          },
          investment_color: function () {
              if (this.investment_color !== '') {
                  return this.investment_color;
              }
          },
          investment_page: function () {
              if (this.investment_page !== '') {
                  return this.investment_page;
              }
          },
          value: function () {
              console.log(this.value);
          }
      },

      created: function () {
      }
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
    .setting{
        background-color: #F9BA03;
        width: calc(100% - 10.67rem);
        padding: 0 .33rem;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        overflow: scroll;
        .first-pic{
            width: 3rem;
        }
        .last-pic{
            width: 4rem;
        }
        h5{
            margin: 15px 0 5px;
        }
        .el-input__inner {
          margin: 3px 0;
        }
        .config-time {
          width: 6rem;
        }
    }
    .view{
        width: 10rem;
        background-color: #fff;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        overflow: scroll;
    }
  }

</style>
