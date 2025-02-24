<script setup lang="ts">
//
</script>

<template>
    <UContainer as="section">
        <h1 class="text-2xl font-bold mb-12">Projects</h1>
        <div v-for="(item, index) in 5" :key="index">
            <NuxtLink
                :to="`/projects/${index}-${item}`"
                class="hover:text-(--ui-primary)"
            >
                Project #{{ index + 1 }}
            </NuxtLink>
        </div>
    </UContainer>
</template>
