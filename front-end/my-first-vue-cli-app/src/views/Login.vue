<template>
  <div class="login">
    <Header/>
    <div class="contain">
        <h1> Se connecter </h1>
    </div>
    <div class="contain">
        <p>Connectez-vous pour publier de nouveaux Posts</p>
    </div>
    <div class="form">
        <label for="emailLogin">Adresse Email</label>
        <input type="text" placeholder="Adresse mail" name="email" id="emailLogin"/> 
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'Login',
  components: {
    Header
  }
}
</script>

<style lang="scss">



</style> 
