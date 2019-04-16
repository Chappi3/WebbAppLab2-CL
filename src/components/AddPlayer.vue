<template>
  <div>
    <form @submit="addPlayer">
      <input type="text" v-model="name" name="name" placeholder="Name of player...">
      <input type="submit" value="Add" class="btn">
    </form>
  </div>
</template>

<script>
export default {
  name: "AddPlayer",
  data() {
    return {
      name: ""
    };
  },
  methods: {
    addPlayer(e) {
      e.preventDefault();
      const newPlayer = {
        name: this.name
      };
      this.$emit("add-player", newPlayer);

      this.name = "";
    }
  }
};
</script>

<style>
</style>
