<script setup lang="ts">
const { id, slug } = useRoute().params
</script>

<template>
    <div>#{{ id }} - /projects/{{ slug }}</div>
</template>
