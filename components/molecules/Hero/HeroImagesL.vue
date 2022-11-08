<script setup></script>

<template>
  <div>
    <img class="illustration stripes" src="/images/hero/illustrations/3.svg" />
    <img class="illustration ble" src="/images/hero/illustrations/6.svg" />
    <img class="illustration waves" src="/images/hero/illustrations/4.svg" />
  </div>
</template>

<style lang="scss" scoped>
div {
  position: relative;
  width: 20%;
  height: 100%;

  .illustration {
    &.stripes {
      width: 13vmin;
      position: absolute;
      top: 0;
      left: 0;
    }

    &.ble {
      width: 25vmin;
      position: absolute;
      top: 60%;
      left: 5%;
    }

    &.waves {
      position: absolute;
      width: 20vmin;
      top: 100%;
      left: 90%;
    }
  }
}
</style>
