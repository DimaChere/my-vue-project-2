<script></script>

<template>
  <div class="information-skeleton">
    <div class="name-skeleton"></div>
    <div class="description-skeleton">
      <div class="description-text description-text-big"></div>
      <div class="description-text description-text-big"></div>
      <div class="description-text description-text-big"></div>
      <div class="description-text description-text-medium"></div>
      <div class="description-text description-text-small"></div>
    </div>
  </div>
</template>

<style scoped>
.information-skeleton {
  display: grid;

  flex-direction: column;
  align-items: center;
}

.name-skeleton {
  width: 100%;
  height: 30px;
  background: linear-gradient(90deg, #3c3c3c 0%, #444444 51.04%, #333333 100%);
  border-radius: 8px;
}

.description-skeleton {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.description-text {
  height: 10px;
  border-radius: 4px;
  background: linear-gradient(90deg, #3c3c3c 0%, #444444 51.04%, #333333 100%);
}

.description-text-big {
  width: 100%;
}

.description-text-medium {
  width: 85%;
}

.description-text-small {
  width: 37%;
}
</style>
