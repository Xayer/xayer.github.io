<template>
  <div>
    <section class="container">
      <card-list></card-list>
    </section>
    <section
      class="container parallax"
      style="height: 100vh;"
      smooth-parallax=""
      :start-movement="-1"
      end-position-y="2"
      start-position-y="-1"
    >
      <logo />
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import CardList from '~/components/CardList.vue'

export default {
  components: {
    Logo,
    CardList
  }
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  &.parallax {
    background-image: linear-gradient(
      -180deg,
      #268bd2 0%,
      #c5e0e8 21%,
      #f0f2e4 41%,
      #032833 82%
    );
  }
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
