<script setup lang="ts">
defineProps(['doughs']);
const model = defineModel('selectedDough');
</script>

<template>
    <div class="panel">
        <div class="text-1xl font-bold">Выберите тесто</div>
        <div class="shadow-inner flex justify-between mt-1.5">
            <DoughRadio
                v-for="el in doughs"
                :key="el.id"
                :dough="el"
                v-model:selectedDough="model"
            />
        </div>
    </div>
</template>
