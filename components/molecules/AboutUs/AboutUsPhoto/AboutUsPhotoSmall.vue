<script setup>
const emit = defineEmits(["photo-number"]);

const togglePhoto = (numberOfPhoto) => {
  emit("photo-number", numberOfPhoto);
  console.log(numberOfPhoto);
};
</script>
<template>
  <div>
    <AtomsAboutUsPhoto
      v-for="photo in [...Array(3).keys()]"
      :photoNumber="photo + 1"
      @which-photo="togglePhoto"
    />
    <!-- <AtomsAboutUsPhoto photoNumber="1" @which-photo="togglePhoto"/>
        <AtomsAboutUsPhoto photoNumber="2" @which-photo="togglePhoto"/>
        <AtomsAboutUsPhoto photoNumber="3" @which-photo="togglePhoto"/> -->
  </div>
</template>
<style lang="scss" scoped>
div {
  display: flex;
  width: 100%;
  height: auto;
  gap: 20px;

  @media (min-width: 900px) {
    gap: 50px;
    // height: 150px;
    width: 90%;
  }

  @media (min-width: 1300px) {
    width: 70%;
  }
}
</style>
