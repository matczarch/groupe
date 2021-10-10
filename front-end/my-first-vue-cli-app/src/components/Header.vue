<template>
    <header>
    <img src="../assets/logo.png" alt="Logo provisoire"/>
        <nav>
        <ul>
            <li v-for="(navItem, index) in navItems" v-bind:key="index"><router-link :to="navItem.link"> {{ navItem.title }}</router-link></li>
        </ul>

        </nav>
        <h2> {{ pageTitle }} </h2>
    </header>
</template>

<script> 
    export default 
    {
        name: "Header",
        components: {}, 
        data(){
            return {
                pageTitle: "", 
                navItems: [{
                    title: "Acceuil", 
                    link: "/",
                },
                {
                    title: "A Propos", 
                    link: "/about",
                },
                {
                    title: "Connexion",
                    link: "/Login",
                }],
                pageSubTitle: "Super Sous-titre", 
            }
        }, 
    }
</script>

<style lang="scss"> 
    header 
    {
        border: 1px solid black;
        ul 
        {
            display:flex;
            height: 5em; 
            width: 10em; 
            justify-content: space-around;
            vertical-align: center; 
            align-items: center; 
            border: 1px solid black; 
            li 
            {
                list-style-type: none;
                border: 1px solid red;
            }
        }
        display: flex;
        justify-content: space-between; 
        img 
        {
            width: 25%;
        }

    }
</style>
