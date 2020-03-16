<template>
  <footer>
    <h3 class="footer-logo">Rabøl</h3>
    <nav class="footer-links">
      <a
        v-for="footerLink in contact"
        :key="footerLink.title"
        class="footer-link-item"
        :href="footerLink.link"
      >
        {{ footerLink.title }}
      </a>
    </nav>
  </footer>
</template>
<script>
export default {
  data() {
    return {
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
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
footer {
  background-color: var(--footer-bg);
  color: var(--footer-text);
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 0;
  .footer-logo {
    width: 100%;
    margin-bottom: 1rem;
    display: inline-flex;
    color: var(--footer-text-hover);
    justify-content: center;
    text-transform: uppercase;
  }
  .footer-links {
    width: 100%;
    display: flex;
    justify-content: center;
    .footer-link-item {
      .icon {
        width: 1.25rem;
        height: 1.25rem;
      }
      justify-content: center;
      align-items: center;
      text-decoration: none;
      padding: 0 0.5rem;
      font-size: 1.25rem;
      text-transform: uppercase;
      color: var(--footer-text);
      grid-template-columns: 1fr;
      grid-template-rows: 2fr;
      display: grid;
      &:before {
        content: '';
        order: 3;
        width: 0%;
        height: 2px;
        background-color: var(--footer-text-hover);
        transition: 0.25s all;
        justify-self: left;
      }
      &:hover {
        transition: 0.25s all;
        color: var(--footer-text-hover);
        &:before {
          width: 100%;
        }
      }
    }
  }
  @media screen and (min-width: 673px) {
    .footer-logo {
      margin-bottom: 0;
    }
    .footer-links,
    .footer-logo {
      width: 50%;
    }
    flex-direction: row;
  }
}
</style>
