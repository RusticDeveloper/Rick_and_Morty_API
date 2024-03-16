<template>
  <div class="search">
    <input
      type="text"
      placeholder="🔍 Buscar por nombre"
      v-model="name"
      @keyup="filter()"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const name = ref("");
const store = useStore()
const filter=()=>{
    store.dispatch(
        'filterByName',name.value)
}
</script>

<style scoped>
.search{
  display: flex;
  justify-content: center;
  padding: 2%;
}
.search>input{
  color: aqua;
  font: italic bold 1.5rem Arial,San-serif;
  
  background: none;
  border: none;
}
</style>
