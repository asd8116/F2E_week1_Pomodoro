<template>
  <div class="check-box">
    <input type="checkbox" name :id="'checkbox' + id" />
    <label class="checkbox_label" :for="'checkbox' + id" :style="{
        width: width + 'px',
        height: height + 'px'
      }">
      <span class="hook" :style="{ fontSize: size + 'px' }">&#10003;</span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      default: "default"
    },
    width: {
      default: 48
    },
    height: {
      default: 48
    },
    size: {
      default: 32
    }
  }
};
</script>

<style lang="scss" scoped>
.check-box {
  input {
    display: none;
    &:checked {
      ~ label.checkbox_label .hook {
        opacity: 1;
      }
    }
  }
  label.checkbox_label {
    display: block;
    border: 2px solid $primary-color;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 1rem;
    .hook {
      position: absolute;
      opacity: 0;
      box-sizing: border-box;
      background: transparent;
      color: $primary-color;
      line-height: 1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: border-color 0.2s ease-in-out, opacity 0.2s ease-in-out;
    }
  }
}
</style> 