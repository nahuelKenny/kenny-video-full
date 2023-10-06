<script lang="ts" setup>
    const slides =
    [
        {
            name: 'Slide1',
            img: '/img/bg1.jpg',
            caption: 'a very good movie'
        },
        {
            name: 'Slide1',
            img: '/img/bg2.jpg',
            caption: 'a very good movie'
        },
        {
            name: 'Slide1',
            img: '/img/bg2.jpg',
            caption: 'a very good movie'
        },
    ]

</script>

<template>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows="hover"
  >
    <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
        :src="slide.img"
        cover
    >
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">
            {{ slide.name }} 
          </div>
        </div>
    </v-carousel-item>
  </v-carousel>
</template>

<style scoped></style>
