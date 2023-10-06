<script lang="ts" setup>
  const props = defineProps({
    movies: { type: Array, required: true },
    searchError: String
  })
</script>

<template>
  <v-row no-gutters style="margin-top:30px;">
      <v-col cols="12" v-if="movies && movies.length" class="d-flex justify-center">
        <ul class="d-flex justify-center" style="display: flex; flex-wrap: wrap; gap: 10px; list-style: none">
        <li v-for="movie in movies" :key="movie.imdbID" style="width:150px;">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              :elevation="isHovering ? 12 : 2"
              :class="{ 'on-hover': isHovering }"
              v-bind="props"
            >
            <NuxtLink :to="`/movies/${ movie.imdbID}`">
            <img :src="movie.Poster != 'N/A' ? movie.Poster : '/img/no-image.jpg' " :alt="movie.Title" width="140" height="208" />
            <div style="width:150px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                <span style="text-decoration:none; color:white">{{ movie.Title }}</span>
            </div>
            <v-overlay
              :model-value="isHovering"
              contained
              scrim="#036358"
              class="align-center justify-center"
            >
              <v-btn variant="flat">Ver mas info</v-btn>
            </v-overlay>
            </NuxtLink>
            </v-card>
          </v-hover>
        </li>
        </ul>
      </v-col>
      <v-col cols="12" v-else class="d-flex justify-center">
        <h3>{{ searchError }}</h3>
      </v-col>
    </v-row>
</template>

<style scoped></style>
