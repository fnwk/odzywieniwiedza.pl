<script setup>
const emit = defineEmits(["clicked"]);

const clicked = () => {
  emit("clicked");
};
</script>
<template>
  <div class="title">
    <LandingAtomsContactMessageTittleIcons />
    <LandingAtomsContactMessageTittleInput />
    <LandingAtomsContactMessageTittleSend @clicked="clicked" />
  </div>
</template>
<style lang="scss" scoped>
$black: #353535;
div.title {
  display: flex;
  padding: 0 3%;
  align-items: center;
  border-bottom: $black 3px solid;
}
</style>
