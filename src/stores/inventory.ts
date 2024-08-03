import { reactive, ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export type InventoryItem = {
  itemId: number
  name: string
  description: string
  amount: number
  imageUrl: string
} | null

const defaultInventory: InventoryItem[] = [
  {
    itemId: 1,
    name: 'item1',
    description: 'description1',
    amount: 1,
    imageUrl: './src/components/icons/ItemImage.svg'
  },
  null,
  {
    itemId: 2,
    name: 'item2',
    description: 'description2',
    amount: 2,
    imageUrl: './src/components/icons/ItemImage1.svg'
  },
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null
]

export const useInventoryStore = defineStore('inventory', () => {
  const items: InventoryItem[] = reactive(
    JSON.parse(localStorage.getItem('inventoryItems') || 'null') ?? defaultInventory
  )

  const chosen: Ref<number | null> = ref(null)

  function saveState() {
    localStorage.setItem('inventoryItems', JSON.stringify(items))
  }

  function setChosen(num: number) {
    chosen.value = num
  }

  function deleteSomeItems(amount: number) {
    if (chosen.value == null) {
      return
    }
    const chosenItem = items[chosen.value]

    if (chosenItem && chosenItem.amount - amount <= 0) {
      items[chosen.value] = null
      chosen.value = null
    } else if (chosenItem) {
      chosenItem.amount -= amount
    }

    localStorage.setItem('inventoryItems', JSON.stringify(items))
  }

  return { items, chosen, saveState, setChosen, deleteSomeItems }
})
