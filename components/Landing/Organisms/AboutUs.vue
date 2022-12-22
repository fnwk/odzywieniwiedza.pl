<script setup>
const photoNumber = ref(1);
const togglePhoto = (num) => {
  photoNumber.value = num;
};
</script>

<template>
  <section id="o_nas">
    <div class="top-container">
      <LandingAtomsAboutUsPhoto
        :photo-number="photoNumber"
        :isBigPhoto="true"
      />
      <LandingMoleculesAboutUsDescription />
    </div>
    <LandingMoleculesAboutUsPhotoSmall @photo-number="togglePhoto" />
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
