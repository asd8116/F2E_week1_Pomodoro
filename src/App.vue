<template>
  <div id="app">
    <vue-page-transition name="fade">
      <router-view />
    </vue-page-transition>
  </div>
</template>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  background-color: $primary-color;
}
</style>
