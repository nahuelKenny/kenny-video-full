import { useTheme } from 'vuetify'
import { defineNuxtRouteMiddleware } from 'nuxt/app'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '~/stores/auth'
import { createVuetify, ThemeDefinition } from 'vuetify'

export default defineNuxtRouteMiddleware((to) => {
    /*
    let checkTheme = localStorage.getItem("theme")
    if (checkTheme) {
        console.log("apso x checkTheme")
        createVuetify({
            theme: {
              defaultTheme: checkTheme,
            },
        })
    }
    */
})
