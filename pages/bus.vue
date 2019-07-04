<template>
  <div class="timetables">
    <iframe :src="busUrl" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  computed: {
    busUrl() {
      return '//www.rejseplanen.dk/bin/help.exe/mn?L=vs_tus.vs_new&tpl=monitor&station=461682600@461682300&display=horizontal&p1=bus'
    }
  },
  metaInfo: {
    title: 'Time Table for Emil Neckelmanns Vej',
    titleTemplate: '%s - Frederik Rabøl'
  },
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://use.fontawesome.com/releases/v5.8.2/css/fontawesome.css',
          integrity:
            'sha384-sri+NftO+0hcisDKgr287Y/1LVnInHJ1l+XC7+FOabmTTIK0HnE2ID+xxvJ21c5J',
          crossorigin: 'anonymous'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.timetables {
  height: 100vh;
}
iframe {
  max-width: 100vw;
  height: 100vh;
  width: 100vw;
  @media screen and (min-width: 819px) {
    width: 50vw;
  }
  @media screen and (min-width: 1166px) {
    width: 37vw;
  }
}
</style>
