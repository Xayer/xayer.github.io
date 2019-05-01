<template>
  <section class="cards" :style="cardWidths">
    <card
      v-for="(card, index) in cards"
      :key="`${card.name}_${index}`"
      :name="card.name"
      :image="card.image"
    ></card>
  </section>
</template>
<script>
import Card from '~/components/Card.vue'

export default {
  components: {
    Card
  },
  data() {
    return {
      cards: [
        {
          name: 'Nature',
          image: 'https://source.unsplash.com/1600x900/?nature'
        },
        {
          name: 'Water',
          image: 'https://source.unsplash.com/1600x900/?water'
        },
        {
          name: 'technology',
          image: 'https://source.unsplash.com/1600x900/?technology'
        },
        {
          name: 'Trains',
          image: 'https://source.unsplash.com/1600x900/?train'
        },
        {
          name: 'Jonas',
          image: 'https://source.unsplash.com/1600x900/?tech'
        }
      ]
    }
  },
  computed: {
    cardWidths() {
      return {
        '--card-width': 100 / this.cards.length + '%',
        '--card-amount': this.cards.length,
        '--card-amount-double': this.cards.length * 2,
        '--card-wide-width': this.cards.length * 2 - (this.cards.length - 1)
      }
    }
  }
}
</script>
<style lang="sass">
.cards
  text-align: center
  height: 100vh
  overflow: hidden
  display: grid
  width: 100%;
  grid-template-columns: repeat(var(--card-amount-double),1fr);
</style>
