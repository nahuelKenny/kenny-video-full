<script setup>
import { useApiComp } from '../composables/apiComp'

const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const data = await useApiComp(runtimeConfig.public.apiMovies, 'GET', { apikey: runtimeConfig.public.apiMoviesKey, i: route.params.id })

useHead({
  title: data.value.Title,
  meta: [
    { name: "description", content: data.value.Plot },
    { property: "og:description", content: data.value.Plot },
    { property: "og:image", content: data.value.Poster },
    { name: "twitter:card", content: `summary_large_image` },
  ],
});
</script>
<template>
  <div>
    <v-container class="">
      <v-row>
        <v-col cols="12">
          <v-card
              color="#1F7087"
              theme="dark"
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <v-row
                align="center"
                class="mx-0 detailRow"
              >
                <v-col cols="12" sm="6" md="6">
                    <v-img
                      height="400px"
                      :src="data.Poster"
                    ></v-img>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-card-item>
                    <v-card-title>{{data.Title }}</v-card-title>
                    <v-card-subtitle>
                      <v-row no-gutters>
                      <v-col cols="5">
                        <span class="me-1">Year: {{ data.Year }}</span>
                      </v-col>
                      <v-col cols="6" class="justify-end">
                        <span class="me-1">Duration: {{ data.Runtime }}</span>
                      </v-col>
                      </v-row>
                    </v-card-subtitle>
                  </v-card-item>
                  <v-card-text>
                    <v-row
                      align="center"
                      class="mx-0"
                    >
                      <v-rating
                        color="amber"
                        density="compact"
                        half-increments
                        readonly
                        v-model="data.imdbRating"
                        length="10" 
                      ></v-rating>

                    <div class="my-4 text-subtitle-1">
                      Genre: {{ data.Genre }}
                    </div>
                    <div>{{ data.Plot }}</div>
                    </v-row>
                  </v-card-text>
                   <v-divider class="mx-4 mb-1"></v-divider>
                    <div class="px-4">
                      <div class="my-4 text-subtitle-1">
                        Awards: <br />{{ data.Awards }}
                      </div>
                      <div class="my-4 text-subtitle-1">
                        Director: <br />{{ data.Director }}
                      </div>
                      <div class="my-4 text-subtitle-1">
                        Actors: <br />{{ data.Actors }}
                      </div>
                      <div class="my-4 text-subtitle-1">
                        Writer: <br />{{ data.Writer }}
                      </div>
                    </div>
                </v-col>
              </v-row>
              </div>
            </v-card>
          </v-col>
      </v-row>
    </v-container>
  </div>
</template>