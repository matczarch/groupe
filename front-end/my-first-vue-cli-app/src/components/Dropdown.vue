<template>
  <div class="dropdown-contener">
    <!-- Cliquez sur l'avatar pour faire apparaître un menu déroulant -->
    <div class="dropdown">
      <img
        @click="dropdown()"
        @keypress="dropdown()"
        class="avatar dropdown__btn"
        id="headeravatar"
        :src="state.avatarPreview"
        alt="menu"
        tabindex="0"
      />
    </div>
    <div id="myDropdown" class="dropdown__content">
      <div class="dropdown__content__test">
        <p>Paramètre</p>
        <label
          for="téléchargement_photo_profil"
          class="custum-file-upload"
          id="labelChangeAvatar"
          tabindex="-1"
        >
          <span> Changer la photo de profil</span>
          <input
            type="file"
            id="télécharger_photo_de_profil"
            name="avatar"
            accept=".jpg .png .jpeg"
            taindex="0"
            @change="avatarChange"
          />
        </label>
        <a href="#" tabindex="0" @click="logout">Déconnexion</a>
        <a href="#" tabindex="0" @click="deleteAccount">Supprimer le compte</a>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, onMounted } from "vue";
import axios from "axios";
export default {
  name: "Dropdown",
  setup() {
    const state = reactive({
      avatar: null,
      avatarPreview: null,
    });
    onMounted(() => {
      fetch("http://localhost:3000/api/user/getone", {
        method: "get",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: "Bearer " + localStorage.token,
        },
      })
        .then((reponse) => reponse.json())
        .then((data) => {
          state.avatarPreview = data.avatar;
        })
        .catch((err) => console.log("Fetch Error :-S", err));
    });

    function dropdown() {
      document.getElementById("myDropdown").classList.toggle("Voir");
    }

    function avatarChange(e) {
      let file = e.target.files[0];
      state.avatarPreview = URL.createObjectURL(file);
      state.avatar = file;

      const formData = new FormData();
      formData.append("avatar", state.avatar);

      const config = {
        header: {
          Authorization: "Bearer " + localStorage.token,
          "Content-Type": "multipart/form-data",
        },
      };

      axios
        .post("http://localhost:3000/api/user/changeavatar", formData, config)
        .then(() => location.reload())
        .catch((errors) => console.log(errors));
    }

    return {
      state,
      dropdown,
      avatarChange,
    };
  },

  methods: {
      deleteAccount(){
                if (
        confirm(
          "Vous vous apprêtez à supprimer votre compte de manière iréversible, voulez vous contunuer ?"
        )
      ) {
        fetch("http://localhost:3000/api/user/deleteaccount", {
          method: "delete",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            Authorization: "Bearer " + localStorage.token,
          },
        })
          .then(() => this.logout())
          .catch((err) => console.log("Fetch Error :-S", err));
      }
      }, 
      logout(){
            localStorage.removeItem("token"),
            (window.location.href = "http://localhost:8080/login");
      }
  }
};

</script>

<style lang="scss"></style>
