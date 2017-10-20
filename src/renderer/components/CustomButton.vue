<template>
    <div class="customButton-body">
        <div v-for = "(item,index) in this.$store.state.ButtonSetting.buttonSetting.setting" class="customButton"
        :style="{top: item.top + 'rem',
                 bottom: item.bottom + 'rem',
                 right: item.right + 'rem',
                 left: item.left + 'rem',
                 width: item.width + 'rem',
                 height: item.height + 'rem',
                 backgroundImage: item.backgroundImage
                 }" :onClick=item.jumpto></div>
    </div>
</template>
<script>
export default {
    name: 'customButton',
    data () {
        return {
        };
    },
    props: {
    },
    methods: {
    },
    watch: {
    }
};
</script>

<style lang="scss">
.customButton{
    background-repeat: no-repeat;
    background-size: 100%;
    width: 3rem;
    height: 1rem;
    position: absolute;
}
</style>
