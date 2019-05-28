<template>
  <div>
    <portal-target name="progress-bar" slim></portal-target>
    <nuxt />
  </div>
</template>
<script>
export default {
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
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Barlow:700'
        }
      ]
    }
  }
}
</script>
