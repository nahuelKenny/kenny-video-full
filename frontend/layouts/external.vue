<script lang="ts" setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
 <div>
    <v-app-bar  :elevation="0"  style="padding-bottom_50px;">
      <v-app-bar-title>
        <NuxtLink :to="`/`">
          <v-img
            width="80"
            :aspect-ratio="1"
            src="/img/logo2-2.png"
          ></v-img>
        </NuxtLink>
      </v-app-bar-title>
      <template v-slot:append>
        <v-btn icon="mdi-theme-light-dark" @click="toggleTheme"></v-btn>

      </template>
    </v-app-bar>
    <v-main class="mainContainer">
      <div class="containerMask">
        <slot />
      </div>
    </v-main>
  </div>
</template>

<style scoped>
.mainContainer {
  min-height:100vh;
  background-image:url('/img/bg1.jpg');
  background-size:cover;
  
}
.containerMask {
  background: rgb(0,0,0);
  background: radial-gradient(circle, rgba(0,0,0,0.20214023109243695) 0%, rgba(0,0,0,1) 100%);
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 60px);
  overflow:hidden;
}
</style>
