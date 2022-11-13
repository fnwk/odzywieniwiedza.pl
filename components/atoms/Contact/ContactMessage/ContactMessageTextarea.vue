<template>
    <textarea placeholder="Twoja wiadomość..."></textarea>
</template>
<style lang="scss" scoped>
textarea{
    width: 100%;
    padding: 10px;
    height: 22.5vw;
    border-radius: 6px;
    border: none;
    outline: none;
    resize: none;

    @media(min-width: 1300px){
        height: 23vw;
    }
}
</style>