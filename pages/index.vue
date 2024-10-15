<script lang="ts" setup>

</script>

<template>
  <UContainer class="p-6">
    <nav class="flex items-center justify-between">
      <h1>LOGO</h1>
      <div class="flex gap-x-6">
        <UButton
          to="/auth/login"
          variant="ghost"
        >
          Login
        </UButton>
        <UButton to="/auth/register">
          Register
        </UButton>
      </div>
    </nav>

    <p>Welcome Home</p>
  </UContainer>
</template>
