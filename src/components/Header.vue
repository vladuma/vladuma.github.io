<template>
  <header>
    <nav>
      <ul>
        <li>
          <a href="#skills-list">Stack</a>
        </li>
        <li>
          <a href="#projects-list">Portfolio</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
    <div class="hero-banner">
      <div class="hero-elements">
        <h3>Hi, my name is Vlad, and</h3>
        <vue-typed-js :strings="['web developer', 'front-end developer', 'software engineer', 'full-stack developer.']">
          <h3>I am a <span class="typing"></span></h3>
        </vue-typed-js>
        <div class="hero-btns">
          <div class="to-portfolio">
            <!-- <a class="button" href="./files/Vlad Duma CV - 2019.pdf" target="_blank">Print CV</a> -->
            <a class="button" v-on:click="printPage" target="_blank">Print CV</a>
          </div>
          <div class="to-portfolio">
            <a class="button" href="#projects-list">Portfolio</a>
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
  methods: {
    printPage() {
      // alert('123');
      window.print();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
