<template>
  <div class="home" :class="{ resize: menuOpen }">
    <HelloWorld msg="" />
    <header>My Streams</header>
    <div>{{ filterStops(data) }}</div>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import driverData from "@/json/data.json";

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
  },
  data() {
    return {
      data: driverData,
    };
  },
  computed: {
    ...mapGetters({ menuOpen: "getMenuOpenStatus" }),
  },
  methods: {
    // Unfortunately I ran out of time.
    // The idea would be to extract what I need for the each component from the json.
    // Then add some shared state to vuex, so that components can share data.
    filterStops(data: object) {
      return this.data.stops;
    },
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
    margin-left: 30%;
    width: 40%;
    @media only screen and (min-width: 600px) {
      margin-left: 20%;
      width: 60%;
    }
  }

  header {
    font-size: 14px;
    font-weight: 600;
    @media only screen and (min-width: 600px) {
      font-size: 24px;
    }
  }
}
</style>
