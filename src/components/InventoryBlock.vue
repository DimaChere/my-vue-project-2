<script setup lang="ts">
import { useInventoryStore, type InventoryItem } from '../stores/inventory'

const store = useInventoryStore()
const items: InventoryItem[] = store.items
console.log(items)
function onDragStart(e: DragEvent, fromIndex: number) {
  // e.dataTransfer?.dropEffect = 'move'
  // e.dataTransfer?.effectAllowed = 'move'
  e.dataTransfer?.setData('fromIndex', fromIndex.toString())
}

function onDragStop(e: DragEvent, toIndex: number) {
  e.preventDefault()

  if (e.dataTransfer?.getData('fromIndex')) {
    const fromIndex: number = parseInt(e.dataTransfer?.getData('fromIndex'))

    if (items && items[fromIndex]) {
      const temp = items[fromIndex]
      items[fromIndex] = items[toIndex]
      items[toIndex] = temp
    }

    store.saveState()
  }
}
</script>

<template>
  <div class="wrapper">
    <div class="inventory absolute">
      <div class="item" v-for="i in 25" :key="i"></div>
    </div>
    <div class="inventory">
      <div class="item" v-for="(item, index) in items" :key="index">
        <div
          v-if="items[index]"
          class="draggable"
          @dragstart="onDragStart($event, index)"
          @dragover="
            (event) => {
              event.preventDefault()
            }
          "
          @drop="onDragStop($event, index)"
          draggable="true"
        >
          <img v-if="item != null" :src="item.imageUrl" alt="" />
          <div class="item-amount">
            <p>{{ item?.amount }}</p>
          </div>
        </div>
        <div
          v-else
          class="draggable"
          @dragover="
            (event) => {
              event.preventDefault()
            }
          "
          @drop="onDragStop($event, index)"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  flex: 2;
}
.inventory {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  background-color: var(--color-background-mute);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  overflow: hidden;
}

.absolute {
  position: absolute;
}

.item {
  box-sizing: content-box;
  position: relative;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1 / 1;
  border: 0.5px solid var(--color-border);
  background-color: var(--color-background-mute);
}

.item-amount {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0px;
  right: 0;
  color: white;
  width: 16px;
  height: 16px;
  border: 0.5px solid var(--color-border);
  border-top-left-radius: 6px;
  text-align: center;
  background-color: var(--color-background-mute);
}

.item-amount p {
  color: var(--color-border);
  font-family: Inter;
  font-size: 10px;
  font-weight: 500;
  line-height: 12.1px;
}

.draggable {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 100%;
  height: 100%;
}

.item img {
  pointer-events: none;
}
</style>
