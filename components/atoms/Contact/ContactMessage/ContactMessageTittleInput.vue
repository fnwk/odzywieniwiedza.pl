<template>
    <input type="text" placeholder="Temat wiadomości..." />
</template>
<style lang="scss" scoped>
$black: #353535;
$yellow: #FECE2F;

input{
    color: #353535;
    outline-color: $yellow; //TODO: change
    width: 20vw;
    height: calc(100% - .8vw);
    padding: .5vw 0;
    border: 3px solid $black;
    border-radius: 6px;
    transition: all 0.2s ease-in-out;

    &:focus{
        border: 3px solid $yellow;
        height: calc(100% - .4vw);
        padding: 0.2vw 0;
        width: 23vw;
        font-size: 16px;
        padding-left: 3%;
       }
}
</style>