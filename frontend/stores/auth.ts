import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {
        name: "temp user",
        lastName: "last name",
        userName: "tempUser@gmail.com"
    },
    isAuthenticated: true,
    token: null,
  }),
})