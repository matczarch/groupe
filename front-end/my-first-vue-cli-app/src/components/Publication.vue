<template> 
<div class="contener-publication">
    <div class="bloc" v-for="post in state.posts" :key="post.id">
        <div class="publication">
            <div class="idLine">
                <img class="avatar" :src="post.avatar" alt="" />
                <span class="firstName">{{ post.fistname }} </span>
                <span class="lastName">{{ post.lastname }} </span>
                <span v-if="post.isAdmin">&nbsp;(admin) </span>

                <div class="adminLine"> 
                    <button class="report" type="button" v-if="state.user.isAdmin == 0 && post.user.id !== state.user.id" @click="reportPost(post.id)">
                        <i class="material-icons">report</i>

                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

</template> 

<script>

</script>