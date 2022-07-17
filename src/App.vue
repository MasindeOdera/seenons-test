<template>
  <div class="menu">
    <MenuNavigation />
    <a href="https://seenons.com/en/home/" target="_blank" class="logo">
      <img src="./assets/seenons-logo.svg" />
    </a>
    <!-- <MenuNavigation /> -->
  </div>
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
  background: #eaeef2;
}

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // color: #2c3e50;
}

.menu {
  .logo {
    position: absolute;
    top: 20px;
    left: 24px;
    bottom: 20px;
    width: 40px;
    height: 40px;
    padding-left: 10px;
    padding-top: 10px;

    img {
      width: 40px;
      height: 40px;
    }
  }
}
</style>
