<template>
  <div class="reciprocal-panel">
    <div class="inner-circle">
      <div class="play-btn">
        <i class="material-icons">play_circle_filled</i>
        <div class="dot"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.reciprocal-panel {
  width: 540px;
  height: 540px;
  border: 4px solid $text-color;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  .inner-circle {
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background-color: $text-color;
    display: flex;
    justify-content: center;
    align-items: center;
    .play-btn {
      color: $second-color;
      width: 6rem;
      height: 6rem;
      i {
        font-size: 6.5rem;
        cursor: pointer;
      }
      .dot {
        width: 14px;
        height: 14px;
        background-color: $second-color;
        cursor: pointer;
        position: absolute;
        bottom: 0;
        right: 0;
        transform: translateX(100%);
      }
    }
  }
}
</style>