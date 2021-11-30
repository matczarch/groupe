<template>
  <div class="bloc post">
    <form
      method="POST"
      @submit.prevent="createNewPost"
      enctype="multipart/form-data"
    >
      <div class="writeLine">
        <img class="avatar" :src="state.user.avatar" alt="" />
        <label for="posting">Poster quelque chose </label>
        <textarea
          id="posting"
          class="autoExpand"
          :placeholder="'Que voulez-vous dire,' + state.user.firstnanme + ' ?'"
          name="post"
          rows="1"
          data-min-rows="1"
          v-model="state.newPost.content"
        >
        </textarea>
        <button>
          <i class="material-icons">Envoyer</i>
        </button>
      </div>
    </form>
    <div class="imagePreview">
      <img id="imagePreview" :src="state.imagePreview" alt="" />
    </div>

    <div class="post__line post__line--media">
      <label
        for="Télécharger une image"
        class="custum-file-upload"
        id="labelImage"
      >
        <i class="material-icons"></i>
      </label>
    </div>
  </div>
</template>

<script></script>
