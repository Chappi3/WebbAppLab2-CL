<template>
  <div class="content" id="app">
    <AddPlayer v-on:add-player="addPlayer"/>
    <Players v-bind:players="players"/>
  </div>
</template>

<script>
import Players from "../Players.vue";
import AddPlayer from "../AddPlayer.vue";

export default {
  name: "Content",
  components: {
    Players,
    AddPlayer
  },
  data() {
    return {
      players: []
    };
  },
  methods: {
    addPlayer(newPlayer) {
      const { name } = newPlayer;
    }
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
