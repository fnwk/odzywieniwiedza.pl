<script setup>
const error = inject("error");
const close = inject("submit");

const closeError = () => {
  close();
};
</script>

<template>
  <div class="box">
    <div class="wrapper">
      <img @click="closeError" src="/images/icons/close.svg" alt="error" />
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  display: none;
  display: flex;
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.5);

  overflow: hidden;
  justify-content: center;

  .wrapper {
    position: absolute;
    top: 30%;
    width: 40vmax;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: white;
    border-radius: 8px;
    filter: drop-shadow(-10px 10px 0px #353535);

    img {
      position: absolute;
      top: 10px;
      right: 5px;
      margin-left: auto;
      margin-right: 10px;
      width: 32px;
      height: 32px;
    }

    p {
      text-align: center;
      font-size: 1.5rem;
      font-weight: 600;
      color: #f44336;
      padding-block: 10vmin;
    }
  }
}
</style>
