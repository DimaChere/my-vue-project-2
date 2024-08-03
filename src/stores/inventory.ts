import { reactive, ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import ItemImage1 from '@/components/icons/ItemImage1.svg'
import ItemImage2 from '@/components/icons/ItemImage2.svg'
import ItemImage3 from '@/components/icons/ItemImage3.svg'
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
    amount: 4,
    imageUrl: ItemImage1
  },
  {
    itemId: 2,
    name: 'item2',
    description: 'description2',
    amount: 2,
    imageUrl: ItemImage2
  },
  {
    itemId: 3,
    name: 'item2',
    description: 'description3',
    amount: 5,
    imageUrl: ItemImage3
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
