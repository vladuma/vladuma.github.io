<template>
    <div class="button-wb" v-bind:class="{ active: filter == activeFilter}" v-bind:data-filter-val="filter" v-on:click="$emit('updateFilter', filter)">{{filter}}</div>
</template>

<script>
export default {
  name: 'Filters',
  props: {
    filter: {
      type: String,
      required: true
    },
    activeFilter: {
        type: String,
        required: true,
    },
  },
}
</script>