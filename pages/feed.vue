<template>
  <section>
    <article>
      <h1>Hi!</h1>
    </article>
    {{ feed }}
  </section>
</template>
<script lang="ts">
import { get } from 'lodash'
import axios from '@nuxtjs/axios'
import { Vue, Getter, Component, Action } from 'nuxt-property-decorator'
import { feedNamespace } from '~/store/feed'
@Component
export default class Feed extends Vue {
  layout = 'default'
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Barlow:700'
        }
      ]
    }
  }
  metaInfo() {
    return {
      title: 'Feed',
      titleTemplate: '%s - Frederik Rabøl',
      htmlAttrs: {
        lang: 'en'
      }
    }
  }
  @feedNamespace.Getter('feed')
  feed
  @feedNamespace.Action('fetchFeed')
  fetchFeed
  mounted() {
    this.fetchFeed()
  }
}
</script>
<style lang="scss">
body,
html {
  height: 100%;
  width: 100%;
}
body {
  display: grid;
  background: #333;
  color: #eee;
  margin: 0;
  padding: 0;
  font-family: 'Barlow', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
