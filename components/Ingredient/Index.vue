<template>
    <div class="panel mt-7">
        <div class="text-1xl font-bold">Выберите ингредиенты</div>
        <div class="flex">
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
</template>
