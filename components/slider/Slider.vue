<template>
  <section class="slider">
    <sliderItem
      v-for="(sliderItem, sliderIndex) in items"
      :key="`${sliderItem.url}_${sliderIndex}`"
      :title="sliderItem.title"
      :description="sliderItem.description"
      :image="sliderItem.image"
      :url="sliderItem.url"
    />
  </section>
</template>
<script>
import sliderItem from './sliderItem'
export default {
  components: {
    sliderItem
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="scss">
$breakpoint: 673px;
.slider {
  display: flex;
  width: 100%;
  height: auto;
  padding: 0;
  overflow: hidden;
  background: var(--slider-bg);
  flex-direction: column;
  .item {
    background-color: var(--slider-bg);
    height: 50vh;
    overflow: hidden;
    transition: 0.25s all;
    &:nth-child(even) {
      .header {
        order: 2;
      }
      .teaser-section {
        clip-path: polygon(0 0, 100% 0, 0% 100%, 80% 100%);
        @media screen and (min-width: $breakpoint) {
          clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
        }
      }
    }
    display: flex;
    flex-direction: column;
    @media screen and (min-width: $breakpoint) {
      flex-direction: row;
    }
    align-items: center;
    .header {
      align-self: center;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      flex-grow: 1;
      text-align: center;
      padding-top: 2rem;
      @media screen and (min-width: $breakpoint) {
        padding-top: 0;
      }
      .title {
        color: var(--slider-text);
        font-size: calc(100vh / 34.5);
        text-transform: uppercase;
        grid-template-columns: 1fr;
        grid-template-rows: 2fr;
        display: grid;
        &:before {
          content: '';
          order: 3;
          width: 0%;
          height: 2px;
          background-color: var(--slider-text-hover);
          transition: 0.25s all;
          justify-self: left;
        }
      }
      .sub-title {
        color: var(--slider-text);
      }
      padding: {
        bottom: 0;
      }
    }
    &:hover {
      background-color: var(--slider-bg-alt);
      .title {
        transition: 0.25s all;
        color: var(--slider-text-hover);
        &:before {
          width: 100%;
        }
      }
    }
    .teaser-section {
      width: 100%;
      @media screen and (min-width: $breakpoint) {
        width: 60%;
      }
      object-fit: cover;
      flex: 0 1 auto;
      height: 100%;
      clip-path: polygon(0 20%, 100% 0, 100% 100%, 0 100%);
      @media screen and (min-width: $breakpoint) {
        clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%);
      }
    }
  }
}
</style>
