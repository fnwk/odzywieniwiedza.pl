<template>
    <div>
        <button type="submit">Wyślij</button>
    </div>
</template>
<style lang="scss" scoped>
$yellow: #FECE2F; //delete
$black: #353535;
    div{
        height: calc(100% - .8vw);
        width: 15%;
        display: flex;
        align-items: center;

        button{
           height: 100%;
           width: 100%;
           background-color: $yellow;
           border-radius: 6px;
           border: 3px $black solid;
        }
    }
</style>