<script lang="ts" setup>
const { links } = useAppConfig()
</script>

<template>
    <div class="flex flex-col h-screen overflow-hidden">
        <header
            class="flex-none w-full flex items-center justify-between px-2 lg:px-4 lg:py-2 border-b border-neutral-300 dark:border-neutral-600"
        >
            <NuxtLink
                to="/"
                class="text-xs uppercase tracking-wider text-[var(--ui-primary)] dark:text-[var(--ui-primary)] p-2 hover:ring hover:ring-[var(--ui-primary)]/50 dark:hover:ring-[var(--ui-primary)]/50"
            >
                ZSP
            </NuxtLink>
            <AppNavigationDesktop :links />
            <ThemePicker class="ml-auto lg:ml-0" />
            <AppNavigationMobile :links />
        </header>

        <UMain
            class="flex-1 min-h-0 overflow-y-auto grid place-items-start xs:place-items-center"
        >
            <slot />
        </UMain>

        <footer
            class="flex-none w-full bg-[var(--ui-neutral)] p-2 lg:px-4 border-t border-neutral-300 dark:border-neutral-600"
        >
            <div class="flex items-center justify-between">
                <p
                    class="text-xs tracking-wider text-[var(--color-neutral-950)] dark:text-[var(--color-neutral-300)]"
                >
                    &#169; [<NuxtTime
                        :datetime="Date.now()"
                        year="numeric"
                        locale="hu-HU"
                    />] Zselló Péter
                </p>
            </div>
        </footer>
    </div>
</template>
