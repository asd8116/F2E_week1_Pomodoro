<template>
  <div class="p__home__right_menu_panel">
    <div class="menu-bar">
      <div class="icon_list">
        <router-link to="todolist" class="menu_link">
          <i class="material-icons">list</i>
        </router-link>
        <router-link to="analytics" class="menu_link">
          <i class="material-icons">assessment</i>
        </router-link>
        <router-link to="ringtones" class="menu_link">
          <i class="material-icons">library_music</i>
        </router-link>
      </div>
      <div class="menu-title">POMODORO</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.p__home__right_menu_panel {
  width: $menu-panel-width;
  .menu-bar {
    padding: 48px 0;
    height: 100%;
    position: absolute;
    right: 85px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .icon_list {
    display: flex;
    flex-direction: column;
    .menu_link {
      margin-bottom: 48px;
    }
    .menu_link i {
      font-size: 36px;
      width: 36px;
      height: 36px;
      color: $second-color;
    }
  }
  .menu-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: $second-color;
    writing-mode: vertical-lr;
  }
}
</style>