<template>
<div class="home-contener">
  <div class="filActualite">
    <Header />
  </div>
  <main>
    <PostingPanel />


  </main>
  </div>

</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import PostingPanel from '@/components/PostingPanel.vue'

export default {
  name: 'Home',
  components: {
    Header,
    PostingPanel,
  },
  methods: {
    setup() {
      if(localStorage.getItem("token") == null){
      window.location.href = "http://localhost:8080/login"; 
      }

      function getScrollHeight(elm) {
      var savedValue = elm.value; 
      elm.value = "";
      elm._baseScrollHeight = elm.scrollHeight; 
      elm.value = savedValue;
      }

      function onExpandableTextareaInput({ target: elm }) {
      if(!elm.classList.contains("autoExpand") || !elm.nodeName == "TEXTAREA") return; 
      var minRows = elm.getAttribute("data-min-rows") | 0, rows;
      !elm._baseScrollHeight && getScrollHeight(elm);
      elm.rows = minRows; 
      rows = Math.ceil((elm.scrollHeight - elm._baseScrollHeight) / 25); 
      elm.rows = minRows + rows; 
    }
    document.addEventListener("input", onExpandableTextareaInput);

    return{
      Header, 
      PostingPanel, 
      getScrollHeight, 
      onExpandableTextareaInput, 
    }
    }
  }
}
</script>
