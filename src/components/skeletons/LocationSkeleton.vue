<script></script>

<template>
  <div class="information-skeleton">
    <div class="name-skeleton"></div>
    <div class="description-skeleton">
      <div class="description-text description-text-m"></div>
      <div class="description-text description-text-xxl"></div>
      <div class="description-text description-text-xl"></div>
      <div class="description-text description-text-l"></div>
      <div class="description-text description-text-s"></div>
    </div>
    <div class="description-text description-text-xs"></div>
  </div>
</template>

<style scoped>
.information-skeleton {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  padding: 0 9px;
}

.name-skeleton {
  width: 100%;
  height: 26px;
  background: linear-gradient(90deg, #3c3c3c 0%, #444444 51.04%, #333333 100%);
  border-radius: 8px;
  animation: gradient-animation 2s ease infinite;
  background-size: 200% 200%;
}

.description-skeleton {
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.description-text {
  height: 10px;
  border-radius: 4px;
  background: linear-gradient(90deg, #3c3c3c 0%, #444444 51.04%, #333333 100%);
  animation: gradient-animation 2s ease infinite;
  background-size: 200% 200%;
}

.description-text-xs {
  width: 42%;
}
.description-text-s {
  width: 73%;
}
.description-text-m {
  width: 81%;
}
.description-text-l {
  width: 84%;
}
.description-text-xl {
  width: 89%;
}
.description-text-xxl {
  width: 100%;
}
</style>
