<template>
  <div class="footer">
    <footer>
      <p>Made by Tonny Frisk</p>
      <a href="https://vuejs.org/">
        <img alt="Vue logo" src="../../assets/logo.png" width="50px" height="50px">
      </a>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
.footer {
  display: grid;
  background-image: linear-gradient(to right, #202020, #3b3b3b, #202020);
  padding: 1rem;
  width: 100%;
  text-align: center;
}
</style>
