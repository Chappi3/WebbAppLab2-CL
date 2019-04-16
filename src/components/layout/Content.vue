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

<style>
.content {
  margin: auto;
  width: 100%;
  min-height: calc(100vh - 150px);
  text-align: center;
}
</style>
