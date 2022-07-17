<template>
  <div class="page-not-found">
    <div class="empty">
      <ion-icon name="warning-sharp"></ion-icon>
      <p class="empty-title h5">This Page was not found</p>
      <p class="empty-subtitle">Click the button to return to Home</p>
      <div class="empty-action">
        <button class="btn btn-primary">
          <router-link to="/">Home</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "PageNotFound",
};
</script>

<style lang="scss">
.page-not-found {
  max-width: 800px;
  margin: auto;
  ion-icon.md.hydrated {
    width: 4em;
    height: 4em;
    color: #00bfa6;
  }
  .btn.btn-primary {
    background: #00a891;
    border-color: #00a891;
    border: 0.05rem solid #00a891;
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
