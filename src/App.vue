<template>
  <div id="app">
    <Header />
    <Skills 
      :hardSkills="skills.hardSkills"
      :softSkills="skills.softSkills"
      :nextSkills="skills.nextSkills"
    />
    <Projects 
      :projects="projects"
    />
    <Experience 
      :experience="experience"
    />
    <About />
    <Contact />
    <Footer />
    <Print 
      :hardSkills="skills.hardSkills || []"
      :softSkills="skills.softSkills || []"
      :experience="experience || []"
      :social_media="social_media || []"
      :contacts="contacts || []"
    />
  </div>
</template>

<script>
import './styles/reset.css';
import './styles/style.scss';
import './styles/responsive.scss';
import '../node_modules/devicon/devicon.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

import Header from './components/Header.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Projects.vue';
import Experience from './components/Experience.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
import Print from './components/Print.vue';

const hardSkills = require('./data/hard_skills.js');
const softSkills = require('./data/soft_skills.js');
const nextSkills = require('./data/next_skills.js');
const projects = require('./data/project_data.js');
const experience = require('./data/experience_data.js');

export default {
  name: 'App',
  components: {
    Header,
    Skills,
    Projects,
    Experience,
    About,
    Contact,
    Footer,
    Print
  },
  // props: [skills],
  data: function() {
    return {
      skills: {
        hardSkills: hardSkills,
        softSkills: softSkills,
        nextSkills: nextSkills,
      },
      projects: projects,
      experience: experience,
    }
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
