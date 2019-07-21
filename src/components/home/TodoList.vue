<template>
  <div class="todo_list">
    <div class="todo-item" v-for="(item, index) in todoList" :key="index">
      <check-box width="24" height="24" size="16" :id="item.id"></check-box>
      <div class="title">{{ item.title }}</div>
      <div class="play-btn">
        <i class="material-icons">play_circle_outline</i>
      </div>
    </div>
    <div class="more">
      <span @click="redirect">MORE</span>
    </div>
  </div>
</template>

<script>
import CheckBox from "../CheckBox.vue";

export default {
  data() {
    return {
      todoList: [
        {
          id: 1,
          title: "the second thing to do today"
        },
        {
          id: 2,
          title: "the third thing to do today"
        },
        {
          id: 3,
          title: "the forth thing to do today"
        }
      ]
    };
  },
  components: {
    CheckBox
  },
  methods: {
    redirect() {
      this.$router.push({ name: "todolist" });
    }
  }
};
</script>

<style lang="scss" scoped>
.todo_list {
  width: 100%;
  .todo-item {
    width: 100%;
    height: 2rem;
    display: flex;
    border-bottom: 2px solid rgba($primary-color, 0.2);
    align-items: center;
    justify-content: center;
    margin-bottom: 0.5rem;
    .title {
      color: $primary-color;
      font-size: 1rem;
      font-weight: bold;
      text-transform: uppercase;
    }
    .play-btn {
      margin-left: auto;
      cursor: pointer;
      i {
        color: $primary-color;
      }
    }
  }
  .more {
    color: $text-color;
    font-size: 1rem;
    font-weight: bold;
    text-align: right;
    span {
      cursor: pointer;
    }
  }
}
</style>