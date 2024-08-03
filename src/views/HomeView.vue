<script setup>
import LocationBlock from '@/components/location/LocationBlock.vue'
import InventoryBlock from '@/components/inventory/InventoryBlock.vue'
</script>

<template>
  <main>
    <div class="invormation">
      <LocationBlock />
      <InventoryBlock />
    </div>
  </main>
</template>

<style scoped>
.invormation {
  display: flex;
  gap: 24px;
  max-width: 1080px;
  margin: 30px auto;
}
</style>
