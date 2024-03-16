<template>
    <div>
        <div class="character">
            <h2>{{ character.name }}</h2>
            <div class="img__wrapper">
                <img :src="character.image" :alt="character.name">
            </div>
            <div class="character__stats">
                <span>
                  <b>Especie: </b>{{character.status}}
                </span>
                <span>
                    <b>Estado: </b> {{ character.species }}
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props=defineProps({
        character: {
            type:Object,
            default:null
        }
    })

</script>

<style  scoped>
.img__wrapper{
    overflow: hidden;
}
img{
    transition: all 2s;
}
img:hover{
    transform: skew(10deg) scale(1.2);
}

.character__stats{
    display: flex;
    flex-direction: column;
}
</style>