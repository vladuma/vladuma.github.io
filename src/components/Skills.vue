<template>
  <section id="skills-list">
    <h3>Current stack</h3>
    <div class="filters">
      <Filters
        v-for="filter in filters"
        :key="filter"
        v-bind:filter="filter"
        v-bind:activeFilter="activeFilter"
        v-on:updateFilter="updateFilter"
      />
    </div>
    <div class="stack">
      <HardSkill v-for="skill in hSkills" :key="skill.index" v-bind:skill="skill" />
    </div>
    <div class="more-skills" v-if="showMoreSkills">
      <div class="soft-skills">
        <h4>Soft skills</h4>
        <SoftSkill v-for="skill in softSkills" :key="skill.name" v-bind:skill="skill" />
      </div>
      <h4>Skills to master</h4>
      <div class="stack second-stack">
        <HardSkill v-for="skill in nextSkills" :key="skill.name" v-bind:skill="skill" />
      </div>
    </div>
    <div class="more-button-container">
      <div class="button-wb show-more-skills" @click="showMoreSkillsHandler">{{showMoreBtnText}}</div>
    </div>
  </section>
</template>

<script>
const _ = require("underscore");
import HardSkill from "./skills/hardSkill";
import SoftSkill from "./skills/softSkill";
import Filters from "./filter/filter";

export default {
  name: "Skills",
  components: {
    HardSkill,
    SoftSkill,
    Filters
  },
  props: {
    hardSkills: {
      type: Array
    },
    softSkills: {
      type: Array
    },
    nextSkills: {
      type: Array
    },
    defaultFilter: {
      type: String,
      default: "advanced"
    }
  },
  data() {
    return {
      filters: this.createFilters(),
      activeFilter: this.defaultFilter,
      hSkills: this.filterModel(),
      showMoreSkills: false,
      showMoreBtnText: "Show More"
    };
  },
  methods: {
    createFilters() {
      this.updateFilter(this.defaultFilter);

      return ["all"].concat(
        _.uniq(
          _.map(this.hardSkills, item => {
            return item.level;
          })
        )
      );
    },
    updateFilter(filter) {
      this.activeFilter = filter;
      this.filterModel();
    },
    filterModel() {
      return _.each(this.hardSkills, (item, idx) => {
        item.isHidden =
          this.activeFilter &&
          this.activeFilter !== "all" &&
          item.level !== this.activeFilter
            ? true
            : false;
        item.index = typeof item.index !== "number" ? idx + 1 : item.index + 1;
      });
    },
    showMoreSkillsHandler(e) {
      this.showMoreSkills = !this.showMoreSkills;
      this.showMoreBtnText = this.showMoreSkills ? "Show less" : "Show more";
    }
  }
};
</script>

<style>
.stack {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  padding: 25px 0;
}
.skill {
  width: 25%;
  padding: 30px 0;
}
.skill i {
  font-size: 400%;
}
.more-button-container {
  display: flex;
  justify-content: center;
}
.second-stack {
  padding-top: 0;
}
.second-stack .skill i {
  font-size: 300%;
}
</style>