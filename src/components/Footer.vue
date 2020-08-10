<template>
    <footer>
      <div class="footer-icons">
        <a href="https://www.linkedin.com/in/vlad-duma-22406181/" target="_blank" title="LinkedIn">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/vladuma" target="_blank" title="GitHub">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://stackoverflow.com/users/10726367/vladuma" target="_blank" title="StackOverflow">
          <i class="fab fa-stack-overflow"></i>
        </a>
        <!-- <a href="https://www.facebook.com/vlad.duma" target="_blank">
          <i class="fab fa-facebook-f"></i>
        </a> -->
        <a href="https://t.me/VlaDuma" target="_blank" title="Telegram">
          <i class="fab fa-telegram-plane"></i>
        </a>
        <a href="https://codepen.io/vladuma" target="_blank" title="Codepen">
          <i class="fab fa-codepen"></i>
        </a>
      </div>
      <!-- <div class="footer-links">
        <a href="./files/Vlad Duma%20CV%20-%202019.pdf">Resume</a>
        <span> | </span>
        <a href="./files/Certificate_for_Front-End_Web_Developer.pdf">Web Academy cert</a>
      </div> -->
    </footer>
</template>

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