<template>
  <div class="todo_input">
    <input type="text" placeholder="add a new mission..." />
    <i class="material-icons">add</i>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.todo_input {
  width: 100%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  input {
    outline: none;
    border: none;
    width: 100%;
    height: 56px;
    color: $text-color;
    &::placeholder {
      color: $text-color;
      font-style: italic;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
  i {
    font-size: 24px;
    color: $text-color;
    cursor: pointer;
  }
}
</style>