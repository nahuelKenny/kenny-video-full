<script lang="ts" setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  //localStorage.setItem("theme", this.$vuetify.theme.dark.toString())
}
</script>
  
<template>
  <div>
    <v-app-bar :elevation="0">
      <v-app-bar-title>
        <NuxtLink :to="`/movies`">
          KennyClub
        </NuxtLink>
      </v-app-bar-title>
      <template v-slot:append>
        <v-menu transition="slide-y-transition">
          <template v-slot:activator="{ props }">
            <v-btn icon="mdi-theme-light-dark" @click="toggleTheme"></v-btn>
            <v-btn
              color="primary"
              class="ma-2"
              v-bind="props"
              icon="mdi-account"
            >
              
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="n in 5"
              :key="n"
              link
            >
              <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-app-bar>
<v-main class="mainContainer">
    <slot />
</v-main>
  </div>
</template>

<style scoped></style>
