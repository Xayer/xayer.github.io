<template>
  <div ref="progressbar" class="progress">
    <span class="progress__inner"></span>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    element: {
      type: String,
      required: true
    }
  },
  computed: {
    elHeight() {
      const el = document.querySelector(this.element)
      if (el) {
        return el.clientHeight
      }

      return 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scroll)
    window.addEventListener('load', this.scroll)
    window.addEventListener('resize', this.scroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scroll)
    window.removeEventListener('load', this.scroll)
    window.removeEventListener('resize', this.scroll)
  },
  methods: {
    scroll() {
      const s = window.pageYOffset
      const d = window.innerHeight
      const scrollPercent = s / (this.elHeight - d)
      const { progressbar } = this.$refs
      if (progressbar) {
        progressbar.style.setProperty('--progress', scrollPercent * 100)
      }
    }
  }
}
</script>
<style lang="scss">
.progress {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  z-index: 999;
  &__inner {
    bottom: 0;
    left: 0;
    position: fixed;
    width: calc(var(--progress) * 1%);
    background-color: #ef7905;
    height: 5px;
    display: inline-block;
    transition: width 0.1s ease;
  }
}
</style>
