<script lang="ts" setup></script>

<template>
   <v-container fluid >
    <v-row no-gutters style="margin-bottom:50px;">
      <v-col cols="12">
        <v-sheet  style="height:350px; background-image:url('/img/bg1.jpg'); background-size:cover"> 
          <!--<NuxtImg fit="cover" src="/img/bg1.jpg"  width="900px" format="webp" />-->
          <v-col cols="6" style="height:100%; background: rgb(0,0,0);
background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 45%, rgba(0,212,255,0) 100%);">
            <div class="cardLoginIndex" >
            <v-card
            title="Peliculas y Series"
            subtitle="Amplio catalogo de pelis y series"
            variant="outlined"
            style="margin-top:50px;"
            >  
              <v-card-actions>
                <div style="width:270px">
                  <NuxtLink to="/auth/login">
                  <v-btn variant="tonal">
                    Eres miembro? Inicia sesión
                  </v-btn>
                  </NuxtLink>
                  <v-divider 
                    inset 
                    style="width: 100%;
                      text-align: center;
                      margin: auto;
                      margin-top: 10px;
                      margin-bottom: 10px;"
                  ></v-divider>
                  <v-btn variant="tonal">
                    Registrarse (7 días gratis)
                  </v-btn>
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
    <v-row no-gutters>
      <v-col cols="4" class="d-flex justify-center">
        <NuxtImg fit="contain" src="/img/benefit1.png" />
        <span>sarasa</span>
      </v-col>
      <v-col cols="4" class="d-flex justify-center">
        <NuxtImg fit="contain" src="/img/benefit2.png" />
        <span>sarasa</span>
      </v-col>
      <v-col cols="4" class="d-flex justify-center">
        <NuxtImg fit="contain" src="/img/benefit3.png" />
        <span>sarasa</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.cardLoginIndex {
  color:white;
  width: 300px;
}
  </style>
