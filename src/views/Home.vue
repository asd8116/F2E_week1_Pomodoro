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
  mounted() {
    document.body.style.background = "linear-gradient(90deg, rgba(255,237,247,1) 29%, rgba(0,49,100,1) 73%)";
  },
  destroyed() {
    console.log("destroyed");
    document.body.style.background = "";
  },
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
