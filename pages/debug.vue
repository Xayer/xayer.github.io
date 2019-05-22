<template>
  <ul>
    <li>
      Current theoretical network type is
      <b id="networkType" v-text="connection.type || 'not detected'"></b>
    </li>
    <li>
      Current effective network type is
      <b
        id="effectiveNetworkType"
        v-text="connection.effectiveType || 'not available'"
      ></b>
    </li>
    <li>
      Current max downlink speed is
      <b id="downlinkMax" v-text="connection.downlinkMax || 'not detected'"></b>
    </li>
  </ul>
</template>
<script>
import { get } from 'lodash'
export default {
  data: function() {
    return {
      connection: {
        type: Object,
        default: () => {}
      }
    }
  },
  mounted() {
    this.connection = this.getConnection()
    if (this.connection) {
      this.connection.addEventListener(
        'change',
        this.updateNetworkInfo(this.connection)
      )
      this.updateNetworkInfo(this.connection)
    }
  },
  methods: {
    getConnection() {
      return (
        navigator.connection ||
        navigator.mozConnection ||
        navigator.webkitConnection ||
        navigator.msConnection
      )
    },
    updateNetworkInfo(info) {
      this.connection = info
    }
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
  grid-template: 1fr;
  align-items: center;
  justify-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

ul {
  list-style-type: none;
  b {
    color: #009dff;
    text-transform: uppercase;
  }
}
</style>
