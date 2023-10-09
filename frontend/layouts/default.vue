<script lang="ts" setup>
import { useTheme } from 'vuetify'

const theme = useTheme()
const { logout } = useAuth();

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>
  
<template>
  <div>
    <v-app-bar :elevation="0">
      <v-app-bar-title>
        <NuxtLink :to="`/movies`">
          <v-img
            width="80"
            :aspect-ratio="1"
            src="/img/logo2-2.png"
          ></v-img>
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
            <v-hover>
              <template v-slot:default="{ isHovering, props }">
                <v-list-item
                v-bind="props"
                :color="isHovering ? 'primary' : undefined"
                @click="logout"
                >
                  <NuxtLink class="noDeco" >
                    <v-list-item-title v-text="'Cerrar sesión'" ></v-list-item-title>
                  </NuxtLink>
                </v-list-item>
              </template>
            </v-hover>
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
