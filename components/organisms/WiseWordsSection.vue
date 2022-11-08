<template>
    <section>
        <div>
            <AtomsWiseWordsStork />
            <AtomsWiseWordsText />
            <AtomsWiseWordsHedgehog />
        </div>
            <AtomsWiseWordsIllustration />
    </section>
</template>
<style lang="scss" scoped>
section{
    height: 50vh;
    width: 100%;

    div{
        @media(min-width: 900px){
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
}
</style>