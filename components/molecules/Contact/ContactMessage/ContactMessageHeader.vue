<template>
    <div>
        <img src="images/contact/messageMenu.svg" />
    </div>
</template>
<style lang="scss" scoped>
$yellow: #FECE2F;
div{
    display: flex;
    align-items: center;
    justify-content: right;
    width: 100%;
    height: 2vw;
    background-color: $yellow;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom: black 3px solid;

    @media(min-width: 1300px){
        height: 1.5vw;
    }
    img{
        padding-right: 1%;
    }
}

</style>