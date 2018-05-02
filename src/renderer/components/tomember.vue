<template>

<div class="tomember_btn">
  <h5>设置立即兑换按钮：</h5>
  <el-input v-model="tomember_str" placeholder="请输入按钮文字 例：立即兑换"></el-input>
  <el-input v-model="tomember_bottom" placeholder="请输入按钮距底部距离 例：4.5"></el-input>
  <el-input v-model="tomember_size" placeholder="请输入按钮文字大小 例：0.43"></el-input>
  <el-input v-model="tomember_color" placeholder="请输入按钮文字颜色 例：#c9e4ba"></el-input>
  <el-input v-model="tomember_bgc" placeholder="请输入按钮背景颜色 例：#506651"></el-input>
  <el-input v-model="tomember_width" placeholder="请输入按钮的宽度 例：3.73"></el-input>
  <el-input v-model="tomember_line" placeholder="请输入按钮的行高 例：0.96"></el-input>
  <el-input v-model="tomember_radius" placeholder="请输入按钮的圆角 例：0.3"></el-input>
</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'tomember',
    data () {
        return {
            tomember_str: this.$store.state.tomember.tomember_str,
            tomember_bottom: this.$store.state.tomember.tomember_bottom,
            tomember_size: this.$store.state.tomember.tomember_size,
            tomember_color: this.$store.state.tomember.tomember_color,
            tomember_bgc: this.$store.state.tomember.tomember_bgc,
            tomember_width: this.$store.state.tomember.tomember_width,
            tomember_line: this.$store.state.tomember.tomember_line,
            tomember_radius: this.$store.state.tomember.tomember_radius
        };
    },
    computed: mapGetters([]),
    methods: {
        ...mapActions(['changeStr', 'changeSize', 'changeColor', 'changeBgc', 'changeWidth', 'changeLine', 'changeRadius', 'changeBottom'])
    },
    watch: {
        tomember_str: function () {
            if (this.tomember_str !== '') {
            }
            this.changeStr(this.tomember_str);
        },
        tomember_size: function () {
            if (this.tomember_size !== '') {
                this.changeSize(this.tomember_size);
            }
        },
        tomember_color: function () {
            if (this.tomember_color !== '') {
                this.changeColor(this.tomember_color);
            }
        },
        tomember_bgc: function () {
            if (this.tomember_bgc !== '') {
                this.changeBgc(this.tomember_bgc);
            }
        },
        tomember_width: function () {
            if (this.tomember_width !== '') {
                this.changeWidth(this.tomember_width);
            }
        },
        tomember_line: function () {
            if (this.tomember_line !== '') {
                this.changeLine(this.tomember_line);
            }
        },
        tomember_radius: function () {
            if (this.tomember_radius !== '') {
                this.changeRadius(this.tomember_radius);
            }
        },
        tomember_bottom: function () {
            if (this.tomember_bottom !== '') {
                this.changeBottom(this.tomember_bottom);
            }
        }
    }
};
</script>

<style lang="scss">
.tomember_btn {
    width: 6.7rem;
}
.el-input__inner {
    margin: 3px 0;
}
// .config-time {
//     width: 6.7rem;
// }
</style>
