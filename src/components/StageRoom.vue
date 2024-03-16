<template>
  <PaginatorComponent   v-model="pageUrl" />
  <div class="characters">
    <div class="character__info" v-for="(character,index) in characters" :key="character.id" >  
      <CardComponent :character="character"  @click="abrirModal(index)" />
    </div>
    <CharacterModal :location="localizacion" :character="personaje" v-model="modalVisible" />    
  </div>
  <PaginatorComponent   v-model="pageUrl" />
</template>

<script setup>
import { useStore } from "vuex";
import { onMounted, computed, ref } from "vue";

import CardComponent from "./CardComponent.vue";
import CharacterModal from "./CharacterModal.vue";
import PaginatorComponent from "./PaginatorComponent.vue";
const store = useStore();
const personaje=ref(null)
const pageUrl=ref("https://rickandmortyapi.com/api/character/?page=1" )
const localizacion=computed(() => {
  return store.state.location;
});
const characters = computed(() => {
  return store.state.charactersFilter;
});



onMounted(() => {
  store.dispatch("getCharacters");
});

const modalVisible = ref(false);

const abrirModal = (id) => {
  modalVisible.value = !modalVisible.value;
  personaje.value=characters.value[id];
  store.dispatch("getLocations",characters.value[id].location.url);
};

const cerrarModal = () => {
  modalVisible.value = false;
};



</script>

<style scoped>

.characters{
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 5px;
  padding: 0px;
}

</style>
