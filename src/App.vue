<script setup>


import StageRoom from './components/StageRoom.vue';
import FilterByGender from './components/FilterByGender.vue';
import FilterByName from './components/FilterByName.vue';

</script>

<template>
  <header>
    <h1>Rick & Morthy characters</h1>
  </header>

  <main>
    <FilterByGender />
    <FilterByName />
    <StageRoom/>
  </main>
</template>

<style scoped>
header{
  display: flex;
  justify-content: center;
}
</style>
