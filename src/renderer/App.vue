<template>
<div id="app">
    <div class="setting">
        <div :class="{'menuBox':true,'add':isMenuOpen}">
            <div class="menu">
                <div class="openMenuBox">
                    <div class="openMenuCover"></div>
                    <div class="openMenu" @click="MenuOpen">{{openMenuText}}</div>
                </div>
                <ul>
                    <li class="list">目录</li>
                    <li class="collection-item" v-for="(menuList,index) in menuLists" :class="{active: menuListName == menuList}" :id="'menuList'+index" @click="selecteMenu(menuList)">{{menuList}}</li>
                </ul>
            </div>
            <div class="menuListSetting">
                    <div v-show="menuListName == '头部跑马灯'">
                        <h5>头部跑马灯数据接口：</h5>
                        <el-input v-model="scroll_port" placeholder="请输入数据接口 例：http://114.55.85.42:2018/winningList" @change="getScrollListLength"></el-input>
                        <!-- <el-button @click="upheight">上移</el-button> -->
                    </div>
                    <div v-show="menuListName == '听歌'">
                        <h5>添加活动标题：</h5>
                    </div>
                    <div v-show="menuListName == '游泳'">
                        <h5>添加活动标题：</h5>
                    </div>
            </div>
        </div>
        <base-function :render__pic.sync="renderArr" :render__num.sync = "pic__number"  :render__lastPic_height.sync= "lastPic_height" :render__active_time.sync = 'active_time' :render__active_time_color.sync = 'active_time_color' :render__active_time_top.sync = "top" :render__font_size_input.sync = "font_size"
        :render__investment_str.sync = "investment_str" :render__investment_bg.sync = "investment_bg" :render__investment_color.sync = "investment_color" :render__html="this.$refs" :pro= "pro" />
    </div>
    <div class="iphone">
        <div class="view">
            <div ref="app" style="height:17.75rem;">
                <div class="container">
                    <div v-if="renderArr.length != 0 && index + 1 != renderArr.length" v-for="(item,index) in pic__number" class="div__size" :style="'background-image:url('+ renderArr[index] +')'"></div>
                    <div v-else class="div__size" :style="'background-image:url('+ renderArr[index] +');height:'+lastPic_height"></div>
                    <p class="event-date" :style="'top:'+ top + 'rem;' + 'font-size:'+ font_size + ';color:' + active_time_color + ';font-family: PingFangSC-Regular!important'">{{active_time}}</p>
                </div>
                <div v-show="investment_str !== ''"
                :class="[{ positionStyle: pro }, 'investment']" :style="'color:' + investment_color +
                  ';background-color:' + investment_bg + ';font-family: PingFangSC-Regular!important'">{{investment_str}}</div>
                <span class="investment_page" style="display: none">{{investment_page}}</span>
            </div>
        </div>
    </div>
</div>
</template>
<script>
// import $ from 'jquery';
import BaseFunction from './components/base.vue';
export default {
    name: 'big-head',
    data() {
        return {
            input: '',
            active_time: '活动时间：2017年7月1日-7月3日',
            active_time_color: '',
            top: 5,
            isMenuOpen: false,
            openMenuText:"»",
            lastPic_height: '10rem',
            font_size: 0.3733,
            font_size_input:'',
            pic__number: 0,
            pic: [],
            renderArr: [],
            investment_str: '',
            investment_bg: '',
            investment_color: '',
            investment_page: '',
            scroll_port:'',
            scrollListLength:0,
            pro: true,
            menuLists:['头部跑马灯', '听歌', '游泳', '健身', '看电影', '旅游'],
            menuListName: '头部跑马灯',
        };
    },
    components: {BaseFunction},
    methods: {
        MenuOpen: function () {
            console.log(this.$refs);
            this.isMenuOpen = !this.isMenuOpen;
            if (this.isMenuOpen) {
                this.openMenuText = '«';
                document.querySelector('.menuBox').style.width = 'calc(100% - 13.8rem)';
                document.querySelector('.menuListSetting').style.display = 'block';
            } else {
                this.openMenuText = '»';
                document.querySelector('.menuBox').style.width = '4rem';
                document.querySelector('.menuListSetting').style.display = 'none';
            }
        },
        getScrollListLength: function () {
            // $.ajax({
            //     // url: 'http://114.55.85.42:2018/winningList',
            //     url: this.scroll_port,
            //     data: {
            //         token: 'VEtfMjAxNzA3MDcxNTUyMzZfNjY0MThfMjE0Nzgx',
            //         count: '20',
            //         type: '1',
            //         dev: 1
            //     },
            //     dataType: 'json',
            //     type: 'POST',
            //     success: function (data) {
            //         this.scrollListLength = data.info.length;
            //         document.querySelector('.scrollOut').style.width = this.scrollListLength * 5 + 'rem';
            //     }
            // });
        }
    },
    created: function() {
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
    // .setting::-webkit-scrollbar{width:0;height:0}
    .view {
        width: 10rem;
        background-color: #fff;
        position: absolute;
        top: 2.812rem;
        bottom: 3.15rem;
        right: 0.84rem;
        overflow: scroll;
    }
    .view::-webkit-scrollbar{width:0;height:0}
    .positionStyle{
        position:absolute!important;
    }

}

// 头部跑马灯
.scrollContainer {
	width: 10rem;
	height: 1.2rem;
	background-color: #faecdd;
    overflow: hidden;
	.scrollBox {
		position: relative;
		width: 15rem;
		height: 1.2rem;
		.scroll_notice {
			width: 0.8rem;
			height: 1.2rem;
			line-height: 1.2rem;
			padding-left: 15px;
			float: left;
			background-color: #faecdd;
			position: absolute;
			z-index: 1;
			img {
				width: 0.5rem;
				background-color: #faecdd;
				vertical-align: middle;
			}
		}
		.scrollContent {
			position: absolute;
			height: 1.2rem;
	    	line-height: 1.2rem;
			color: #793603;
			animation: scrollAct 70s infinite linear;
			ul {
				li {
					float: left;
                    width: 5rem;
				}
			}
		}
	}


}
@keyframes scrollAct
{
from {left:0rem;}
to {left:-100%;}
}
.investment{

}

</style>
