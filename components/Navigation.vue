<script lang="ts" setup>
const { logout, user } = useDirectusAuth()

const toggleLogOut = async () => {
  await logout();
  navigateTo('/');
}

</script>

<template>
  <nav class="flex items-center justify-between">
    <h1>LOGO</h1>

    <div class="flex gap-x-6" v-if="user">
      <UButton variant="link" @click="toggleLogOut">
        Log Out
      </UButton>
    </div>

    <div class="flex gap-x-6" v-else>
      <UButton to="/auth/login" variant="ghost">
        Login
      </UButton>
      <UButton to="/auth/register">
        Register
      </UButton>
    </div>


  </nav>
</template>
