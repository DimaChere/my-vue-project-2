<script setup>
import { useInventoryStore } from '@/stores/inventory'
import InventoryItemSkeleton from '@/components/skeletons/InventoryItemSkeleton.vue'
import { ref } from 'vue'
const store = useInventoryStore()
const items = store.items
const deleteItem = ref(false)
const amount = ref(null)
</script>

<template>
  <div class="container" v-if="store.chosen !== null">
    <div class="close">
      <img src="../icons/carbon_close.svg" alt="Close" @click="store.setChosen(null)" />
    </div>
    <div>
      <img :src="items[store.chosen].imageUrl" alt="" class="item-image" />
    </div>
    <div class="information-block">
      <InventoryItemSkeleton v-if="true" />
      <div v-else>
        <p>{{ items[store.chosen].name }}</p>
        <p>{{ items[store.chosen].description }}</p>
      </div>
    </div>
    <button
      class="delete-button"
      @click="
        () => {
          deleteItem = !deleteItem
        }
      "
    >
      Удалить предмет
    </button>
    <div class="confirm-block" v-if="deleteItem">
      <input type="text" class="amount-input" placeholder="Введите количество" v-model="amount" />
      <div class="confirm-buttons">
        <button
          class="decline-button"
          @click="
            () => {
              deleteItem = !deleteItem
            }
          "
        >
          Отмена
        </button>
        <button class="confirm-button">Подтвердить</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: absolute;
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background-color: var(--color-background-mute);
  border-left: 1px solid var(--color-border);
  text-align: center;
}

.close {
  display: block;
  position: relative;
  margin: 4px;
  margin-left: auto;
}

.close:hover {
  cursor: pointer;
}

.item-image {
  width: 130px;
  padding: 30px 0;
}

.information-block {
  display: grid;
  grid-template-rows: auto auto;
  padding: 16px 4px 24px;
  margin: 0 15px;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.delete-button {
  margin: 18px 15px;
  padding: 11px 0;
  border: 0;
  border-radius: 8px;
  color: white;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.71px;
  text-align: center;
  background-color: #fa7272;
}

.delete-button:hover {
  cursor: pointer;
  background-color: #ff8888;
}

.amount-input {
  width: 100%;
  padding: 12px;
  background-color: inherit;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  color: white;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.94px;
  z-index: 6;
}

.amount-input:focus-visible {
  outline: 0;
}

.confirm-block {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0 21px;
  bottom: 0;
  right: 0;
  z-index: 3;
  height: 133px;
  width: 100%;
  background-color: var(--color-background-mute);
  border-top: 1px solid var(--color-border);
}

.confirm-buttons {
  position: relative;
  overflow: visible;
  width: 100%;
  display: flex;
  gap: 10px;
  margin: 0 21px;
  justify-content: space-between;
}

.decline-button,
.confirm-button {
  padding: 8px 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.71px;
  border: 0;
  border-radius: 8px;
  z-index: 4;
  box-shadow: 0px 0px 25px 5px rgba(250, 114, 114, 0.3);
}

.decline-button:hover,
.confirm-button:hover {
  cursor: pointer;
}

.decline-button {
  flex: 3;
  background-color: white;
  color: #2d2d2d;
}

.confirm-button {
  flex: 4;
  background-color: #fa7272;
  color: white;
}
</style>
