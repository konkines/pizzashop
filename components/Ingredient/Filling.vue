<template>
    <div class="filling shadow-inner">
        <div>Начинка:</div>
        <div class="flex flex-wrap justify-between gap-2">
            <IngredientFillingItem
                v-for="el in ingredients"
                :key="el.id"
                :ingredient="el"
                v-model:selectedIngredients="selectedIngredients"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps(['ingredients']);
const selectedIngredients = defineModel('selectedIngredients');
</script>

<style lang="scss"></style>
