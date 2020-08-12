<template>
  <section id="experience">
      <h3>Experience</h3>
    <div id="experience-timeline">
        <Timeline :data="experience" :nowYear="nowYear" :nowMth="nowMth" :minYear="minYear"  :minMth="minMth" />
    </div>
  </section>
</template>

<script>
import Timeline from './experience/timeline'
import dayjs from 'dayjs';

export default {
    name: "Experience",
    props: {
        experience: {
            type: Array,
            required: true,
        }
    },
    components: {
        Timeline
    },
    data() {
        return {
            nowYear: dayjs().$y,
            nowMth: dayjs().$M,
            minYear: this.experience.reduce((min, el) => { min = dayjs(el.startDate).$y < min ? dayjs(el.startDate).$y : min; return min }, dayjs().$y),
            minMth: this.experience.reduce((min, el) => { min = dayjs(el.startDate).$M < min ? dayjs(el.startDate).$M : min; return min }, dayjs().$M)
        }
    },
}
</script>

<style>

</style>