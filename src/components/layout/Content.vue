<template>
  <div class="content" id="app">
    <div v-if="getPlayers.length<1">
      <AddPlayer class="addPlayers"/>
    </div>
    <div v-if="getPlayers.length>0">
      <GameBoard v-if="getRound<16"/>
    </div>
    <div v-if="getRound>15">
      <div>
        <h1>Dina poäng: {{ getScore }}</h1>
      </div>
      <div>
        <button @click="resetGame">Spela igen!</button>
      </div>
    </div>
  </div>
</template>



<script>
import Players from "../Players.vue";
import AddPlayer from "../AddPlayer.vue";
import GameBoard from "../GameBoard.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "Content",
  components: {
    Players,
    AddPlayer,
    GameBoard
  },
  computed: mapGetters(["getPlayers", "getRound", "getScore"]),
  methods: {
    ...mapActions(["emptyPlayers", "resetRound", "resetScore"]),
    nextRound() {
      this.increaseRound();
    },
    setScore(recievedScore) {
      this.setScore(recievedScore);
    },
    resetGame() {
      this.emptyPlayers();
      this.resetRound();
      this.resetScore();
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
