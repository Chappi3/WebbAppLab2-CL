<template>
  <div id="app">
    <Header/>
    <Content/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";
import Content from "./components/layout/Content.vue";
import Footer from "./components/layout/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Content,
    Footer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
