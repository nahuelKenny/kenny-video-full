import { defineNuxtRouteMiddleware } from 'nuxt/app'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware((to) => {
  const { isAuthenticated } = storeToRefs(useAuthStore())

  if (isAuthenticated) {
    return true
  } else {
    return navigateTo('/')
  }

  /*
  const { isAuthenticated, isLoading, hasError } = useUserStore()

  if (isLoading.value) {
    // Show a loading indicator
    console.log('Loading...')
  } else if (hasError.value) {
    // Show an error message
    console.error('An error occurred:', hasError.value.message)
  } else if (!isAuthenticated.value) {
    // Redirect to login page
    return redirect('/login')
  }
  */
})