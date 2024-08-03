<script setup></script>
<template>
  <div class="container">
    <img class="close" src="../icons/carbon_close.svg" alt="Close" />
    <div class="skeleton"></div>
  </div>
</template>
<style scoped>
.container {
  position: relative;
  width: 100%;
  padding: 18px 68px 18px 18px;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  background-color: var(--color-background-mute);
}

.close {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  margin: 4px;

  margin-left: auto;
}

.close:hover {
  cursor: pointer;
}

.skeleton {
  border-radius: 12px;
  width: 100%;
  height: 72px;
  background: linear-gradient(90deg, #3c3c3c 0%, #444444 51.04%, #333333 100%);
  animation: gradient-animation 2s ease infinite;
  background-size: 200% 200%;
}
</style>
