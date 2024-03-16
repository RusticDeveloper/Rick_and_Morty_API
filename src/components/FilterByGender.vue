<template>
   <div class="filter">
    <div class="item" @click="filter('')">
      All
    </div>
    <div class="item" @click="filter('Male')">
      Male
    </div>
    <div class="item" @click="filter('Female')">
      Female
    </div>
    <div class="item" @click="filter('Genderless')">
      Genderless
    </div>
    <div class="item" @click="filter('unknown')">
      Unknown
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore()

const filter = ((gender) => {
  store.dispatch('filterByGender', gender)
})
</script>

<style  scoped>
.filter{
  display: flex;
  justify-content: space-between;
}
.filter>div{
  flex: 0 1;
  border: .3em ridge #fff;
  border-radius: 15%;
  padding: 1% 3%;
  cursor: grab;
  
}

</style>