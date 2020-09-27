<template>
    <section id="about">
      <h3>About</h3>
      <div class="about-block">
        <div class="about-avatar">
          <div class="hexagon">
            <div class="hexagon-in1">
              <div class="hexagon-in2">

              </div>
            </div>
          </div>
        </div>

        <div class="about-elements">
          <p>
            I started my IT career as a Marketing Manager for a small trading firm. I was in charge of all IT-related matters starting from email marketing & social media to developing and maintaining webshops and business landing pages. 
            At the same time, I started freelancing as a frontend developer to hone my HTML, CSS, and JavaScript skills. I worked a lot with WordPress and learned a little bit of PHP.
          </p>
          <p>
            Later, I figured out that developing backend logic is also fun, so I started working more on full-stack projects, both as my job and for fun. I advanced a lot in Node.js, AWS, started learning Python and machine learning.
          <p>
            My main specialization is e-commerce, the majority of my professional experience in developing and supporting webshops on various platforms (WooCommerce, OpenCart, Shopify, Kibo, BigCommerce etc.). I am always looking for new knowledge and experience. I am willing to advance to become an eCommerce Solutions Architect.
          </p>
        </div>
      </div>
    </section>  
</template>

<style>
.about-block {
  display: flex;
}
.about-block > div {
  width: 50%;
  height: 100%;
  text-align: left;
}
.about-avatar {
  display: flex;
  justify-content: center;
  padding: 14px 0;
}
.about-avatar > img {
  width: 50%;
}

.hexagon {
    width: 400px;
    height: 200px;
    margin: 0 0 0 -80px;
    overflow: hidden;
    visibility: hidden;
    -webkit-transform: rotate(120deg);
       -moz-transform: rotate(120deg);
        -ms-transform: rotate(120deg);
         -o-transform: rotate(120deg);
            transform: rotate(120deg);
    }
.hexagon-in1 {
    overflow: hidden;
    width: 100%;
    height: 100%;
    -webkit-transform: rotate(-60deg);
       -moz-transform: rotate(-60deg);
        -ms-transform: rotate(-60deg);
         -o-transform: rotate(-60deg);
            transform: rotate(-60deg);
    }
.hexagon-in2 {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 77%;
    background-image: url(../assets/avatar.jpg);
    visibility: visible;
    -webkit-transform: rotate(-60deg);
       -moz-transform: rotate(-60deg);
        -ms-transform: rotate(-60deg);
         -o-transform: rotate(-60deg);
            transform: rotate(-60deg);
}

.about-elements{
  padding: 7px 55px 0 7px;
  
}
.about-elements p {
    margin: 7px 0;
}
</style>