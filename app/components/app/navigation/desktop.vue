<script setup lang="ts">
defineProps<{
    links: {
        to: string
        label: string
    }[]
}>()

const route = useRoute()
</script>

<template>
    <ul class="lg:flex lg:gap-6 xl:gap-8 hidden">
        <li v-for="link in links" :key="link.to">
            <NuxtLink
                :to="link.to"
                class="uppercase text-sm ml-4 text-(--ui-text-highlighted)/70 font-light tracking-wider hover:text-[var(--ui-primary)] transition-all font-serif"
                :active-class="
                    route.path === link.to ? 'text-[var(--ui-primary)]' : ''
                "
            >
                {{ link.label }}
            </NuxtLink>
        </li>
    </ul>
</template>
