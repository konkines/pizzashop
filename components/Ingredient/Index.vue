<script setup lang="ts">
defineProps(['sauces', 'ingredients']);
const selectedSauce = defineModel('selectedSauce');
const selectedIngredients = defineModel('selectedIngredients');
</script>

<template>
    <div class="panel mt-7">
        <div class="text-1xl font-bold">Выберите ингредиенты</div>
        <IngredientSauce
            :sauces="sauces"
            v-model:selectedSauce="selectedSauce"
        />
        <IngredientFilling
            :ingredients="ingredients"
            v-model:selectedIngredients="selectedIngredients"
        />
    </div>
</template>
