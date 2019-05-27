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
    <footer>
      <nav>
        <span>Frederik Rabøl</span>
        <a
          v-for="footerLink in projects"
          :key="footerLink.title"
          :href="footerLink.link"
          v-text="footerLink.title"
        ></a>
      </nav>
      <nav>
        <span>Contact</span>
        <a
          v-for="footerLink in contact"
          :key="footerLink.title"
          class="has--icon"
          :href="footerLink.link"
        >
          <svg class="icon">
            <use :xlink:href="`#${footerLink.title}`"></use>
          </svg>
          {{ footerLink.title }}
        </a>
      </nav>
    </footer>
    <svg-icons></svg-icons>
    <portal to="progress-bar">
      <progress-bar element="#app"></progress-bar>
    </portal>
  </main>
</template>
<script>
import svgIcons from '~/components/svg.vue'
import progressBar from '~/components/ScrollProgressBar.vue'
export default {
  layout: 'single-page-layout',
  components: {
    svgIcons,
    progressBar
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
      contact: [
        {
          title: 'codepen',
          link: 'https://codepen.io/xayer'
        },
        {
          title: 'email',
          link: '//mailto:frederik-rm@hotmail.com'
        },
        {
          title: 'linkedin',
          link: 'https://www.linkedin.com/in/frederikrabol/'
        }
      ],
      projects: [
        {
          title: 'BrickyPlace',
          link: 'https://brickyplace.rabol.co'
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
