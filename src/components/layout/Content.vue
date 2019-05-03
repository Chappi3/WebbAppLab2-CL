<template>
  <div class="content" id="app">
    <div v-if="players.length<1">
      <Players :players="players"/>
      <AddPlayer @add-player="addPlayer" class="addPlayers"/>
    </div>
    <div v-if="players.length>0">
      <GameBoard
        :players="players"
        :round="round"
        @next-round="nextRound"
        v-if="round<16"
        @transfer-score="getScore"
      />
    </div>
    <div v-if="round>15">
      <div>
        <h1>Dina poäng: {{ score }}</h1>
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

export default {
  name: "Content",
  components: {
    Players,
    AddPlayer,
    GameBoard
  },
  data() {
    return {
      players: [],
      round: 1,
      score: 0
    };
  },
  methods: {
    addPlayer(newPlayer) {
      this.players = [...this.players, newPlayer];
    },
    nextRound() {
      this.round++;
    },
    getScore(recievedScore) {
      this.score = recievedScore;
    },
    resetGame() {
      this.players = [];
      this.round = 1;
      this.score = 0;
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
