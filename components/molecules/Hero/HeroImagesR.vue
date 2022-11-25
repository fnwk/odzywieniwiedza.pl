<script setup>
import { KinesisContainer, KinesisElement } from 'vue-kinesis';
</script>
<template>
  <kinesis-container class="kinesis-container">
    <div class="parent">
      <kinesis-element :strength="10">
        <img
          class="illustration mniam"
          src="/images/hero/illustrations/5.svg"
        />
      </kinesis-element>
      <kinesis-element :strength="30">
        <img
          class="illustration stripes"
          src="/images/hero/illustrations/1.svg"
        />
      </kinesis-element>
      <kinesis-element :strength="20">
        <img
          class="illustration waves"
          src="/images/hero/illustrations/2.svg"
        />
      </kinesis-element>
    </div>
  </kinesis-container>
</template>

<style lang="scss" scoped>
.kinesis-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: 150px;
  padding-bottom: 10%;
  padding-right: 10%;
  padding-left: 80%;

  .parent {
    position: relative;
    width: 100%;
    height: 100%;

    .illustration {
      &.stripes {
        width: 13vmin;

        top: 0;
        left: 0;
      }

      &.mniam {
        width: 25vmin;

        top: 60%;
        left: 5%;
      }

      &.waves {
        width: 20vmin;
        top: 100%;
        left: 90%;
      }
    }
  }
}
</style>
