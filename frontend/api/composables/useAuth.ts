export const useAuth = () => {
    const router = useRouter();
    const config = useRuntimeConfig();
    const { authentication } = useApi();
    const user = useUser();

    const isAuthenticated = computed(() => user.value !== null);

    async function fetchUser(): Promise<any> {
        user.value = await authentication.user();
    }

    async function login(
        email: string,
        password: string,
        remember = true
    ): Promise<any> {
        //if user is already authenticated do not continue
        /*
        if (isAuthenticated.value === true) {
            return;
        }
        */
       //if not logued in continue proccedure
        await authentication.login(email, password, remember);
        await fetchUser();

        await router.push(config.public.homeUrl);
    }

    async function register(
        name: string,
        email: string,
        password: string,
        password_confirmation: string
    ): Promise<any> {
        await authentication.register(
            name,
            email,
            password,
            password_confirmation
        );
        await fetchUser();

        await router.push(config.public.homeUrl);
    }

    async function logout(): Promise<any> {
        if (isAuthenticated.value === false) {
            await router.push(config.public.baseUrl);
            return;
        }

        await authentication.logout();
        user.value = null;

        await router.push(config.public.loginUrl);
    }

    return {
        user,
        isAuthenticated,
        login,
        register,
        logout,
    };
};
