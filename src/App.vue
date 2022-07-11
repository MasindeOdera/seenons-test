<template>
  <MenuNavigation />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuNavigation from "@/components/MenuNavigation.vue";

export default defineComponent({
  name: "App",
  components: {
    MenuNavigation,
  },
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  min-height: 100vh;
  background: #fff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
