<template>
  <div class="home" :class="{ resize: menuOpen }">
    <HelloWorld msg="" />
    <h1>Home screen</h1>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
  },
  computed: {
    ...mapGetters({ menuOpen: "getMenuOpenStatus" }),
  },
});
</script>

<style lang="scss" scoped>
.home {
  text-align: center;
  margin-top: 20px;
  margin-left: 10%;
  width: 80%;
  &.resize {
    margin-left: 20%;
    width: 60%;
  }
}
</style>
