<template>
  <div class="main">
    <h1>Players</h1>
    <div :key="player.id" v-for="player in players">
      <Player :player="player"/>
    </div>
  </div>
</template>

<script>
import Player from "./Player.vue";

export default {
  name: "Players",
  props: ["players"],
  components: {
    Player
  }
};
</script>

<style>
.main {
  margin: auto;
  text-align: center;
  width: 50%;
}
.names {
  display: grid;
}
</style>
