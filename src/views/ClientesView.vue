<script setup lang="ts">
import RouterLink from '@/components/UI/RouterLink.vue'
import Heading from '@/components/UI/AppHeading.vue'

defineProps<{
  titulo: string
}>()
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="agregar-cliente">Agregar Clientes</RouterLink>
    </div>
    <Heading>{{ titulo }}</Heading>
  </div>
</template>
