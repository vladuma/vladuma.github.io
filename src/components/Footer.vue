<template>
    <footer>
      <div class="footer-icons">
        <div v-for="media in social_media" :key="media.link">
          <a :href="media.link" target="_blank" :title="media.name">
            <i :class="media.icon"></i>
          </a>
        </div>
      </div>
    </footer>
</template>

<script>
  export default {
    name: 'Footer',
    props: {
      social_media: {
        type: Array,
        required: true,
      }
    }
  };
</script>

<style>
    footer{
        min-height: 100px;
        background-color: black;
    }
    footer .footer-icons {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        min-height: 100px;
        font-size: 200%;
    }
    footer .footer-links {
        text-align: center;
        height: 21px;
    }
    footer .footer-icons a, .footer-links a, .footer-links span {
        color: grey;
    }
    footer .footer-icons a:hover, .footer-links a:hover {
        color: #ffff00;
    }
</style>
