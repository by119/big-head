<template>
  <div id="app">
      <div class="setting">
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
             <el-input v-model="lastPic_height" placeholder="请输入最后一张图的高度"></el-input>
             <el-button @click="lastheight">转为rem</el-button>
         </div>
         <div class="last-pic">
            <h5>设置按钮：</h5>
            <el-input v-model="investment_str" placeholder="请输入按钮文字"></el-input>
             <el-input v-model="investment_bg" placeholder="请输入按钮背景颜色"></el-input>
             <el-input v-model="investment_color" placeholder="请输入按钮文字颜色"></el-input>
         </div>
         <div class="" style="width:50px;height:30px;border:1px solid red;" @click="createAndDownloadFile('aaa.html',dataHeader+ dataFooter)">

         </div>
      </div>
      <div class="view">
          <div class="container">
              <div v-if="renderArr.length != 0 && index + 1 != renderArr.length"  v-for="(item,index) in pic__number" class="div__size"
                  :style="'background-image:url('+ renderArr[index] +')'"
              ></div>
              <div v-else class="div__size"
                  :style="'background-image:url('+ renderArr[index] +');height:'+lastPic_height"
              ></div>
              <p class="event-date" :style="'top:'+ top + 'rem'">{{active_time}}</p>
              <div class="investment" :style="'color:' + investment_color +
              ';background-color:' + investment_bg">{{investment_str}}</div>
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
              renderArr: ['../olympicsimg/02.jpg',
                  'http://ppmiao-image.oss-cn-hangzhou.aliyuncs.com/H5picture/common/2.jpg',
                  'http://ppmiao-image.oss-cn-hangzhou.aliyuncs.com/H5picture/common/3.jpg',
                  'http://ppmiao-image.oss-cn-hangzhou.aliyuncs.com/H5picture/common/4.jpg'],
              investment_str: '立即投资',
              investment_bg: '#fb6c04',
              investment_color: '#fff',
              updata: true,
              fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
              {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
              dataHeader: '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta content="yes" name="apple-mobile-web-app-capable"><meta content="yes" name="apple-touch-fullscreen"><meta content="telephone=no,email=no" name="format-detection"><title>通告页生成器</title><script src="https://image.ppmiao.com/Public/js/flexible.js"></script><script src="https://image.ppmiao.com/Public/js/flexible_css.js"></script><script src="https://image.ppmiao.com/Public/js/jquery-1.10.2.min.js"></script><link rel="stylesheet" href="https://image.ppmiao.com/Public/css/common.css"></head><body>',
              dataFooter: '<style>/*re*/html,body,h1,h2,h3,h4,h5,h6,div,dl,dt,dd,ul,ol,li,p,blockquote,pre,hr,figure,table,caption,th,td,form,fieldset,legend,input,button,textarea,menu{margin:0;padding:0;}header,footer,section,article,aside,nav,hgroup,address,figure,figcaption,menu,details{display:block;}table{border-collapse:collapse;border-spacing:0;}caption,th{text-align:left;font-weight:normal;}html,body,fieldset,img,iframe,abbr{border:0;}i,cite,em,var,address,dfn{font-style:normal;}[hidefocus],summary{outline:0;}li{list-style:none;}h1,h2,h3,h4,h5,h6,small{font-size:100%;}sup,sub{font-size:83%;}pre,code,kbd,samp{font-family:inherit;}q:before,q:after{content:none;}textarea{overflow:auto;resize:none;}label,summary{cursor:default;}a,button{cursor:pointer;}h1,h2,h3,h4,h5,h6,em,strong,b{font-weight:bold;}del,ins,u,s,a,a:hover{text-decoration:none;}body,textarea,input,button,select,keygen,legend{font:12px/1.14 arial,\5b8b\4f53;color:#333;outline:0;}body{background:#fff;}a,a:hover{color:#333;}</style></html>'
          };
      },
      components: {
      },
      methods: {
          createAndDownloadFile: function (fileName, content) {
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
              console.log(this.$refs.type1.value);
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
    // text-align: center;
    .setting{
        background-color: #F9BA03;
        width: calc(100% - 10.67rem);
        padding: 0 .33rem;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
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
    }
  }

</style>
