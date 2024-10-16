<script setup lang="ts">
const { user } = useDirectusAuth()

definePageMeta({ middleware: "auth"});

</script>

<template>
  <UContainer class="min-h-screen max-w-2xl mx-auto flex justify-center items-center w-full">
    <UCard>
      <template #header>
        <h1>Congrats! you are logged in!</h1>
      </template>
      <template #default>
        <p>{{ user }}</p>
      </template>
    </UCard>
  </UContainer>
</template>
