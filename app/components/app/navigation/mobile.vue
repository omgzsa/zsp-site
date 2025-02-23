<script lang="ts" setup>
defineProps<{
    links: {
        to: string
        label: string
    }[]
}>()

const router = useRouter()
const route = useRoute()
const open = ref(false)

watch(
    () => route.path,
    () => {
        open.value = false
    },
)
</script>

<template>
    <div class="lg:hidden py-2 px-2">
        <USlideover
            id="mobile-navigation"
            v-model:open="open"
            close-icon="i-heroicons-arrow-right"
            aria-describedby="mobile-navigation"
            :ui="{
                header: 'relative',
                close: 'top-1/2 right-4 transform -translate-y-1/2 mt-4',
                content: 'divide-y-0',
            }"
        >
            <UButton
                color="primary"
                variant="ghost"
                aria-label="mobile-navigation-menu-button"
                icon="i-heroicons-bars-3-bottom-left"
            />

            <template #body>
                <div
                    class="flex flex-col justify-start gap-y-4"
                    aria-describedby="mobile-navigation-links"
                >
                    <NuxtLink
                        v-for="link in links"
                        :key="link.to"
                        :to="link.to"
                        class="font-serif uppercase text-base ml-4 text-(--ui-text-highlighted) font-light tracking-wider hover:text-[var(--ui-primary)] transition-all"
                        :active-class="
                            route.path === link.to
                                ? 'text-[var(--ui-primary)]'
                                : ''
                        "
                    >
                        {{ link.label }}
                    </NuxtLink>
                </div>
            </template>
        </USlideover>
    </div>
</template>
