<template>
  <section class="s-hero target-section">
    <div class="row hero-content">
      <div class="column large-full">
        <h1 v-html="intro"></h1>

        <ul class="hero-social">
          <li :key="social.id" v-for="social in socialMedia">
            <a :href="social.url" :title="social.title">{{social.text}}</a>
          </li>
        </ul>
        <!-- end hero-social -->
      </div>
    </div>
    <!-- end hero-content -->
    <div class="hero-scroll">
      <a href="#styles" class="scroll-link smoothscroll">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M12 24l-8-9h6v-15h4v15h6z"></path>
        </svg>
      </a>
    </div>
    <!-- end hero-scroll -->
  </section>
  <!-- end s-hero -->
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  name: "Hero",
  data() {
    return {
      socialMedia: [
        {
          id: uuidv4(),
          title: "Github",
          text: "Github",
          url: "https://github.com/AmineHamrouni"
        },
        {
          id: uuidv4(),
          title: "Facebook",
          text: "Facebook",
          url: "https://www.facebook.com/hamrouniamin"
        }
      ],
      intro: `Hello, I'm Amine,
          <br>a Front-end developer
          <br>based in Paris.`
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* ===================================================================
 * # hero
 *
 * ------------------------------------------------------------------- */
.s-hero {
  width: 100%;
  height: 100vh;
  min-height: 82rem;
  overflow: hidden;
  background-color: transparent;
  position: relative;
  background-image: url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2');
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

.s-hero::before {
  display: block;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: -webkit-gradient(linear, left top, right top, color-stop(10%, black), to(rgba(0, 0, 0, 0)));
  background: linear-gradient(90deg, black 10%, rgba(0, 0, 0, 0) 100%);
  opacity: .8;
}

.no-js .s-hero {
  background: #ffffff;
}

.hero-content {
  height: 100%;
  max-width: 1400px;
  -ms-flex-align: end;
  -webkit-box-align: end;
  align-items: flex-end;
  padding-top: 20vh;
  padding-bottom: 14vh;
  position: relative;
}

.hero-content h1 {
  font-size: 7rem;
  font-weight: 400;
  line-height: 1.257;
  padding-right: 3.2rem;
  margin-top: 0;
  color: #ffffff;
  position: relative;
}

.hero-content h1::before {
  content: "";
  display: block;
  height: 2px;
  width: 8rem;
  background-color: #f9861a;
  position: absolute;
  left: -10.8rem;
  top: .55em;
}

/* -------------------------------------------------------------------
 * ## hero social
 * ------------------------------------------------------------------- */
.hero-social {
  list-style: none;
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-flow: row wrap;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-flow: row wrap;
  font-family: "Gothic A1", sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 3.2rem;
  text-transform: uppercase;
  letter-spacing: .5em;
  margin-top: 8rem;
  margin-left: .4rem;
  margin-bottom: 0;
  position: relative;
}

.hero-social a {
  color: #ffffff;
}

.hero-social a:hover,
.hero-social a:focus,
.hero-social a:active {
  color: #f9861a;
}

.hero-social li {
  padding-left: 0;
}

.hero-social li::after {
  content: '/';
  color: rgba(255, 255, 255, 0.1);
  margin-left: 0rem;
  margin-right: 1rem;
}

.hero-social li:last-child::after {
  display: none;
}

/* -------------------------------------------------------------------
 * ## hero scroll
 * ------------------------------------------------------------------- */
.hero-scroll {
  position: absolute;
  right: 8rem;
  bottom: 10rem;
}

.hero-scroll::after {
  content: "";
  display: block;
  width: 2px;
  height: 7rem;
  background-color: white;
  -webkit-transform: translate3d(50%, 0, 0);
  transform: translate3d(50%, 0, 0);
  position: absolute;
  right: 50%;
  bottom: -10rem;
}

.hero-scroll .scroll-link,
.hero-scroll .scroll-link svg path {
  -webkit-transition: all .3s ease-in-out;
  transition: all .3s ease-in-out;
}

.hero-scroll .scroll-link {
  text-decoration: none;
  border: 0 none;
  display: block;
  height: 6.4rem;
  width: 6.4rem;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  margin: 0;
  position: relative;
}

.hero-scroll .scroll-link svg {
  height: 1.2rem;
  width: 1.2rem;
  position: absolute;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
  left: 50%;
  top: 50%;
}

.hero-scroll .scroll-link svg path {
  fill: #ffffff;
}

.hero-scroll .scroll-link:hover,
.hero-scroll .scroll-link:focus {
  background-color: #f9861a;
}

/* -------------------------------------------------------------------
 * ## animate intro content
 * ------------------------------------------------------------------- */
html.ss-preload .hero-content {
  opacity: 0;
}

html.ss-loaded .hero-content {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -webkit-animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

html.no-csstransitions .hero-content {
  opacity: 1;
}

/* ------------------------------------------------------------------- 
 * ## animations
 * ------------------------------------------------------------------- */

/* fade in */
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    visibility: visible;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

}

@keyframes fadeIn {
  from {
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    visibility: visible;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

}

/* fade in left */
@-webkit-keyframes fadeInLeft {
  from {
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    visibility: visible;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    visibility: visible;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

}

/* fade out */
@-webkit-keyframes fadeOut {
  from {
    opacity: 1;
    visibility: visible;
  }

  to {
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

}

@keyframes fadeOut {
  from {
    opacity: 1;
    visibility: visible;
  }

  to {
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

}

/* ------------------------------------------------------------------- 
 * responsive:
 * hero
 * ------------------------------------------------------------------- */
@media screen and (max-width:1800px) {
  .hero-content h1 {
    font-size: 6.3rem;
  }

  .hero-content h1::before {
    width: 6rem;
    left: -8.8rem;
  }

}

@media screen and (max-width:1700px) {
  .hero-content {
    max-width: 1200px;
  }

}

@media screen and (max-width:1500px) {
  .hero-content {
    max-width: 1000px;
  }

}

@media screen and (max-width:1300px) {
  .hero-content {
    max-width: 1200px;
  }

  .hero-content h1 {
    font-size: 6rem;
    padding-top: 3.2rem;
  }

  .hero-content h1::before {
    width: 6rem;
    top: 0;
    left: 0;
  }

}

@media screen and (max-width:1200px) {
  .hero-scroll {
    right: 6rem;
  }

  .hero-scroll::after {
    height: 8rem;
  }

  .hero-scroll .scroll-link {
    height: 6rem;
    width: 6rem;
  }

}

@media screen and (max-width:1000px) {
  .hero-content h1 {
    font-size: 5.6rem;
  }

  .hero-social {
    font-size: 1.1rem;
  }

}

@media screen and (max-width:800px) {
  .hero-content h1 {
    font-size: 4.8rem;
  }

  .hero-social {
    padding-right: 7.2rem;
  }

  .hero-scroll {
    right: 3.6rem;
  }

  .hero-scroll .scroll-link {
    height: 5.2rem;
    width: 5.2rem;
  }

}

@media screen and (max-width:600px) {
  .hero-content h1 {
    font-size: 4.6rem;
  }

  .hero-content h1 br {
    display: none;
  }

  .hero-social {
    font-size: 1rem;
  }

  .hero-scroll {
    right: 2.4rem;
  }

}

@media screen and (max-width:500px) {
  .hero-content h1 {
    font-size: 4.4rem;
    padding-right: 0;
  }

}

@media screen and (max-width:400px) {
  .hero-content h1 {
    font-size: 4rem;
  }

}

@media screen and (max-width:360px) {
  .hero-content h1 {
    font-size: 3.8rem;
  }

}

</style>
