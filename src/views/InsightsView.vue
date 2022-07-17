<template>
  <div class="insights">
    <h1>This is the insights page</h1>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "InsightsView",
  computed: {
    ...mapGetters({ menuOpen: "getMenuOpenStatus" }),
  },
});
</script>

<style lang="scss" scoped>
.insights {
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
