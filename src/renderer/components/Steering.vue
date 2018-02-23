<template>
<div class="steering">
    <el-button type="primary" class="left" @click="changeStatePicLeft(NumIndex)"><i class="el-icon-caret-left"></i></el-button>
    <el-button type="primary" class="top" @click="changeStatePicUp(NumIndex)"><i class="el-icon-caret-top"></i></el-button>
    <el-button type="primary" class="right" @click="changeStatePicRight(NumIndex)"><i class="el-icon-caret-right"></i></el-button>
    <el-button type="primary" class="bottom" @click="changeStatePicDown(NumIndex)"><i class="el-icon-caret-bottom"></i></el-button>
</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'steering',
    data () {
        return {
        };
    },
    props: {
        NumIndex: Number
    },
    computed: mapGetters([]),
    methods: {
        ...mapActions(['changeStatePicUp', 'changeStatePicDown', 'changeStatePicLeft', 'changeStatePicRight'])
    },
    watch: {
    }
};
</script>

<style lang="scss">
.steering{
    width: 4.2rem;
    height: 3rem;
    .left{
        position: relative;
        top: 1rem;
        left: .2rem;
    }
    .right{
        position: relative;
        top: 1rem;
        right: .2rem;
    }
    .bottom{
        position: relative;
        left: 1.25rem;
        top: 1.1rem;
    }
}
</style>
