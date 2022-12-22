<template>
  <div class="box">
    <div class="wrapper">
      <LandingAtomsContactEnterMailTitle />
      <LandingAtomsContactEnterMailInput />
      <LandingAtomsContactEnterMailSubmit />
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
    flex-direction: column;
    justify-content: space-around;
    top: 30%;
    width: 70%;
    height: 30%;
    background-color: white;
    border-radius: 8px;
    filter: drop-shadow(-10px 10px 0px #353535);
  }
}
</style>
