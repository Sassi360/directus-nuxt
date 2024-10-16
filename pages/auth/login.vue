<script lang="ts" setup>
definePageMeta({
  middleware: 'guest',
  auth: false,
  layout: 'auth'
})
</script>

<template>
  <div>
    <LoginForm />
  </div>
</template>
