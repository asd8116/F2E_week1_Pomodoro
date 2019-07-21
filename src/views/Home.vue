<template>
  <div class="p__home">
    <left-todo-panel></left-todo-panel>
    <right-menu-panel></right-menu-panel>
  </div>
</template>

<script>
import LeftTodoPanel from "@/components/home/LeftTodoPanel.vue";
import RightMenuPanel from "@/components/home/RightMenuPanel.vue";

export default {
  components: {
    LeftTodoPanel,
    RightMenuPanel
  }
};
</script>

<style lang="scss">
.p__home {
  width: 100%;
  height: 100%;
  display: flex;
}
</style>
