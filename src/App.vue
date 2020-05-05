<template>
  <div id="app">
    <Header/>

    <Hero/>
    <About/>
    <Footer/>
  </div>
</template>

<script>
import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    About,
    Hero,
    Footer
  }
};
</script>

<style>
@import "./assets/styles/base.css";
@import "./assets/styles/main.css";
@import "./assets/styles/vendor.css";

.s-styles {
  padding-top: 16rem;
  padding-bottom: 16rem;
  background-color: #ffffff;
}
</style>