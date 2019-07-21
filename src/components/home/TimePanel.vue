<template>
  <div class="time_panel">
    <div class="now_mession_title">
      <check-box></check-box>

      <div class="now_mession">
        <div class="title">the First thing to do today</div>
        <div class="dot"></div>
      </div>
    </div>
    <div class="time_reciprocal">25:00</div>
  </div>
</template>

<script>
import CheckBox from "../CheckBox.vue";

export default {
  components: {
    CheckBox
  }
};
</script>

<style lang="scss" scoped>
.time_panel {
  width: 100%;
  .now_mession_title {
    display: flex;
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