<template>
    <div>
        <button type="submit">Wyślij</button>
    </div>
</template>
<style lang="scss" scoped>
$yellow: #FECE2F; //delete
$black: #353535;
    div{
        min-width: 30%;
        padding: 0 10px;
        height: 30px;
        display: flex;
        justify-content: center;

        button{
           height: 100%;
           width: 100%;
           background-color: $yellow;
           border-radius: 6px;
           border: 3px $black solid;
        }
    }
</style>