<template>
  <input type="text" placeholder="Temat wiadomości..." />
</template>
<style lang="scss" scoped>
input {
  color: #353535;
  outline-color: variables.$yellow;
  width: 20vw;
  height: calc(100% - 0.8vw);
  padding: 0.5vw 0;
  border: 3px solid variables.$black;
  border-radius: 6px;
  transition: all 0.2s ease-in-out;

  &:focus {
    border: 3px solid variables.$yellow;
    height: calc(100% - 0.4vw);
    padding: 0.2vw 0;
    width: 23vw;
    font-size: 16px;
    padding-left: 3%;
  }
}
</style>
