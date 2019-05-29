<template>
  <section>
    <article v-for="item in feedItems" :key="item.id">
      <figure>
        <img :src="getImage(item)" alt="" />
      </figure>
      <p v-text="item.title"></p>
    </article>
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
  get feedItems(): Object | null {
    return get(this.feed, 'data.data.feed.data')
  }
  getImage(item): String | null {
    return get(item, 'images.data[2].url')
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
  grid-template: 1fr;
  align-items: center;
  justify-items: center;
}

section {
  display: grid;
  grid-gap: 1rem;
  max-width: 1300px;
  grid-template-columns: repeat(4, 1fr);
  article {
    background-color: #222;
    display: grid;
    grid-gap: 0.5rem;
    grid-template: 350px auto / 1fr;
    p {
      display: flex;
      flex-direction: column;
      align-self: start;
      padding: 0 0.5rem 0.5rem;
    }
    figure {
      display: flex;
      align-items: flex-end;
      width: initial;
      height: initial;
      max-height: 200px;
      overflow: hidden;
      img {
        height: auto;
        max-width: 100%;
      }
    }
  }
}
</style>
