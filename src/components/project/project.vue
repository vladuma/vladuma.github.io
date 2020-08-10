<template>
    <div :data-filter-value="project.type" class="project filter-item" :class="{hidden: project.isHidden || project.hidden}">
        <div class="flip-card">
            <div class="flip-card-inner">
            <div class="flip-card-front">
                <img v-if="project.img" :src="require(`@/assets/${project.img}`)" alt="">
                <h4 v-else class="project-name">{{project.name}}</h4>
            </div>
            <div class="flip-card-back">
                <p>{{project.name}}</p>
                <p>{{project.description}}</p>
                <div class="tags">
                    <span v-for="tag in project.tags" :key="tag" :tag="tag">
                        {{tag}}
                    </span>
                </div>
                <div class="link-container">
                    <a :href="project.link" target="_blank">Link</a>
                    <span v-if="project.git">
                        <span> | </span><a :href="project.git" target="_blank">GitHub</a>
                    </span>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Projects",
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>

</style>