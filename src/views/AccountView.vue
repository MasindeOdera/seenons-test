<template>
  <div class="account" :class="{ resize: menuOpen }">
    <header>My Account</header>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AccountView",
  computed: {
    ...mapGetters({ menuOpen: "getMenuOpenStatus" }),
  },
});
</script>

<style lang="scss" scoped>
.account {
  text-align: center;
  margin-top: 20px;
  margin-left: 10%;
  width: 80%;
  &.resize {
    margin-left: 20%;
    width: 60%;
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
