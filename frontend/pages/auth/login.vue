<script lang="ts" setup>
import { defineComponent, ref } from 'vue';

  definePageMeta({
    layout: 'external'
  })

  const router = useRouter()
  const form = ref(null)
  const userName = ref('');
  const password = ref('');
  const show1= ref(false);
  const nameRules = ref([
      (v: string) => !!v || 'El usuario es obligatorio',
      (v: string) => (v && v.length >= 10) || 'Debe contener más de 10 caracteres',
  ]);
  const select = ref(null);

  const checkbox = ref(false);

  const validate = async () => {
    console.log(form.value)
    const { valid } = await form.value.validate();

    if (valid) {
      console.log('Form is valid');
      router.push({ path: "/movies" });
    } 
    return false
  };

  const registerClick = () => {
    this.$refs.form.resetValidation();
  };

   
  
</script>

<template>
  <v-container class="justify-center fill-height">
    <v-row no-gutters>
      <v-col cols="12" class="d-flex justify-center">
        <v-card
          :loading="loading"
          title="Ingresar"
          variant="tonal"
          class="loginCard"
        >
        <v-card-text>
           <v-form ref="form">
            <v-text-field
              v-model="userName"
              :counter="10"
              :rules="nameRules"
              label="Email de usuario"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              :rules="nameRules"
              label="Contraseña"
              required
              :type="show1 ? 'text' : 'password'"
              :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append-inner="show1 = !show1"
            ></v-text-field>

            <div class="d-flex flex-column">
              <v-btn
                color="success"
                class="mt-4"
                block
                @click="validate"
              >
                Ingresar
              </v-btn>
              <v-btn
                color="warning"
                class="mt-4"
                block
                @click="registerClick"
              >
                Registrarme
              </v-btn>
            </div>
          </v-form>
        </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    
  </v-container>
</template>

<style scoped>

.loginCard {
  width:300px; 
  border:thin solid #fff;
  margin-top:50px; 
  color:white;
  padding:20px;
}
  </style>
