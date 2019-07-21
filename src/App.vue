<template>
  <vue-page-transition id="app" name="fade">
    <router-view />
  </vue-page-transition>
</template>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  background-color: $primary-color;
}
</style>
