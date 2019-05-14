<template>
  <article class="card">
    <a @click.prevent.stop="toggleOpen($event)" v-text="name"></a>
    <figure>
      <img
        :src="image"
        alt=""
        smooth-parallax=""
        start-movement="0"
        :start-position-y="0"
        :end-position-y="0.75 * multiplier"
        container=".cards"
      />
    </figure>
  </article>
</template>

<script>
import _ from 'lodash'

export default {
  props: {
    name: {
      default: '',
      type: String,
      required: false
    },
    image: {
      default: '',
      type: String,
      required: false
    },
    multiplier: {
      default: 1,
      type: Number,
      required: false
    }
  },
  methods: {
    toggleOpen(event) {
      const element = event.target.parentElement
      const cards = document.querySelectorAll('.card')
      _.forEach(cards, card => {
        if (card !== element) card.classList.toggle('close')
      })
      element.classList.toggle('open')
    }
  }
}
</script>
<style lang="sass">
.card
    min-height: 100%
    text-align: center
    background-size: content
    cursor: pointer
    grid-column: span 2
    transition: 100ms cubic-bezier(1,.02,0,.98)
    vertical-align: middle
    position: relative
    a
        font-size: 1.5rem
        text-transform: capitalize
        vertical-align: middle
        text-align: center
        position: relative
        top: 50%
        transition: 250ms cubic-bezier(1,.02,0,.98)
        z-index: 2
        color: #FFF;
        opacity: 1
        display: inline-block
    figure
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      img
        object-fit: cover;
        width: 100%;
        height: 100%;
        -o-object-position: center center;
        object-position: center center;
        -o-object-position: var(--object-position,center center);
        object-position: var(--object-position,center center);
        font-family: "object-fit: cover;";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        vertical-align: middle;
        max-width: 100%;
        z-index: 1;

.open
  grid-column: span var(--card-wide-width)
  a
    transform: rotate(0deg)

.close
  grid-column: span 1
  a
    transform: rotateZ(90deg);
</style>
