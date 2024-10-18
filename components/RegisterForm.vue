<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types';
import { registerSchema, type RegisterSchema } from '~/schema/auth/register';

const { defaultRoleId } = useRuntimeConfig().public

const state = reactive({
  first_name: '',
  last_name: '',
  email: '',
  password: '',
})

async function onSubmit(event: FormSubmitEvent<RegisterSchema>) {
  console.log('onSubmit function called');
  try {
    console.log('Submitting form data:', event.data);

    const userData = {
      email: event.data.email,
      password: event.data.password,
      first_name: event.data.first_name,
      last_name: event.data.last_name,
      role: defaultRoleId,
    };

    await useDirectusRest(createUser(userData));

    useShowToast('Success', 'You have been registered successfully.', 'i-heroicons-check-circle', 'green');
    navigateTo('/login');
  } catch (error) {
    console.error('Error during registration:', error);
    useShowToast('Error', 'Something went wrong, please try again later.', 'i-heroicons-exclamation-circle', 'red');
  }
}
</script>

<template>
  <UCard class="mt-8 max-w-3xl mx-auto">
    <template #header>
      <h2 class='text-2xl text-gray-900 dark:text-white font-bold'>Register</h2>
      <p class="text-gray-500 dark:text-gray-400 mt-1">Create your account.</p>
    </template>

    <UForm :schema="registerSchema" :state="state" class="space-y-4" @submit.prevent="onSubmit">
      <div class="flex gap-6">
        <UFormGroup label="First Name" name="first_name" class="w-full">
          <UInput v-model="state.first_name" />
        </UFormGroup>

        <UFormGroup label="Last Name" name="last_name" class="w-full">
          <UInput v-model="state.last_name" />
        </UFormGroup>
      </div>

      <UFormGroup label="Email" name="email" help="We will never share your email with anyone else.">
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
