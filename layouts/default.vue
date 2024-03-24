<template>
    <div>
        <div
            class="bg-green-400 w-full absolute inset-x-0 top-0 h-12 flex justify-between items-center pl-2"
        >
            <div>
                <NuxtLink to="/"><IconsHome class="h-10 w-10" /></NuxtLink>
            </div>
            <div class="flex justify-between w-44 pr-2">
                <NuxtLink to="/cart"> <IconsCart class="h-10 w-10" /></NuxtLink>
                <NuxtLink
                    to="/profile"
                    class="flex items-center"
                    ><IconsLock class="h-10 w-10" />Войти</NuxtLink
                >
            </div>
        </div>
        <div class="h-12"></div>
        <slot />
        <div
            class="bg-green-400 w-full absolute inset-x-0 bottom-0 h-6 text-slate-500"
        >
            made on nuxt3
        </div>
    </div>
</template>
