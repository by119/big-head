<template>
  <div class="member-button-body">
    <div class="member-button" v-if="this.$store.state.tomember.tomember_str!=''"
    :style="{width: this.$store.state.tomember.tomember_width + 'rem',
            lineHeight: this.$store.state.tomember.tomember_line + 'rem',
            fontSize: this.$store.state.tomember.tomember_size + 'rem',
            borderRadius: this.$store.state.tomember.tomember_radius + 'rem',
            color: this.$store.state.tomember.tomember_color,
            backgroundColor: this.$store.state.tomember.tomember_bgc,
            position: 'absolute',
            left: '50%',
            transform:'translateX(-50%)',
            bottom: this.$store.state.tomember.tomember_bottom + 'rem',
            textAlign: 'center'}">
      {{this.$store.state.tomember.tomember_str}}
      <!-- 立即 -->
    </div>
  </div>
</template>

<script>
export default {
    name: 'memberButton',
    data () {
        return {
        };
    },
    props: {
    },
    methods: {
        toMemberFn () {
            console.log(111);
        }
    },
    watch: {
        tomember_str: function () {
            if (this.tomember_str !== '') {
                this.$emit('update:render__tomember_str', this.tomember_str);
            }
        }
    }
};
</script>

<style lang="scss"></style>
