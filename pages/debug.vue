<template>
  <ul>
    <li>
      <b :class="onlineStatus" v-text="onlineStatus"></b> — Notifications
      <b v-text="notificationsEnabled ? 'active' : 'off'"></b>
    </li>
    <li v-text="connection.type">
      Current theoretical network type is
      <b
        :class="connection.type"
        v-text="connection.type || 'not detected'"
      ></b>
    </li>
    <li v-if="connection.effectiveType">
      Current effective network type is
      <b
        :class="connection.effectiveType"
        v-text="connection.effectiveType || 'not available'"
      ></b>
    </li>
    <li>
      Current max downlink speed is
      <b v-text="`${connection.downlink}Mbps` || 'not detected'"></b>
    </li>
    <li>
      Battery
      <b><i :class="`fas ${batteryIcon}`"></i> {{ `${batteryPercentage}%` }}</b>
      <span v-if="battery.charging">(charging)</span>
    </li>
  </ul>
</template>
<script>
import { get } from 'lodash'
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
          href: 'https://use.fontawesome.com/releases/v5.8.2/css/solid.css',
          integrity:
            'sha384-ioUrHig76ITq4aEJ67dHzTvqjsAP/7IzgwE7lgJcg2r7BRNGYSK0LwSmROzYtgzs',
          crossorigin: 'anonymous'
        }
      ]
    }
  },
  data: function() {
    return {
      connection: {
        type: Object,
        default: () => {}
      },
      online: {
        type: Boolean,
        default: true
      },
      notificationsEnabled: {
        type: Boolean,
        default: false
      },
      battery: {
        type: Object,
        default: () => {}
      }
    }
  },
  computed: {
    onlineStatus() {
      return this.online ? 'online' : 'offline'
    },
    batteryPercentage() {
      return this.battery && this.battery.level ? this.battery.level * 100 : 0
    },
    batteryIcon() {
      if (this.battery.charging) {
        return 'fa-plug'
      }
      const percentage = this.batteryPercentage
      if (percentage === 100) {
        return 'fa-battery-full'
      }
      if (percentage < 99 || percentage >= 75) {
        return 'fa-battery-three-quarters'
      }
      if (percentage < 74 || percentage >= 50) {
        return 'fa-battery-half'
      }
      if (percentage < 49 || percentage >= 25) {
        return 'fa-battery-quarter'
      }
      if (percentage < 24) {
        return 'fa-battery-empty'
      }
      return 'fa-battery-full'
    }
  },
  watch: {
    online() {
      const message = this.online ? "You're back online" : 'lost connection'
      this.sendNotification(message)
    },
    battery() {
      console.log(this.battery.charging)
      console.log(this.battery.level)
    }
  },
  mounted() {
    this.setupOnlineDetection()
    this.setupDataConnection()
    const self = this
    Notification.requestPermission(function(result) {
      self.notificationsEnabled = result === 'granted'
    })
    this.setupBatteryWatcher()
  },
  methods: {
    sendNotification(message) {
      if (!('Notification' in window)) {
        alert('Notification API not supported!')
        return
      }
      try {
        const notification = new Notification(message)
      } catch (err) {
        alert('Notification API error: ' + err)
      }
    },
    setupOnlineDetection() {
      const self = this
      window.addEventListener('online', function() {
        self.online = navigator.onLine
      })
      window.addEventListener('offline', function() {
        self.online = navigator.onLine
      })
      self.online = navigator.onLine
    },
    setupDataConnection() {
      const self = this
      this.connection = this.getConnection()
      if (this.connection) {
        this.connection.addEventListener('onchange', function() {
          self.connection = self.getConnection()
        })
      }
    },
    setupBatteryWatcher() {
      const self = this
      if (
        'getBattery' in navigator ||
        ('battery' in navigator && 'Promise' in window)
      ) {
        let batteryPromise
        if ('getBattery' in navigator) {
          batteryPromise = navigator.getBattery()
        } else {
          batteryPromise = Promise.resolve(navigator.battery)
        }

        batteryPromise.then(function(battery) {
          battery.onchargingchange = function() {
            console.log('NEW BATTERY STATUS')
            console.log(this)
            console.log('OLD BATTERY STATUS')
            console.log(self.battery)
          }
          battery.onchargingtimechange = function() {
            console.log('NEW BATTERY STATUS')
            console.log(this)
            console.log('OLD BATTERY STATUS')
            console.log(self.battery)
          }
          battery.ondischargingtimechange = function() {
            console.log('NEW BATTERY STATUS')
            console.log(this)
            console.log('OLD BATTERY STATUS')
            console.log(self.battery)
          }
          battery.onlevelchange = function() {
            console.log('NEW BATTERY STATUS')
            console.log(this)
            console.log('OLD BATTERY STATUS')
            console.log(self.battery)
          }
        })
      }
    },
    getConnection() {
      return (
        navigator.connection ||
        navigator.mozConnection ||
        navigator.webkitConnection ||
        navigator.msConnection
      )
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

.online {
  color: lighten(green, 10);
}
.offline {
  color: lighten(red, 10);
}
</style>
