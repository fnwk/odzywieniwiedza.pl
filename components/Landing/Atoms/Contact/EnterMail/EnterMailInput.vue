<script setup>
const changeAuthor = inject("changeAuthor");

const AuthorHandler = (e) => {
  changeAuthor(e.target.value);
};
</script>

<template>
  <input type="email" @input="AuthorHandler" required />
</template>

<style lang="scss" scoped>
input {
  height: 30px;
  width: 80%;
  color: #353535;
  border: 3px solid variables.$black;
  border-radius: 6px;
  margin-inline: 10%;
  margin-bottom: 30px;
}
</style>
