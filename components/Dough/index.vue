<script setup lang="ts">
defineProps(['doughs']);
const selectedDough = defineModel('selectedDough');
</script>

<template>
    <div class="panel">
        <div class="text-1xl font-bold">Выберите тесто</div>
        <div class="shadow-inner flex justify-between items-center mt-1.5">
            <DoughRadio
                v-for="el in doughs"
                :key="el.id"
                :dough="el"
                v-model:selectedDough="selectedDough"
            />
        </div>
    </div>
</template>
