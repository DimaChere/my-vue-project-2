<script setup>
import LocationBlock from '@/components/location/LocationBlock.vue'
import InventoryBlock from '@/components/inventory/InventoryBlock.vue'
</script>

<template>
  <main>
    <LocationBlock />
    <InventoryBlock />
  </main>
</template>

<style scoped>
main {
  display: flex;
  gap: 24px;
  max-width: 1080px;
  margin: 30px auto;
  background-color: red;
}
</style>
