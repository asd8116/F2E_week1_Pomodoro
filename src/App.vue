<template>
  <vue-page-transition id="app" name="fade">
    <router-view />
  </vue-page-transition>
</template>

<style lang="scss">
#app {
  width: 100%;
  max-width: $media-max-size;
  height: 100%;
  background-color: $primary-color;
  margin: 0 auto;
}
</style>
