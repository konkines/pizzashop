<script setup lang="ts">
defineProps(['dough']);
const model = defineModel('selectedDough');
</script>
<template>
    <div class="m-2">
        <label class="dough inline-flex">
            <input
                type="radio"
                :value="dough.id"
                v-model="model"
                class="dough-input hidden"
            />
            <img
                :src="`_nuxt/assets/svg/dough/${dough.image}`"
                :alt="dough.name"
                class="dough-input__image"
            />
            <div class="ml-2">
                <div
                    :for="dough.id"
                    class="font-bold"
                >
                    {{ dough.name }}
                </div>
                <div :for="dough.id">{{ dough.description }}</div>
            </div>
        </label>
    </div>
</template>
<style lang="scss">
.dough {
    cursor: pointer;
    img {
        width: 44px;
        height: 44px;
        transition: 0.3s;
        border-radius: 50%;
    }
    &:hover {
        .dough-input__image {
            box-shadow: $box-shadow-green-primary;
        }
    }
    &-input {
        &:checked + &__image {
            box-shadow: $box-shadow-green-primary-selected;
        }
    }
}
</style>
