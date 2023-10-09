<script lang="ts" setup>
import { defineComponent, ref } from 'vue';

  definePageMeta({
    layout: 'external',
    middleware: ["guest"],
  })

interface Credentials {
    username: string;
    password: string;
}

const { login } = useAuth();
const config = useRuntimeConfig();
const router = useRouter();

const credentials: Credentials = reactive({
    username: "",
    password: "",
});
const nameRules = ref([
      (v: string) => !!v || 'El usuario es obligatorio',
  ]);

const error = ref<string>("");
const show1= ref<boolean>(false);
const form = ref<any>(null)

const validate = async () => {  
  const { valid } = await form.value.validate();

    if (valid) {
          error.value = "";
          //login with bakend
          await login(credentials.username, credentials.password, true);
          //navigate to home
          //router.push(config.public.homeUrl);
      
    } else {
      error.value = "Verifique los campos e intente de nuevo"
    }
}

</script>

<template>
  <v-container class="justify-center fill-height">
    <v-row no-gutters>
      <v-col cols="12" class="d-flex justify-center">
        <v-card
          title="Ingresar"
          variant="tonal"
          class="loginCard"
        >
        <v-card-text>
           <v-form ref="form">
            <v-text-field
              id="username"
              v-model="credentials.username"
              :rules="nameRules"
              label="Email de usuario"
              required
              autocomplete="off"
            ></v-text-field>

            <v-text-field
              id="password"
              v-model="credentials.password"
              :rules="nameRules"
              label="Contraseña"
              required
              :type="show1 ? 'text' : 'password'"
              :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append-inner="show1 = !show1"
              autocomplete="off"
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
