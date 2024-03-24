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
        <div class="text-3xl font-bold">Конструктор пиццы</div>
        <Dough
            :doughs="doughs"
            v-model="selectedDough"
        />{{ selectedDough }}
        <div>
            <div>Выберите ингредиенты</div>
            <div>
                <div>Основной соус</div>
                <input
                    type="radio"
                    id="tomato"
                    value="tomato"
                    v-model="selectedSauce"
                />
                <label for="tomato">Томатный</label>
                <input
                    type="radio"
                    id="cream"
                    value="cream"
                    v-model="selectedSauce"
                />
                <label for="cream">Сливочный</label>
            </div>
        </div>
    </div>
</template>
