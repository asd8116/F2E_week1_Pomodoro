<template>
  <div class="time_panel">
    <div class="now_mession_title">
      <div class="check-box">
        <input type="checkbox" name id="now-checkbox" />
        <label class="checkbox_label" for="now-checkbox"></label>
      </div>
      <div class="now_mession">
        <div class="title">the First thing to do today</div>
        <div class="dot"></div>
      </div>
    </div>
    <div class="time_reciprocal">25:00</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.time_panel {
  width: 100%;
  .now_mession_title {
    display: flex;
    .check-box input {
      display: none;
      &:checked {
        ~ label.checkbox_label::after {
          opacity: 1;
        }
      }
    }
    label.checkbox_label {
      display: block;
      width: 48px;
      height: 48px;
      border: 2px solid $primary-color;
      border-radius: 50%;
      cursor: pointer;
      margin-right: 1rem;
      &:after {
        position: absolute;
        opacity: 0;
        content: "\2713";
        box-sizing: border-box;
        background: transparent;
        color: $primary-color;
        font-size: 2rem;
        line-height: 1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: border-color 0.2s ease-in-out, opacity 0.2s ease-in-out;
      }
    }
    .now_mession {
      .title {
        font-size: 1.5rem;
        font-weight: bold;
        text-transform: uppercase;
      }
      .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: 1px solid $text-color;
        margin-top: 0.5rem;
      }
    }
  }
  .time_reciprocal {
    font-size: 11rem;
    font-weight: bold;
    color: $text-color;
  }
}
</style>