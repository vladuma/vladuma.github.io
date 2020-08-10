<template>
  <section id="projects-list">
    <div class="projects">
      <h3>Pet projects</h3>
      <div id="project-grid">
        <div class="filters">
          <Filters v-for="filter in filters"
            :key="filter"
            v-bind:filter="filter"
            v-bind:activeFilter="activeFilter"
            v-on:updateFilter="updateFilter"
          />
        </div>
        <div class="grid" :class="{showMore: showMoreProjects || projectCount < 8}">
            <Project v-for="project in projects" :key="project.index" v-bind:project="project"/>
        </div>
        <div class="more-button-container" v-if="projectCount >= 8">
          <div class="button-wb show-more-skills" @click="showMoreProjectsHandler">{{showMoreBtnText}}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const _ = require("underscore");

import Filters from "./filter/filter";
import Project from "./project/project";
import '../styles/flip-card.scss';

export default {
  name: "Projects",
  components: {
    Project,
    Filters
  },
  props: {
    projects: {
      type: Array
    },
    defaultFilter: {
      type: String,
      default: "all"
    }
  },
  data() {
    return {
      filters: this.createFilters(),
      activeFilter: this.defaultFilter,
      hSkills: this.filterModel(),
      showMoreProjects: false,
      showMoreBtnText: "Show More",
      projectCount: this.getProjectCount()
    };
  },
  methods: {
    createFilters() {
      this.updateFilter(this.defaultFilter);

      return ["all"].concat(
        _.uniq(
          _.map(this.projects, item => {
            return item.type;
          })
        )
      );
    },
    updateFilter(filter) {
      this.activeFilter = filter;
      this.filterModel();
    },
    filterModel() {
        return _.each(this.projects, (item, idx) => {
            item.isHidden = this.activeFilter && this.activeFilter !== 'all' && item.type !== this.activeFilter ? true : false;
            item.index = typeof item.index !== "number" ? idx + 1 : item.index + 1;
            this.projectCount = this.getProjectCount();
        });
    },
    getProjectCount() {
      return this.projects.filter(project => !project.isHidden).length;
    },
    showMoreProjectsHandler(e) {
      this.showMoreProjects = !this.showMoreProjects;
      this.showMoreBtnText = this.showMoreProjects ? "Show less" : "Show more";
    }
  }
};
</script>

<style lang="scss">
.grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  padding: 25px 0;

  &:not(.showMore) div:not(.hidden):nth-child(n+9){
    display: none;
  }
}
.project {
  width: calc(25% - 10px);
  padding: 30px 0;
  margin: 0 5px;
}
.more-button-container {
  display: flex;
  justify-content: center;
}
</style>