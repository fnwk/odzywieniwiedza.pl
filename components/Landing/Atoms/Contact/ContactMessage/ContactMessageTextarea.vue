<script setup>
const changeMessage = inject("changeMessage");

const messageHandler = (e) => {
  changeMessage(e.target.value);
};
</script>

<template>
  <textarea
    @input="messageHandler"
    placeholder="Twoja wiadomość..."
    required
  ></textarea>
</template>
<style lang="scss" scoped>
textarea {
  width: 100%;
  padding: 10px;
  height: calc(100% - 85px);
  border-radius: 6px;
  border: none;
  outline: none;
  resize: none;
}
</style>
