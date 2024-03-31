<script setup lang="ts">
const selectedSauce = ref('tomato');
const doughs = [
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
];
const selectedDough = ref(1);

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
        <Ingredient />
    </div>
</template>
