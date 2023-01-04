<template>
  <div>
    <LandingAtomsFooterIcon
      iconName="Facebook"
      link="https://www.facebook.com/profile.php?id=100088616385385"
    />
    <LandingAtomsFooterIcon
      iconName="Instagram"
      link="https://www.instagram.com/odzywieniwiedza/"
    />
    <LandingAtomsFooterIcon
      iconName="Twitter"
      link="https://twitter.com/odzywieniwiedza"
    />
  </div>
</template>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  padding-block: 10px;
  padding-right: 20px;
  padding-left: 20px;
  border-right: 1px solid black;

  @media (min-width: 900px) {
    padding-block: 10px;
    padding-right: 40px;
    padding-left: 50px;
  }
}
</style>
