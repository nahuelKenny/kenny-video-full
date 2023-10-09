<script lang="ts" setup>
definePageMeta({
   middleware: ["guest"],
   layout: 'external'
});

interface Credentials {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

const { register } = useAuth();
const config = useRuntimeConfig();
const router = useRouter();

const credentials: Credentials = reactive({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
});

const error = ref<string>("");
const show1 = ref<boolean>(false);
const show2 = ref<boolean>(false);

const form = ref<any>(null)

async function submit() {
  const { valid } = await form.value.validate();

    if (valid) {
      try {
          error.value = "";

          await register(
              credentials.name, 
              credentials.email, 
              credentials.password, 
              credentials.password_confirmation
          );
          router.push(config.public.homeUrl);
      } catch (err) {
          error.value = err as string;
          //for testing purposes will ignore backend auth and go to /movies that has the "guest" profile 
          //u can remove that deleting the "guest" param fro definePageMeta in /movies
          //also disable next line if u want to go with real user auth
          router.push(config.public.homeUrl);
      }
    } else {
      error.value = "Verifique los campos e intente de nuevo"
    }
}
const goToLogin = () => {
  return router.push("login")
}
</script>

<template>
   <v-container class="justify-center fill-height">
    <v-row no-gutters>
      <v-col cols="12" class="d-flex justify-center">
        <v-card
          title="Registrarse"
          variant="tonal"
          class="loginCard"
        >
        <v-card-text>
           <v-form ref="form" @submit.prevent="submit">
            <v-text-field
              id="realname"
              v-model="credentials.name"
              type="text"
              name="username"
              label="Nombre"
              required
              autocomplete="off"
            ></v-text-field>
            <v-text-field
              id="email"
              v-model="credentials.email"
              type="text"
              name="email"
              label="Email de usuario"
              required
              autocomplete="off"
            ></v-text-field>
            <v-text-field
              id="password"
              v-model="credentials.password"
              name="password"
              label="Contraseña"
              required
              :type="show1 ? 'text' : 'password'"
              :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append-inner="show1 = !show1"
              autocomplete="off"
            ></v-text-field>
           <v-text-field
              id="repeatPassword"
              v-model="credentials.password_confirmation"
              name="repeatPassword"
              label="Repetir contraseña"
              required
              :type="show1 ? 'text' : 'password'"
              :append-inner-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append-inner="show2 = !show2"
              autocomplete="off"
            ></v-text-field>
            <v-btn
                color="success"
                class="mt-4"
                block
                @click="submit"
              >
                Registrar
              </v-btn>
              <v-divider />
              <v-btn
                color="warning"
                class="mt-4"
                block
                @click="goToLogin"
              >
                Tengo usuario
              </v-btn>
            <div>
              <small>{{ error }}</small>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<style scoped></style>
