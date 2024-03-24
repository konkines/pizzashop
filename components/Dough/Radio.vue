<script setup lang="ts">
defineProps(['dough']);
const model = defineModel();
</script>
<template>
    <div>
        <label>
            <input
                type="radio"
                :value="dough.id"
                v-model="model"
                class="hidden"
            />
            <img
                :src="`_nuxt/assets/svg/dough/${dough.image}`"
                :alt="dough.name"
            />
            <div :for="dough.id">{{ dough.name }}</div>
            <div :for="dough.id">{{ dough.description }}</div>
        </label>
    </div>
</template>
