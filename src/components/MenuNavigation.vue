<template>
  <nav class="navigation" :class="{ active: menuOpen }">
    <ul>
      <li class="list">
        <router-link to="/"
          ><span class="icon"><ion-icon name="home-outline"></ion-icon></span
          ><span class="title">Streams</span></router-link
        >
      </li>
      <li class="list">
        <router-link to="/Schedule"
          ><span class="icon"
            ><ion-icon name="calendar-outline"></ion-icon></span
          ><span class="title">Schedule</span></router-link
        >
      </li>
      <li class="list">
        <router-link to="/Insights"
          ><span class="icon"><ion-icon name="pulse-outline"></ion-icon></span
          ><span class="title">Insights</span></router-link
        >
      </li>
      <li class="list">
        <router-link to="/Support"
          ><span class="icon"><ion-icon name="medkit-outline"></ion-icon></span
          ><span class="title">Support</span></router-link
        >
      </li>
      <li class="list">
        <router-link to="/Account"
          ><span class="icon"><ion-icon name="person-outline"></ion-icon></span
          ><span class="title">Account</span></router-link
        >
      </li>
    </ul>
  </nav>
  <div
    class="toggle"
    :class="{ active: menuOpen }"
    @click="toggleMenu(menuOpen)"
  >
    <ion-icon name="menu-outline" class="open"></ion-icon>
    <ion-icon name="close-outline" class="close"></ion-icon>
  </div>
  <router-view />
</template>

<script lang="ts">
import { mapActions, mapGetters } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuNavigation",
  data() {
    return {
      active: false,
    };
  },
  methods: {
    ...mapActions(["toggleMenuOpen"]),
    toggleMenu(active: boolean) {
      this.toggleMenuOpen(!active);
    },
  },
  computed: {
    ...mapGetters({ menuOpen: "getMenuOpenStatus" }),
  },
});
</script>

<style lang="scss" scoped>
.navigation {
  position: fixed;
  top: 20px;
  left: 20px;
  bottom: 20px;
  width: 60px;
  border-radius: 10px;
  box-sizing: initial;
  border-left: 5px solid #00a891;
  background: #00a891;
  transition: width 0.5s;
  overflow-x: hidden;

  &.active {
    width: 140px;
  }

  ul {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding-left: 10px;
    padding-top: 60px;

    .list {
      position: relative;
      list-style: none;
      width: 100%;

      a {
        position: relative;
        display: block;
        width: 100%;
        display: flex;
        text-decoration: none;
        color: #fff;
        height: 40px;

        &.router-link-exact-active {
          background: #eaeef2;
          color: #333;
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
        }

        .icon {
          position: relative;
          display: block;
          min-width: 40px;
          height: 40px;
          line-height: 54px;
          text-align: center;

          ion-icon {
            font-size: 1.5em;
          }
        }

        .title {
          position: relative;
          display: block;
          padding-left: 10px;
          height: 40px;
          line-height: 50px;
          white-space: normal;
          font-weight: 600;
        }
      }
    }
  }
}

.toggle {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background: #00a891;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-content: center;

  ion-icon {
    position: absolute;
    font-size: 40px;
    display: none;

    &.open {
      display: block;
      color: #fff;
    }

    &.close {
      display: none;
      color: #00a891;
    }
  }
}

.toggle.active {
  background: #e6f6f4;
  border: 1px solid #00a891;
  ion-icon {
    &.open {
      display: none;
    }
    &.close {
      display: block;
    }
  }
}
</style>
