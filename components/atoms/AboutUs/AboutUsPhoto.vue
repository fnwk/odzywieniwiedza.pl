<script setup>
const emit = defineEmits(["which-photo"]);
const props = defineProps({
  photoNumber: {
    type: Number,
    required: true,
    default: 1,
  },
  isBigPhoto: {
    type: Boolean,
  },
});

const whichPhoto = () => {
  if (props.isBigPhoto === true) return;
  emit("which-photo", props.photoNumber);
};
</script>
<template>
  <div :class="{ 'big-photo': props.isBigPhoto }">
    <img
      @click="whichPhoto"
      :src="`/images/aboutUs/photo${props.photoNumber}.png`"
    />
  </div>
</template>
<style lang="scss" scoped>
div {
  width: auto;
  position: relative;
  border-radius: 20px;

  &::after {
    content: "";
    position: absolute;
    top: 10%;
    left: 8%;
    background-color: variables.$yellow;
    width: calc(100% - 3%);
    height: calc(100% - 4%);
    z-index: -2;
    border-radius: 10px;
  }

  &.big-photo {
    margin-bottom: 70px;
    min-width: 35vw;
  }

  img {
    width: 100%;
    border-radius: 10px;
  }
}
</style>
