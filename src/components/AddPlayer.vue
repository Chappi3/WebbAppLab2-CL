<template>
  <div>
    <form class="addPlayerForm" @submit="addPlayer">
      <input type="text" v-model="name" name="name" placeholder="Namn på spelare...">
      <input type="submit" value="Använd" class="btn">
    </form>
  </div>
</template>

<script>
import uuid from "uuid";
import { mapActions } from "vuex";

export default {
  name: "AddPlayer",
  data() {
    return {
      name: ""
    };
  },
  methods: {
    ...mapActions(["addPlayerToPlayers"]),
    addPlayer(e) {
      e.preventDefault();
      const newPlayer = {
        id: uuid.v4(),
        name: this.name
      };
      this.addPlayerToPlayers(newPlayer);

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
