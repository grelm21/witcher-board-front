import { defineStore } from 'pinia'
import api from '@/services/api'

export const useLocationStore = defineStore('locationStore', {
  state: () => ({
    items: [],
    item: null,
    isLoading: true,
    error: null,
  }),
  getters: {
    currentLocation: (state) => state.items[0] || null,
  },
  actions: {
    nextLocation() {
      this.item = this.items[this.items.indexOf(this.item) + 1] || this.items[0]
    },
    prevLocation() {
      this.item = this.items[this.items.indexOf(this.item) - 1] || this.items[this.items.length - 1]
    },
    async fetchItems() {
      this.isLoading = true
      this.error = null
      try {
        const response = await api.get('/locations')
        this.items = response.data
        this.item = this.items[0]
        if (this.items.length === 0) {
          this.error = 'No locations found'
        }
      } catch (err) {
        this.error = err
      } finally {
        this.isLoading = false
      }
    },
  },
})
