<template>
  <div>
    <form class="addPlayerForm" @submit="addPlayer">
      <input type="text" v-model="name" name="name" placeholder="Name of player...">
      <input type="submit" value="Add" class="btn" v-if="maxPlayers">
      <!-- v-if:players.lenght<4 -->
    </form>
  </div>
</template>

<script>
import uuid from "uuid";

export default {
  name: "AddPlayer",
  props: ["players"],
  data: {
    maxPlayers: true
  },
  data() {
    return {
      name: ""
    };
  },
  methods: {
    addPlayer(e) {
      e.preventDefault();
      const newPlayer = {
        id: uuid.v4(),
        name: this.name
      };
      this.$emit("add-player", newPlayer);

      this.name = "";
    }
  }
};
</script>

<style>
.addPlayerForm {
  margin: auto;
  margin-top: 1rem;
}
</style>
