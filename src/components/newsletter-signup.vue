<template>
  <form
    @submit.prevent="submitEmailForNewsletter"
    class="flex flex-col"
  >
    <label
      class="block text-gray-600 dark:text-gray-300 text-sm font-medium"
      for="newsletter-email"
    >
      Alamat
      Email
    </label>
    <div class="flex gap-x-[1.25rem] mt-1">
      <input
        class="border dark:bg-black dark:border-gray-700 h-10 w-full px-3 rounded"
        id="newsletter-email"
        required
        type="email"
        v-model="email"
      />
      <button
        :disabled="email_form_status == 'sending'"
        class="inline-flex items-center justify-center h-10 px-6 min-w-[161px] rounded bg-gray-200 dark:bg-gray-700 font-medium disabled:text-gray-400 disabled:bg-gray-100 hover:disabled:cursor-wait"
      >{{ email_form_status == 'sending' ? 'Berlangganan...' : 'Langganan' }}</button>
    </div>
    <div
      class="text-sm font-medium mt-1 text-green-600 dark:text-green-300"
      v-if="email_form_status == 'success'"
    >{{ email_form_response_message }}</div>
    <div
      class="text-sm font-medium mt-1 text-red-600 dark:text-red-300"
      v-else-if="email_form_status == 'fail'"
    >{{ email_form_response_message }}</div>
    <p class="text-sm mt-2 text-gray-700 dark:text-gray-200">
      Setelah memasukkan email, silahkan konfirmasi di inbox Kamu
      dengan judul email
      <i>“Quarterly PDCA with Imam”</i>
    </p>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const is_development = import.meta.env.DEV
const token = is_development ? import.meta.env.VITE_BUTTONDOWN_API_KEY : null

const email = ref('')
const email_form_status = ref('')
const email_form_response_message = ref('')

const submitEmailForNewsletter = () => {
  email_form_status.value = 'sending'

  axios.post(is_development ? 'https://api.buttondown.email/v1/subscribers' : '/.netlify/functions/subscribe-newsletter', {
    email: email.value,
    referrer_url: 'https://imsus.dev',
    tags: ['visitor']
  }, {
    headers: is_development ? {
      'Authorization': `Token ${token}`
    } : undefined
  }).then((response) => {
    email_form_status.value = 'success'
    email_form_response_message.value = 'Silahkan konfirmasi langganan di inbox Kamu!'

    setTimeout(() => {
      email_form_status.value = ''
      email_form_response_message.value = ''
    }, 5000)
  }).catch((error) => {
    email_form_status.value = 'fail'

    const errorMessage = error.response.data

    if (errorMessage[0] && errorMessage[0].includes('already subscribed')) {
      email_form_response_message.value = 'Kamu sudah terdaftar di Newsletter.'
    } else {
      email_form_response_message.value = 'Terjadi kesalahan.'
    }

    setTimeout(() => {
      email_form_status.value = ''
      email_form_response_message.value = ''
    }, 5000)
  })
}
</script>