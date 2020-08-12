<template>
    <div id="print">
      {{hardSkills}}
      {{softSkills}}
      {{experience}}
      {{social_media}}
      {{contacts}}
    </div>
</template>
<script>
export default {
  name: 'Print',
  props: {
      experience: {
          type: Array,
          required: true,
      },
      hardSkills: {
        type: Array,
        required: true,
      },
      softSkills: {
        type: Array,
        required: true,
      },
      social_media: {
        type: Array,
        required: true,
      },
      contacts: {
        type: Array,
        required: true,
      },
  }
}
</script>
<style>
  @media print {
    #print {
      display: block;
    }
    header, footer, section {
      display: none;
    }
  }
  @media screen {
    #print {
      display: none
    }
  }
</style>