<script setup lang="ts">
import RouterLink from '@/components/UI/RouterLink.vue'
import Heading from '@/components/UI/AppHeading.vue'
import { FormKit } from '@formkit/vue'

defineProps<{
  titulo: string
}>()
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="inicio">Volver</RouterLink>
    </div>
    <Heading>{{ titulo }}</Heading>
    <div class="mx-auto mt-10 bg-white shadow">
      <FormKit type="form">
        <FormKit
          type="text"
          label="nombre"
          placeholder="Nombre del Cliente"
          prefix-icon="add"
          help="Coloca el nombre del cliente que deseas registrar"
          validation="required"
          :validation-messages="{ required: 'El nombre del cliente es obligatorio' }"
          validation-visibility="live"
        />
      </FormKit>
    </div>
  </div>
</template>
