<script setup lang="ts">
const doughs = Object.freeze([
    {
        id: 1,
        name: 'Тонкое',
        image: 'dough-lite.svg',
        description: 'Из твердых сортов пшеницы',
        price: 300,
    },
    {
        id: 2,
        name: 'Толстое',
        image: 'dough-large.svg',
        description: 'Из твердых сортов пшеницы',
        price: 300,
    },
]);
const sauces = Object.freeze([
    {
        id: 1,
        name: 'Томатный',
        price: 50,
    },
    {
        id: 2,
        name: 'Сливочный',
        price: 50,
    },
]);
const ingredients = Object.freeze([
    { id: 1, name: 'Грибы', image: 'filling/mushrooms.svg', price: 33 },
    { id: 2, name: 'Чеддер', image: 'filling/cheddar.svg', price: 42 },
    { id: 3, name: 'Салями', image: 'filling/salami.svg', price: 42 },
    { id: 4, name: 'Ветчина', image: 'filling/ham.svg', price: 42 },
    { id: 5, name: 'Ананас', image: 'filling/ananas.svg', price: 25 },
    { id: 6, name: 'Бекон', image: 'filling/bacon.svg', price: 42 },
    { id: 7, name: 'Лук', image: 'filling/onion.svg', price: 21 },
    { id: 8, name: 'Чили', image: 'filling/chile.svg', price: 21 },
    { id: 9, name: 'Халапеньо', image: 'filling/jalapeno.svg', price: 25 },
    { id: 10, name: 'Маслины', image: 'filling/olives.svg', price: 25 },
    { id: 11, name: 'Томаты', image: 'filling/tomatoes.svg', price: 35 },
    { id: 12, name: 'Лосось', image: 'filling/salmon.svg', price: 50 },
    { id: 13, name: 'Моцарелла', image: 'filling/mozzarella.svg', price: 35 },
    { id: 14, name: 'Пармезан', image: 'filling/parmesan.svg', price: 35 },
    { id: 15, name: 'Блю чиз', image: 'filling/blue_cheese.svg', price: 50 },
]);
const selectedDough = ref(1);
const selectedSauce = ref(1);
const selectedIngredients = ref({});

// const runtimeConfig = useRuntimeConfig();
// const appConfig = useAppConfig();
</script>
<template>
    <div class="px-44">
        <div class="text-3xl font-bold my-3">Конструктор пиццы</div>
        <Dough
            :doughs="doughs"
            v-model:selectedDough="selectedDough"
        />
        <Ingredient
            :sauces="sauces"
            :ingredients="ingredients"
            v-model:selectedSauce="selectedSauce"
            v-model:selectedIngredients="selectedIngredients"
        />
        {{ selectedIngredients }}
    </div>
</template>
