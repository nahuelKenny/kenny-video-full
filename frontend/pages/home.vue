<script lang="ts" setup>
const localePath = useLocalePath()

definePageMeta({
  middleware: 'auth'
})

const query = ref("");
const movies = ref([]);
const search = async () => {
  const { Search } = await $fetch(
    `http://www.omdbapi.com/?apikey=8e3f600b&s=${query.value}`
  );
  movies.value = Search;
}

</script>

<template>
  <div>
    <form @submit.prevent="search">
      <input type="text" v-model="query" />
      <button>Search</button>
    </form>
    <ul style="display: flex; flex-wrap: wrap; gap: 10px; list-style: none">
      <li v-for="movie in movies" :key="movie.imdbID">
        <NuxtLink :to="{ name: 'movies', params: { id: movie.imdbID } }">
          <img :src="movie.Poster" :alt="movie.title" width="100" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
