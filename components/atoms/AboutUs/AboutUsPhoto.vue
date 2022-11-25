<script setup>
const emit = defineEmits(['which-photo']);
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
  emit('which-photo', props.photoNumber);
};
</script>
<template>
  <img
    class="image"
    @click="whichPhoto"
    :src="`/images/aboutUs/photo${props.photoNumber}.png`"
    :class="{ 'big-photo': props.isBigPhoto }"
  />
  <img src="/images/aboutUs/Rat.svg" class="rat" v-if="props.isBigPhoto" />
</template>
<style lang="scss" scoped>
.rat {
  position: absolute;
  top: 0;
  transform: translateY(-97%);
  z-index: -1;
}

.image {
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
  filter: drop-shadow(22px 22px 0px #fece2f);
  transition: all 0.1s ease-in-out;
  transform: matrix(-1, 0, 0, 1, 0, 0);

  &.big-photo {
    margin-bottom: 70px;
    width: 50%;
    padding-left: 5vmax;
  }
}
</style>
