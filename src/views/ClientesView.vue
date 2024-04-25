<script setup lang="ts">
import RouterLink from "@/components/UI/RouterLink.vue";
import Heading from "@/components/UI/AppHeading.vue";
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="agregar-cliente">Agregar Clientes</RouterLink>
    </div>
    <Heading>Listado de Clientes</Heading>
  </div>
</template>
