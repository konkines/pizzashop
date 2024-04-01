<template>
    <div class="flex ing">
        <img
            :src="`_nuxt/assets/svg/${ingredient.image}`"
            :alt="ingredient.name"
            class="ing__image"
        />
        <div class="ing__ctrl">
            <div>{{ ingredient.name }}</div>
            <div class="flex gap-2 items-center ing__ctrl__btns">
                <button
                    @click="counter--"
                    :disabled="counter === 0"
                    class="ing__ctrl__btns-minus text-white p-2"
                >
                    <IconsMinus />
                </button>
                {{ counter }}
                <button
                    @click="counter++"
                    :disabled="counter === 3"
                    class="ing__ctrl__btns-plus text-white p-2"
                >
                    <IconsPlus />
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps(['ingredient']);
// const selectedIngredients = defineModel('selectedIngredients');
const counter = ref(0);
</script>

<style lang="scss">
.ing {
    &__image {
        height: 32px;
        width: 32px;
    }
    &__ctrl {
        &__btns {
            &-minus {
                // height: 16px;
                // width: 16px;
                border-radius: 50%;
                background-color: $green-primary;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            &-plus {
                border-radius: 50%;
                background-color: $green-primary;
            }
        }
    }
}
</style>
