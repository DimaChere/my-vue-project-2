import { reactive, ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export type Location = {
  locationId: number
  name: string
  description: string
  difficulty: string
  imageUrl: string
} | null

const defaultLocation: Location[] = [
  {
    locationId: 1,
    name: 'location1',
    description: 'description1',
    difficulty: 'medium',
    imageUrl: './src/components/icons/location1.png'
  },
  null,
  null,
  null,
  null
]

export const useLocationStore = defineStore('location', () => {
  const locations: Location[] = reactive(
    JSON.parse(localStorage.getItem('locations') || 'null') ?? defaultLocation
  )

  const curLocation: Ref<number | null> = ref(0)

  return { locations, curLocation }
})
