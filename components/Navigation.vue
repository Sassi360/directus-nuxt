<script lang="ts" setup>
const { logout } = useDirectusAuth()

const toggleSignOff = async () => {
  logout()
  navigateTo('/')
}

</script>

<template>
  <nav class="flex items-center justify-between">
    <h1>LOGO</h1>
    <div class="flex gap-x-6">
      <UButton to="/auth/login" variant="ghost">
        Login
      </UButton>
      <UButton to="/auth/register">
        Register
      </UButton>
    </div>

    <div class="flex gap-x-6">
      <UButton variant="link" @click="toggleSignOff">
        Log Out
      </UButton>
    </div>
  </nav>
</template>
