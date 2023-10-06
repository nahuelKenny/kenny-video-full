<script lang="ts" setup>
import { useApiComp } from '../composables/apiComp'

const runtimeConfig = useRuntimeConfig();
const emit = defineEmits(['setMovies', 'submit'])
const query = ref("");
const form = ref(null);
const movies = ref([]);
const movieType = ref(null);
const movieDate = ref(null);
const searchError = ref('Se ha producido un error.')
const search = async () => {
    const { valid } = await form.value.validate();
    if ( valid ) {
      let getData = await useApiComp(runtimeConfig.public.apiMovies, 'GET', { apikey: runtimeConfig.public.apiMoviesKey, s: query.value, type: movieType.value, y: movieDate.value})
      movies.value = getData.value.Search || []
      emit('setMovies', movies.value)
    }
}

const theDates = [];
for (let year = new Date().getFullYear(); year !== null;) {
  const row = [];
  for (let i = 0; i < 1; i++, year = (year > 1941 ? year - 1 : null)) {
    row.push(year);
  }
  theDates.push(row[0]);
}

const rules = {
    required: value => !!value || 'Este campo es obligatorio',
    }

const validate = async () => {
      const { valid } = await form.value.validate();

      if (valid) {
        return true
      } else {
        return false
      }
      
    };
  
  </script>
<template>
  <v-card
    title="Busqueda de peliculas"
    style="width:100%"
  >
    <v-card-text>
      <v-form ref="form" @submit.prevent="search">
        <v-row >
          <v-col cols="12" sm="5" md="4" class="d-flex">
          <v-text-field
              v-model="query"
              density="compact"
              label="Nombre de serie o pelicula"
              append-inner-icon="mdi-magnify"
              :rules="[rules.required]"
              clearable
          ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4" md="4" class="d-flex">
            <v-select
                v-model="movieType"
                clearable
                label="Tipo"
                :items="['movie', 'series', 'episode']"
                density="compact"
            ></v-select>
          </v-col>
          <v-col cols="12" sm="3" md="4" class="d-flex">
            <v-select
                v-model="movieDate"
                clearable
                label="Año"
                :items="theDates"
                density="compact"
            ></v-select>
          </v-col>
          <v-btn
              color="info"
              class="mt-4"
              block
              type="submit"
          >
              Buscar
          </v-btn>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<style scoped></style>
