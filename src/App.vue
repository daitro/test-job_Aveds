<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    const getUserLS = JSON.parse(localStorage.getItem("user"));
    this.$store.dispatch("logIn", getUserLS);
  },
};
</script>

<style lang="scss">
#app {
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");

  font-family: "Montserrat", sans-serif;
}
</style>
