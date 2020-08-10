<template>
  <div class="progress-container">
    <div>
      <p>{{skill.name}}</p>
    </div>
    <div>
      <div class="progress">
        <div class="progress-bar" :style="{ 'width': skill.progress + '%' }"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SoftSkills",
  props: {
    skill: {
      type: Object,
      required: true
    }
  },
};
</script>

<style scoped>
.soft-skills {
  padding: 20px 5%;
}
.progress-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.progress-container > div {
  width: 50%;
  padding: 13px 3%;
  text-align: right;
}
.progress {
  margin: 0 auto;
  width: 100%;
  height: 5px;
  /* padding: 4px; */
  background: rgba(0, 0, 0, 0.25);
  /* border-radius: 6px; */
  box-shadow: inset 0 1px 2px  rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08);
}

.progress-bar {
  height: 5px;
	/* background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.05)); */
  transition: 0.4s linear;
  background-color: black;
  transition-property: width;
  /* box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.25), inset 0 1px rgba(255, 255, 255, 0.1); */
}

</style>