<script setup>
const error = inject("error");
const submit = inject("submit");

const closeError = () => {
  submit();
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
  display: flex;
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  overflow: hidden;
  justify-content: center;

  .wrapper {
    position: absolute;
    top: 30%;
    width: 40vmax;
    height: 15vmax;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: white;
    border-radius: 8px;
    filter: drop-shadow(-10px 10px 0px #353535);

    img {
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
      padding-bottom: 30px;
    }
  }
}
</style>
