<template>
  <div>
    <portal-target name="progress-bar" slim></portal-target>
    <nuxt />
  </div>
</template>
<script>
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
          href: 'https://fonts.googleapis.com/css?family=Barlow:700'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
$link: #395a80;
$dark: darken(#25354f, 14);
$darker: darken($dark, 5);
$mid: #2a3d59;
$border: #333;
$darkest: #1a2432;
$header-color: #ff5e00;
$cobber: #ff5e00;
$footer-text: #7d92ac;
$header-bg: 'https://images.unsplash.com/photo-1519071538632-dd0814a805c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80';
$workplace-bg: 'https://images.unsplash.com/photo-1545182372-a341a55503ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80';

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
}

main {
  align-items: center;
  justify-items: center;
  //background-color: $darkest;
  background-image: linear-gradient(
    0deg,
    darken($darkest, 2.5) 50%,
    darken($darkest, 5) 50%
  );
  @media screen and (min-width: 430px) {
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(50%, darken($darkest, 2.5)),
      color-stop(50%, darken($darkest, 5))
    );
  }
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
  &:before {
    background: -webkit-linear-gradient(270deg, transparent 75%, $darker 100%);
    content: '';
    z-index: 1;
    position: absolute;
    height: 100%;
    width: 100%;
  }
  h1 {
    z-index: 2;
    font-size: 3rem;
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
    &:before {
      background: -webkit-linear-gradient(
        270deg,
        $dark 0%,
        transparent 10%,
        transparent 80%,
        $darker 100%
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
    background: -webkit-linear-gradient(270deg, $darker 0%, $dark 35%);
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

footer {
  color: $footer-text;
  grid-template-columns: 1fr;
  @media screen and (min-width: 430px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-gap: 2.5rem;
  }
  align-items: start;
  grid-gap: 1rem;
  display: grid;
  padding: 1rem 0;
  nav {
    display: grid;
    font-size: 1.5rem;
    grid-template-rows: 1fr;
    justify-content: start;
    //grid-template-rows: repeat(4, 1fr);
    grid-gap: 0.5rem;

    span {
      text-transform: uppercase;
      color: lighten($footer-text, 25);
    }
    a {
      color: lighten($dark, 25);
      display: grid;
      &.has--icon {
        grid-template-columns: 0.25fr 1fr;
      }
      grid-column-gap: 0.5rem;
      align-items: center;
      justify-items: start;
      &:hover,
      &:hover svg {
        color: lighten($dark, 30);
      }
      svg {
        align-self: center;
        justify-self: center;
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
}
</style>
