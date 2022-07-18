<template>
  <div class="page-not-found" :class="{ resize: menuOpen }">
    <div class="empty">
      <ion-icon name="warning-sharp"></ion-icon>
      <h5>This Page was not found</h5>
      <h4>Click the button to return to Home</h4>
      <div class="empty-action">
        <button class="return">
          <router-link to="/">Home</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageNotFound",
  computed: {
    ...mapGetters({ menuOpen: "getMenuOpenStatus" }),
  },
});
</script>

<style lang="scss">
.page-not-found {
  text-align: center;
  margin-top: 20%;
  margin-left: 10%;
  width: 80%;
  &.resize {
    margin-left: 20%;
    width: 60%;
  }
  ion-icon.md.hydrated {
    width: 4em;
    height: 4em;
    color: #00bfa6;
  }
  .return {
    background: #00a891;
    border-color: #00a891;
    border: 0.05rem solid #00a891;
    border: none;
    border-radius: 10px;
    padding: 6px;
    a {
      color: #fff;
      outline: none;
      text-decoration: none;
      font-weight: bold;
      font-size: 1em;
      letter-spacing: 0.05em;
    }
  }
}
</style>
