<script setup lang="ts">
defineProps(['sauce']);
const selectedSauce = defineModel('selectedSauce');
</script>
<template>
    <div class="m-2">
        <label class="sauce inline-flex items-center">
            <input
                type="radio"
                :value="sauce.id"
                v-model="selectedSauce"
                class="sauce-input"
            />
            <div class="ml-2">
                <div :for="sauce.id">
                    {{ sauce.name }}
                </div>
            </div>
        </label>
    </div>
</template>
<style lang="scss">
.sauce {
    &-input {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        height: 20px;
        width: 20px;
        border: 1px solid $green-flat;
        border-radius: 50%;
        outline: none;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
            background-color: $green-flat;
            position: relative;
            &::before {
                content: '';
                display: block;
                width: 10px;
                height: 10px;
                background-color: #fff;
                border-radius: 50%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }

        &:checked {
            background-color: $green-primary;
            position: relative;
            &::before {
                content: '';
                display: block;
                width: 10px;
                height: 10px;
                background-color: #fff;
                border-radius: 50%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }
}
</style>
