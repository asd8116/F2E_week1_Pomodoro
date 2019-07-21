<template>
  <div class="p__home__left_todo_panel">
    <div class="todo_panel">
      <todo-input></todo-input>
      <time-panel></time-panel>
      <todo-list></todo-list>
    </div>
  </div>
</template>

<script>
import TodoInput from "./TodoInput.vue";
import TimePanel from "./TimePanel.vue";
import TodoList from "./TodoList.vue";

export default {
  components: {
    TodoInput,
    TimePanel,
    TodoList
  }
};
</script>

<style lang="scss" scoped>
.p__home__left_todo_panel {
  background-color: $second-color;
  width: calc(100% - #{$menu-panel-width});
  padding-left: 85px;
  .todo_panel {
    width: 445px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 48px 0;
  }
}
</style>