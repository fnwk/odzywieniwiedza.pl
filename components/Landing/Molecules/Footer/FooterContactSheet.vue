<template>
  <div class="sheet">
    <LandingMoleculesFooterMail
      title="Kontakt"
      mail="kontakt@odzywieniwiedza.pl"
    />
    <LandingMoleculesFooterMail
      title="Współprace i Partnerstwa"
      mail="biznes@odzywieniwiedza.pl"
    />
  </div>
</template>
<style lang="scss" scoped>
.sheet {
  width: 85%;
  height: 100%;
  padding: 5% 10%;
  background-color: #fffefa;
  background-size: 10px 10px;
  background-image: repeating-linear-gradient(
    0deg,
    #f3f2ee,
    #f3f2ee 1px,
    #fffefa 1px,
    #fffefa
  );
  margin: auto;
  filter: drop-shadow(-10px 10px 0px #000000);
  transform: translateY(2%);

  @media (min-width: 900px) {
    width: 65%;
  }
}
</style>
