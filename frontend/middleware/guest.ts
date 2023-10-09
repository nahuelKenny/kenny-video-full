export default defineNuxtRouteMiddleware(() => {
    const { isAuthenticated } = useAuth();
    const config = useRuntimeConfig();

    if (isAuthenticated.value === true) {
        console.log("is auth ");
        //return navigateTo(config.public.homeUrl, { replace: true });
        return;
    }
});
