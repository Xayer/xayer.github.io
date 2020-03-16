<template>
  <a :href="url" class="item">
    <div class="header">
      <h3 class="title" v-text="title"></h3>
      <h5 class="sub-title" v-text="description"></h5>
    </div>
    <img class="teaser-section" :src="image" alt="title" />
  </a>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    description: {
      type: String,
      required: false,
      default: ''
    },
    image: {
      type: String,
      required: false,
      default: '//placehold.it/1050x1050/222222'
    },
    url: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
