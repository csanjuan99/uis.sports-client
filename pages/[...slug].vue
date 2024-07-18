<script setup lang="ts">

// composable
const route = useRoute();

// computed
const slug = computed(() => route.params.slug);
</script>

<template>
  <p>
    {{ route.params.slug}}
  </p>
</template>

<style scoped>

</style>
