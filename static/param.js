var dataHeader1 = "<!DOCTYPE html><html lang='en'><head><meta charset='utf-8'>" +
"<meta name='viewport' content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0,viewport-fit=cover' />" +
"<meta content='yes' name='apple-mobile-web-app-capable'>" +
"<meta content='yes' name='apple-touch-fullscreen'>" +
"<meta content='telephone=no,email=no' name='format-detection'><title>";
var dataHeader2 = '</title><link rel="stylesheet" href="https://image.ppmiao.com/Public/css/common.css"><link rel="stylesheet" href="https://image.ppmiao.com/Public/css/menu.css">' +
    '<scr' +
    'ipt src="https://image.ppmiao.com/Public/js/flexible.js"></scr' +
    'ipt><scr' +
    'ipt src="https://image.ppmiao.com/Public/js/flexible_css.js"></scr' +
    'ipt><scr' +
    'ipt src="https://image.ppmiao.com/Public/js/jquery-1.10.2.min.js"></scr' +
    'ipt>' +
    '<scr' +
    'ipt src="https://image.ppmiao.com/Public/js/util.js"></scr' +
    'ipt>' +
    '<scr' +
    'ipt src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js" type="text/javascript" charset="utf-8">' +
    '</scr' +
    'ipt>';
var dataHeaderEnd = '</head><body>';
var dataFooter = '</body></html>';
var dataGo2AppBefore = '<scr' +
    'ipt>' +
    '$(".investment").click( function(){go2App(';
var dataGo2AppAfter = ')})' +
    '</scr' +
    'ipt>';
var dataWeixin1 = `<scr` + `ipt>` + `function getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
    var versionName = getQueryString("versionName");
    var version = getQueryString("version");
    var token = getQueryString("data");
    if (versionName === null) {
        if (version != null) {
            versionName = version
        } else {
            versionName = versionName
        }
    }
    var result = "";
    $.ajax({
        url: 'https://sailsact.ppmiao.com/getAppStartupConfig',
        type: "POST",
        data: {
          versionName: versionName
        },
        //返回数据的格式
        datatype: "json", //"xml", "html", "script", "json", "jsonp", "text".
        //成功返回之后调用的函数
        success: function(data) {
          // console.log(data);
          var integralUrl = data.result.vip_mall_url.split('|')[0];
          $('.member-button-body').click(function() {
            window.location.href = integralUrl + "?version=" + versionName + "&mobile=" + mobile + "&data=" + token;
          });
        }
    });
      $(document).ready(function() {
          // 头部跑马灯数据
          /*$.ajax({
            url: '`;
var dataScroll = `',
            data: {
                versionName: versionName,
                token: token,
                count: '20',
                type: '1',
                dev:1
            },
            dataType: 'json',
            type: 'POST',
            success: function(data) {
                console.log(data);
                var message = "";
                var  len = data.info.length;
                for (var i = 0; i < len; i++) {
                    message += '<li>'+ data.info[i].user_name.substring(0, 3) + '****' + data.info[i].user_name.substring(data.info[i].user_name.length - 4, data.info[i].user_name.length) + '获得' + data.info[i].prize_name +'</li>';
                }
                $('#scrollUl').html('');
                $('#scrollUl').append(message);
                this.scrollListLength = len;
                console.log(this.scrollListLength);
            }
        })*/
        /*$.ajax({
              type: 'POST',
              url: 'https://sailsact.ppmiao.com/wxToken',
              data: {
                  url: "`;
var dataWeixin2 = `"
              },
              success:function(data){
                      result = data;
                      wx.config(result);
                      wx.ready(function() {

                          // 2. 分享接口
                          // 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
                          var dataForWeixin = {
                              img: "https://image.ppmiao.com/H5picture/common/300.png",
                              linkurl: "`;
var dataWeixin3 = `",title: "`;
var dataWeixin4 = `",desc: "`;
var dataWeixin5 = `",};
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
                  });
                     },
              dataType: 'json'
          });*/
      });
  </scr` + `ipt>`;
export {dataHeader1, dataHeader2, dataHeaderEnd, dataFooter, dataGo2AppBefore, dataGo2AppAfter, dataWeixin1, dataScroll, dataWeixin2, dataWeixin3, dataWeixin4, dataWeixin5};
