<template>
  <div class="paginator">
    <button @click="navegarPagina('https://rickandmortyapi.com/api/character/?page=1')" >1</button>
    <p v-if="numeroPagina>3">... </p>
    <button @click="navegarPagina(information.prev)" v-if="information.prev!=null && numeroPagina>2">{{ numeroPagina-1 }}</button>
    <button @click="navegarPagina(pagina)"v-if="numeroPagina>1 && numeroPagina<information.pages">{{numeroPagina}}</button>
    <button @click="navegarPagina(information.next)" v-if="information.next!=null && numeroPagina<information.pages-1">{{parseInt(numeroPagina)+1}}</button>
    <p v-if="numeroPagina<information.pages-2">...</p>
    <button @click="navegarPagina('https://rickandmortyapi.com/api/character/?page='+information.pages)">{{information.pages}} </button>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { ref, computed } from "vue";

const store = useStore();
// two way binding beetwen stage and paginator
const pagina = defineModel();

const information = computed(() => {
  return store.state.information;
});

 const numeroPagina = computed(() => {
  return pagina.value?.split('=')[1];
 });

const navegarPagina=(page)=>{
  pagina.value=page;
  store.dispatch("getCharacters",page);
}

</script>

<style  scoped>
.paginator{
  display: flex;
  justify-content: center;
  gap: 50px;
}
.paginator>button{
  background-color: #6c7a89;
  border-radius: 80%;
  color: white;
  border: none;
  padding: 9px;
  font-size: 14pt;
  cursor: pointer;
  transition: .3s ease all;
}
.paginator>button:hover{
  border: .2em solid  #fbc233;
  background-color: #6c7a8998;
}
</style>

<!-- todo: subir el proyecto a github -->