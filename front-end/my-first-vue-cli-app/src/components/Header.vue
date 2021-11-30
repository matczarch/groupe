<template>
    <header>
    <Dropdown />
    </header>
</template>

<script> 
    import Dropdown from './Dropdown'; 

    export default {
        name: 'Header', 
        components: {Dropdown}, 
        setup(){
            return{
                Dropdown, 
            }
        }
    }
</script>

<style lang="scss"> 
</style>
