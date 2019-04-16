<template>
  <div class="main">
    <h1>Players</h1>
    <div class="names">
      <label for="Name">Name:</label>
      <input type="text" name="Name" required>
      <button type="submit">Add Player</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Players"
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
