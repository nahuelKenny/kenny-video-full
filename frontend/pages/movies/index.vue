<script lang="ts" setup>
const localePath = useLocalePath()

definePageMeta({
  middleware: 'auth'
})

const movies = ref([])
const searchError = ref('No ha realizado una busqueda.')

const moviesData = (val) => {
    movies.value = val
}
</script>

<template>
  <div class="searchContainer">
    <v-container class="">
    <v-row no-gutters>
      <v-col>
        <Carrousel />
      </v-col>
      <v-col cols="12" class="d-flex">
        <SearchComp @setMovies="moviesData"/>
      </v-col>
    </v-row>
    <MovieListComp :movies="movies" :searchError="searchError" />
    </v-container>
    

  </div>
</template>


<style scoped>
.searchCOntainer {
    color:white
}
</style>