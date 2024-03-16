<template>
  <div class="modal" v-if="isOpen">
    <div class="modal-content">
      <span @click="CloseModal" class="close">&times;</span>

      <div class="character">
        <div class="character__info">
          <img :src="character.image" :alt="character.name" />
          <h2>{{ character.name }}</h2>
        </div>
        <div class="information">
          <hr />
          <h3>Información:</h3>
          <span> <b>Especie: </b>{{ character.status }} </span>
          <span> <b>Estado: </b> {{ character.species }} </span>
          <hr />
          <h3>Ultima Localización conocida:</h3>
          <span> <b>Nombre: </b>{{ location.name }} </span>
          <span> <b>Dimension: </b> {{ location.dimension }} </span>
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { defineModel } from "vue";
// accediendo a los props
const props = defineProps({
  character: {
    type: Object,
  },
  location: {
    type: Object,
  },
});
// two way binding con el valor enviado deessde el padre
const isOpen = defineModel();

// cerrar el modal
const CloseModal = () => {
  isOpen.value = false;
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  color: black;
}

.close{
  font: bolder 3em  Arial, sans-serif;
  float: right;
  color: red;
}
img{
  width: 100%;
  border-radius: 30px;  
  border: 10px ridge #ffd700;
}
.character__info {
  display: inline-block;
  margin-bottom: .5em;
}
.information {
  display: flex;
  flex-direction: column;
}
.information>span{
  align-self: last baseline; 
}
h3, hr{
  margin: 2%;
}


</style>
