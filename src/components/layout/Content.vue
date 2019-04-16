<template>
  <div class="content">
    <Players/>
  </div>
</template>

<script>
import Players from "../Players.vue";

export default {
  name: "Content",
  components: {
    Players
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  margin: auto;
  width: 100%;
  min-height: calc(100vh - 150px);
  text-align: center;
}
</style>
