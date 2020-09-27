<template>
  <header>
    <nav>
      <ul :class="{hidden: showNav}">
        <li>
          <a href="#skills-list">Stack</a>
        </li>
        <li>
          <a href="#projects-list">Portfolio</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div class="nav-icon">
        <i v-on:click="openMobileNav" class="fas fa-bars 2x"></i>
      </div>
    </nav>
    <div class="hero-banner">
      <div class="hero-elements">
        <h3>Hi, my name is Vlad, and</h3>
        <vue-typed-js :strings="['web developer', 'front-end developer', 'software engineer', 'full-stack developer.']">
          <h3>I am a <span class="typing"></span></h3>
        </vue-typed-js>
        <div class="hero-btns">
          <div class="to-portfolio">
            <a class="button" v-on:click="printPage" target="_blank">Print CV <i class="fas fa-print"></i></a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import '../styles/header.scss';

export default {
  name: 'Header',
  data() {
    return {
      showNav: window.outerWidth <= 768
    }
  },
  methods: {
    printPage() {
      window.print();
    },
    handleResize() {
      this.showNav = window.outerWidth <= 768
    },
    openMobileNav() {
      this.showNav = !this.showNav;
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
};
</script>

<style>
  @media screen and (max-width: 768px) {
    nav {
      height: 45px;
    }
    nav ul {
      position: absolute;
      top: 30px;
      right: 0px;
      width: 200px;
      flex-direction: column;
      background-color: black;
    }
    nav ul li {
      height: 35px;
    }
    .nav-icon {
      font-size: 25px;
      position: absolute;
      right: 15px;
      top: 10px;
    }
  }
  @media screen and (min-width: 769px) {
    .nav-icon {
      display: none;
    }
  }
</style>
