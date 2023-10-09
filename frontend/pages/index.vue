<script lang="ts" setup>
  definePageMeta({
    layout: 'external',
    middleware: ["guest", "auth"],
  })
</script>

<template>
   <v-container fluid class="containerExt">
    <v-row no-gutters class="spaceBot50">
      <v-col cols="12">
        <v-sheet  class="holderExt" style="background-image:url('/img/bg1.jpg');"> 
          <v-col cols="6" class="gradientContent">
            <div class="cardLoginIndex" >
            <v-card
              title="Peliculas y Series"
              subtitle="Amplio catalogo de pelis y series"
              variant="outlined"
              class="spaceTop50"
            >  
              <v-card-actions>
                <div style="width:270px">
                  <NuxtLink to="/auth/login">
                    <v-btn variant="flat">
                      Eres miembro? Inicia sesión
                    </v-btn>
                  </NuxtLink>
                  <v-divider 
                    inset 
                    class="dividerSmall"
                  ></v-divider>
                  <NuxtLink to="/auth/register">
                    <v-btn variant="flat">
                      Registrarse (7 días gratis)
                    </v-btn>
                  </NuxtLink>
                </div>
              </v-card-actions>
            </v-card>
            </div>
          </v-col>
          <v-col cols="6">

          </v-col>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row no-gutters class="spaceTop50">
      <v-col cols="12" sm="4" md="4" class="d-flex justify-center centerText">
        <div>
          <NuxtImg fit="contain" src="/img/benefit1.png" />
          <div class="benefitText">Miralos desde cualquier lugar</div>
        </div>
      </v-col>
      <v-col cols="12" sm="4" md="4" class="d-flex justify-center centerText ">
        <div>
          <NuxtImg fit="contain" src="/img/benefit2.png" />
          <div class="benefitText">Descargalo para ver sin conexión</div>
        </div>
      </v-col>
      <v-col cols="12" sm="4" md="4" class="d-flex justify-center centerText">
        <div>
          <NuxtImg fit="contain" src="/img/benefit3.png" />
          <div class="benefitText">Variedad de dispositivos compatibles</div>
        </div>
      </v-col>
    </v-row>
    <Footer />
  </v-container>
</template>

<style scoped>
.cardLoginIndex {
  color:white;
  width: 300px;
}
  </style>
