<script setup>
import LocationBlock from '@/components/location/LocationBlock.vue'
import InventoryBlock from '@/components/inventory/InventoryBlock.vue'
import BottomMenuBlock from '@/components/menu/BottomMenuBlock.vue'
</script>

<template>
  <main>
    <div class="information">
      <LocationBlock />
      <InventoryBlock />
    </div>
    <BottomMenuBlock />
  </main>
</template>

<style scoped>
main {
  max-width: 1080px;
  margin: 0 auto;
}

.information {
  display: flex;
  gap: 24px;
  margin: 30px auto;
}
</style>
