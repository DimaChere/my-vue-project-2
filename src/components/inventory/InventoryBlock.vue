<script setup>
import DescriptionBlock from './DescriptionBlock.vue'
import { useInventoryStore } from '@/stores/inventory'

const store = useInventoryStore()
const items = store.items

function onDragStart(e, fromIndex) {
  e.dataTransfer?.setData('fromIndex', fromIndex.toString())
  e.target.classList.add('dragging')
  const amountBlock = e.target.querySelector('.item-amount')
  if (amountBlock) {
    amountBlock.classList.add('hide-amount')
  }
}

function onDrag(e) {}

function onDragEnd(e) {
  e.target.classList.remove('dragging')
  const amountBlock = e.target.querySelector('.item-amount')
  if (amountBlock) {
    amountBlock.classList.remove('hide-amount')
  }
}

function onDragStop(e, toIndex) {
  e.preventDefault()
  const fromIndex = parseInt(e.dataTransfer?.getData('fromIndex'))

  if (items && items[fromIndex]) {
    if (store.chosen == fromIndex) {
      store.setChosen(toIndex)
    }
    const temp = items[fromIndex]
    items[fromIndex] = items[toIndex]
    items[toIndex] = temp
  }

  store.saveState()
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
          :class="[store.chosen == index ? 'draggable active-block' : 'draggable', '']"
          @dragstart="onDragStart($event, index)"
          @drag="onDrag($event)"
          @dragend="onDragEnd($event)"
          @dragover="
            (event) => {
              event.preventDefault()
            }
          "
          @drop="onDragStop($event, index)"
          @click="
            () => {
              if (store.chosen == index) {
                store.setChosen(null)
              } else {
                store.setChosen(index)
              }
            }
          "
          draggable="true"
        >
          <img v-if="item != null" :src="item.imageUrl" alt="" class="item-img" />
          <div class="item-amount">
            <p>{{ item?.amount }}</p>
          </div>
        </div>
        <div
          v-else
          class="draggable-blank"
          @dragover="
            (event) => {
              event.preventDefault()
            }
          "
          @drop="onDragStop($event, index)"
        ></div>
      </div>
    </div>
    <DescriptionBlock />
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
  flex: 2;
  background-color: var(--color-background-mute);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  overflow: hidden;
}
.inventory {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
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
  background-color: var(--color-background-mute);
  box-shadow: 0 0 0 0.5px var(--color-border);
}

.item-img {
  pointer-events: none;
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

.active-block {
  background-color: #2f2f2f !important;
}

.draggable,
.draggable-blank {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background-mute);
  width: 100%;
  height: 100%;
}

.draggable:hover {
  cursor: pointer;
}

.dragging {
  border-radius: 30px;
  border: 1px solid var(--color-border);
  opacity: 0.8;
}

.hide-amount {
  display: none;
}
</style>
