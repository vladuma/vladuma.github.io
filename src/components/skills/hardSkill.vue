<template>
  <div
    class="skill filter-item"
    :data-filter-value="skill.level"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    :class="{hidden: skill.isHidden}"
  >
    <i :class="[skill.icon, {colored: hover}]" :title="skill.name"></i>
  </div>
</template>

<script>
export default {
  name: "HardSkills",
  props: {
    skill: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      hover: false
    };
  }
};
</script>