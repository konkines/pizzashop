<script setup lang="ts">
defineProps(['sauces']);
const selectedSauce = defineModel('selectedSauce');
</script>
<template>
    <div class="shadow-inner flex justify-between items-center mt-1.5">
        Основной соус:
        <IngredientSauceRadio
            v-for="el in sauces"
            :key="el.id"
            :sauce="el"
            v-model:selectedSauce="selectedSauce"
        />
    </div>
</template>
