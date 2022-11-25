<template>
  <kinesis-container class="kinesis-container">
    <div class="left side">
      <kinesis-element class="kinesis-element stripes" :strength="20">
        <img src="/images/hero/illustrations/3.svg" />
      </kinesis-element>
      <kinesis-element class="kinesis-element ble" :strength="60">
        <img src="/images/hero/illustrations/6.svg" />
      </kinesis-element>
      <kinesis-element class="kinesis-element waves" :strength="40">
        <img src="/images/hero/illustrations/4.svg" />
      </kinesis-element>
    </div>
    <div class="right side">
      <kinesis-element class="kinesis-element mniam" :strength="10">
        <img src="/images/hero/illustrations/5.svg" />
      </kinesis-element>
      <kinesis-element class="kinesis-element stripes" :strength="100">
        <img src="/images/hero/illustrations/1.svg" />
      </kinesis-element>
      <kinesis-element class="kinesis-element circle" :strength="40">
        <img src="/images/hero/illustrations/2.svg" />
      </kinesis-element>
    </div>
  </kinesis-container>
</template>

<style lang="scss" scoped>
.kinesis-container {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 75vw;
  height: 100vh;
  display: flex;
  padding-top: 150px;

  .side {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;

    &.left {
      .kinesis-element.stripes {
        margin-right: auto;
        margin-bottom: 20%;

        img {
          width: 13vmin;
        }
      }
      .kinesis-element.ble {
        img {
          width: 25vmin;
        }
      }

      .kinesis-element.waves {
        margin-right: auto;
        margin-left: 40%;
        margin-top: 10%;

        img {
          width: 20vmin;
        }
      }
    }

    &.right {
      .kinesis-element.mniam {
        margin-left: 60%;
        margin-bottom: 20%;

        img {
          width: 21vmin;
        }
      }
      .kinesis-element.stripes {
        margin-left: 90%;
        margin-bottom: 20%;

        img {
          width: 13vmin;
        }
      }
      .kinesis-element.circle {
        margin-left: 60%;

        img {
          width: 10vmin;
        }
      }
    }
  }
}
</style>
