<script setup>
const changeTitle = inject("changeTitle");

const titleHandler = (e) => {
  changeTitle(e.target.value);
};
</script>
<template>
  <div>
    <input
      @input="titleHandler"
      type="text"
      placeholder="Temat wiadomości..."
      required
    />
  </div>
</template>
<style lang="scss" scoped>
div {
  width: 80%;
  margin: 10px 0;
  height: 30px;
  display: flex;
  justify-content: center;
}
input {
  height: 100%;
  padding-left: 8px;
  width: 80%;
  color: #353535;
  outline-color: variables.$yellow;
  border: 3px solid variables.$black;
  border-radius: 6px;
  transition: all 0.2s ease-in-out;

  &:focus {
    width: 100%;
    height: 110%;
    border: 3px solid variables.$yellow;
    padding-left: 15px;
    font-size: 16px;
  }
}
</style>
