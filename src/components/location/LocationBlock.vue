<script setup>
import { useLocationStore } from '@/stores/location'
import LocationSkeleton from '@/components/skeletons/LocationSkeleton.vue'
const store = useLocationStore()
</script>

<template>
  <div class="wrapper">
    <img
      :src="store.locations[store.curLocation].imageUrl"
      alt="Location Image"
      class="location-img"
    />

    <LocationSkeleton v-if="true" />
    <div v-else></div>
  </div>
</template>

<style scoped>
.wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18px 14px 24px;
  gap: 20px;
  background-color: var(--color-background-mute);
  border: 1px solid var(--color-border);
  border-radius: 12px;
}

.location-img {
  width: 100%;
}
</style>
