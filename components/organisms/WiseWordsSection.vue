<template>
    <section>
        <MoleculesWiseWordsMessage />
        <AtomsWiseWordsIllustration />
    </section>
</template>
<style lang="scss" scoped>
section{
    width: 100%;
    position: relative;
    div{
        @media(min-width: 900px){
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
}
</style>