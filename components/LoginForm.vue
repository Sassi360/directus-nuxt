<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types';
import { loginSchema, type LoginSchema } from '~/schema/auth/login';

const { login } = useDirectusAuth()

const state = reactive({
  email: '',
  password: '',
})

async function onSubmit(event: FormSubmitEvent<LoginSchema>) {
  try {
    await login(event.data.email, event.data.password);

    useShowToast('Login Successful', 'You have been logged in successfully.', 'i-heroicons-check-circle', '');

  } catch (error) {
    useShowToast('Login Failed', 'Please check your credentials and try again.', 'i-heroicons-exclamation-circle', 'red');
    console.error(error);
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
