<template>
  <main id="app">
    <header>
      <h1>Frederik Rabøl</h1>
      <a href="#work" class="arrow" @click.prevent="scrollToTarget"
        >view work</a
      >
    </header>
    <section id="work">
      <h2>Work</h2>
      <nav>
        <a
          v-for="project in work"
          :key="project.title"
          :href="project.link"
          v-text="project.title"
        ></a>
      </nav>
    </section>
    <section id="workplaces">
      <h2>Places I've Worked</h2>
      <article v-for="workplace in workplaces" :key="workplace.name">
        <h3 v-text="workplace.name"></h3>
        <span v-text="workplace.from"></span>
        —
        <span v-text="workplace.to"></span>
      </article>
    </section>
    <Slider :items="projects" />
    <Footer />
    <portal to="progress-bar">
      <progress-bar element="#app"></progress-bar>
    </portal>
  </main>
</template>
<script>
import progressBar from '~/components/ScrollProgressBar.vue'
import Slider from '~/components/slider/Slider'
import Footer from '~/components/Footer'
export default {
  layout: 'single-page-layout',
  components: {
    progressBar,
    Slider,
    Footer
  },
  metaInfo: {
    title: 'Portfolio',
    titleTemplate: '%s - Frederik Rabøl',
    htmlAttrs: {
      lang: 'en'
    }
  },
  data: function() {
    return {
      workplaces: [
        {
          name: 'Bonnier Publications',
          from: 2015,
          to: 2019
        },
        {
          name: 'Mobile Industrial Robots',
          from: 2019
        }
      ],
      work: [
        {
          title: 'Illustreret Videnskab',
          link: 'https://illvid.dk'
        },
        {
          title: 'Bo Bedre',
          link: 'https://bobedre.dk'
        },
        {
          title: 'Gør Det Selv',
          link: 'https://goerdetselv.dk'
        },
        {
          title: 'Eirin Kristiansen',
          link: 'https://eirinkristiansen.no'
        },
        {
          title: 'Silje Økland',
          link: 'http://siljeokland.com'
        },
        {
          title: 'Anniken Jørgensen',
          link: 'http://annijor.no'
        }
      ],
      projects: [
        {
          title: 'Bricky Place',
          description: 'LEGO Blog for my creative outlet.',
          url: 'https://brickyplace.rabol.co',
          image:
            'https://images.prismic.io/brickyplace-blog/aa251e2f-e221-4d96-b164-2b5847e6f6db_86262197_562977127620761_3270037165433683968_n.jpg'
        }
      ]
    }
  },
  methods: {
    scrollToTarget({ target }) {
      let href = null
      if (target.hasAttribute('href')) {
        href = target.getAttribute('href')
      } else if (target.parentNode.hasAttribute('href')) {
        href = target.parentNode.getAttribute('href')
      } else {
        return
      }
      const element = document.querySelector(href)
      const targetElement = element.getBoundingClientRect().top
      window.scroll({
        left: 0,
        top: window.pageYOffset + targetElement,
        behavior: 'smooth'
      })
    }
  }
}
</script>
<style lang="scss">
$link: #426b99;
$dark: darken(#25354f, 14);
$darker: darken($dark, 5);
$mid: #2a3d59;
$border: #333;
$darkest: #1a2432;
$header-color: #ef7905;
$cobber: #ef7905;
$header-bg: 'https://images.unsplash.com/photo-1583331989229-9cc35b3e3423?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80';
$workplace-bg: 'https://images.unsplash.com/photo-1583331989262-61e96eb9b706?ixlib=rb-1.2.1&auto=format&fit=crop&auto=format&fit=crop&w=1920&q=80';

body {
  font-family: 'Barlow';
  font-size: 16px;
  @media screen and (min-width: 320px) {
    font-size: calc(16px + 6 * ((100vw - 320px) / 680));
  }
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  --slider-text: #{$link};
  --slider-bg: #{$dark};
  --slider-bg-alt: #{lighten($dark, 5)};
  --slider-text-hover: #{$cobber};
  --footer-text: #{$link};
  --footer-text-hover: #{$cobber};
  --footer-bg: #{$dark};
}

main {
  align-items: center;
  justify-items: center;
  background-color: $darker;
}

main,
header,
footer,
section {
  display: grid;
}

header {
  grid-template-columns: 1fr;
  min-height: calc(190px - 1rem);
  height: calc(100vh - 1rem);
  width: 100%;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: center;
  padding-bottom: 1rem;
  // background-color: $dark;
  position: relative;
  background-image: url($header-bg);
  background-size: cover;
  background-position: center;
  &:before {
    background: -webkit-linear-gradient(270deg, transparent 75%, $dark 100%);
    content: '';
    z-index: 1;
    position: absolute;
    height: 100%;
    width: 100%;
  }
  h1 {
    z-index: 2;
    font-size: 3rem;
    text-shadow: 0 0 4px #000, 0 0 4px $cobber;
  }
  h1,
  a,
  a.arrow:after {
    color: $header-color;
    border-color: $header-color;
  }
}

a {
  z-index: 2;
  text-decoration: none;
  color: $link;
  &.arrow {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
    font-size: 125%;
    margin-bottom: 0.25rem;
    &:after {
      transition: 0.5s transform;
      content: '';
      width: 0.95rem;
      height: 0.95rem;
      border: 0.125rem solid $header-color;
      transform: rotate(45deg);
      border-left-width: 0;
      border-top-width: 0;
    }
    &:hover {
      &:after {
        transform: rotate(45deg) translateY(25%) translateX(25%);
      }
    }
  }
}

section {
  padding: 10vh 0;
  grid-gap: 0.5rem;
  background: -webkit-linear-gradient(270deg, $darker 0%, $dark 35%);
  min-height: calc(346px - 10vh * 2);
  height: calc(100vh - 10vh * 2);
  grid-template-rows: 2rem 1fr;
  width: 100%;
  color: $cobber;
  h2 {
    padding: 0;
    margin: 0;
    align-self: center;
    justify-self: center;
    font-size: 125%;
    text-align: center;
    text-transform: uppercase;
    text-shadow: 0 0 4px #000, 0 0 4px $cobber;
    z-index: 2;
  }
  &#workplaces {
    align-content: center;
    justify-content: center;
    grid-template-rows: 1fr auto;
    grid-template-columns: auto;
    grid-row-gap: 0;
    position: relative;
    background-image: url($workplace-bg);
    background-size: cover;
    background-position: center;
    &:before {
      background: -webkit-linear-gradient(
        270deg,
        $dark 0%,
        transparent 10%,
        transparent 80%,
        $dark 100%
      );
      content: '';
      z-index: 1;
      position: absolute;
      height: 100%;
      width: 100%;
    }
    article {
      display: grid;
      z-index: 2;
      grid-template-columns: 5fr 1.25fr 0.25fr 1.25fr;
      padding: 0.75rem;
      grid-gap: 0.25rem;
      background-color: $darkest;
      justify-items: center;
      align-items: center;
      h3 {
        font-size: 117%;
        justify-self: left;
      }
      span {
        font-size: 75%;
      }
      &:nth-child(odd) {
        background-color: darken($darkest, 2.5);
      }
    }
  }
  &#work {
    padding: 10vh 0;
    grid-gap: 0.5rem;
    background: $dark;
    min-height: calc(346px - 10vh * 2);
    height: calc(100vh - 10vh * 2);
    grid-template-rows: 2rem 1fr;
    width: 100%;
    color: $cobber;
    align-items: center;
    justify-items: center;
    nav {
      max-width: 75vw;
      grid-gap: 0.5rem;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(3, 1fr);
      @media (min-width: 634px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (min-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
      }
      display: grid;
      align-items: center;
      justify-items: center;
      a {
        color: lighten($dark, 25);
        font-size: calc(100vh / 34.5);
        text-transform: uppercase;
        grid-template-columns: 1fr;
        grid-template-rows: 2fr;
        display: grid;
        text-align: center;
        align-items: center;
        justify-items: center;
        &:before {
          content: '';
          order: 3;
          width: 0%;
          height: 2px;
          background-color: darken($cobber, 15);
          transition: 0.25s all;
          justify-self: left;
        }
        &:hover {
          transition: 0.25s all;
          color: $cobber;
          &:before {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
