<script setup>
const photoNumber = ref(1);
const togglePhoto = (num) => {
  photoNumber.value = num;
};
</script>

<template>
  <section>
    <div class="top-container">
      <AtomsAboutUsPhoto :photo-number="photoNumber" :isBigPhoto="true" />
      <MoleculesAboutUsDescription />
    </div>
    <MoleculesAboutUsPhotoSmall @photo-number="togglePhoto" />
  </section>
</template>

<style lang="scss" scoped>
section {
  display: flex;
  position: relative;
  flex-direction: column;
  margin-bottom: 100px;
  padding: 0 7vw;
  margin-block: 50px 200px;

  .top-container {
    display: flex;
    flex-direction: column-reverse;

    div {
      width: 100%;
    }

    @media (min-width: 900px) {
      flex-direction: row;

      div {
        width: 50%;
      }
    }
  }
}
</style>
