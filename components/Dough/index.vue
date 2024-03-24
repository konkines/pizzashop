<script setup lang="ts">
defineProps(['doughs']);
const model = defineModel();
</script>

<template>
    <div class="shadow-lg panel">
        <div class="text-1xl font-bold">Выберите тесто</div>
        <div class="shadow-inner">
            <DoughRadio
                v-for="el in doughs"
                :key="el.id"
                :dough="el"
                v-model="model"
            />
        </div>
    </div>
</template>
