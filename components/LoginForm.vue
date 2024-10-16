<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types';
import { loginSchema, type LoginSchema } from '~/schema/auth/login';

const { login } = useDirectusAuth()
const toast = useToast()

const state = reactive({
  email: '',
  password: '',
})

async function onSubmit(event: FormSubmitEvent<LoginSchema>) {
  try {
    const result = await login(event.data.email, event.data.password)

    toast.add({
      title: 'Login Successful',
      description: 'You have been logged in successfully.',
      icon: 'i-heroicons-check-circle',
      timeout: 5000,
    })

    return result

  } catch (e) {
    const code = e.data.errors[0].extensions.code
    console.log(code)

  }
}
</script>

<template>
  <UCard class="mt-8 max-w-3xl mx-auto">
    <template #header>
      <h2 class='text-2xl text-gray-900 dark:text-white font-bold'>Login</h2>
      <p class="text-gray-500 dark:text-gray-400 mt-1">Enter your credentials to access your account.</p>
    </template>

    <UForm :schema="loginSchema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormGroup label="Email" name="email">
        <UInput v-model="state.email" />
      </UFormGroup>

      <UFormGroup label="Password" name="password">
        <UInput v-model="state.password" type="password" />
      </UFormGroup>

      <UButton type="submit">
        Submit
      </UButton>
    </UForm>
  </UCard>
</template>
