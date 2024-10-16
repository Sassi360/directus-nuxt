export default defineNuxtRouteMiddleware(async (to) => {
  const toast = useToast()
  const { user, fetchUser } = useDirectusAuth()

  if (!user.value) {
    return navigateTo("/auth/login");
  }

  await fetchUser()

})
