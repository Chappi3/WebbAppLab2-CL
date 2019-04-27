<template>
  <div class="content" id="app">
    <div v-if="players.length<1">
      <Players :players="players"/>
      <AddPlayer v-on:add-player="addPlayer" class="addPlayers"/>
    </div>
    <div v-if="players.length>0">
      <GameBoard :players="players"/>
    </div>
  </div>
</template>



<script>
import Players from "../Players.vue";
import AddPlayer from "../AddPlayer.vue";
import GameBoard from "../GameBoard.vue";

export default {
  name: "Content",
  components: {
    Players,
    AddPlayer,
    GameBoard
  },
  data() {
    return {
      players: []
    };
  },
  methods: {
    addPlayer(newPlayer) {
      this.players = [...this.players, newPlayer];
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
.addPlayers {
  margin-bottom: 20px;
}
</style>
