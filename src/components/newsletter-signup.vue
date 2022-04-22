<template>
  <form @submit.prevent="submitEmailForNewsletter" class="flex flex-col">
    <label for="newsletter-email" class="block text-gray-600 dark:text-gray-300 text-sm font-medium">Alamat
      Email</label>
    <div class="flex gap-x-[1.25rem] mt-1">
      <input id="newsletter-email" class="border dark:bg-black dark:border-gray-700 h-10 w-full px-3 rounded"
        type="email" required v-model="email">
      <button
        class="inline-flex items-center justify-center h-10 px-6 min-w-[161px] rounded bg-gray-200 dark:bg-gray-700 font-medium disabled:text-gray-400 disabled:bg-gray-100 hover:disabled:cursor-wait"
        :disabled="email_status == 'sending'">{{
          email_status == 'sending' ? 'Berlangganan...' : 'Langganan'
        }}</button>
    </div>
    <div class="text-sm font-medium mt-1 text-green-600 dark:text-green-300" v-if="email_status == 'success'">Silahkan
      konfirmasi langganan
      di inbox Kamu!</div>
    <div class="text-sm font-medium mt-1 text-red-600 dark:text-red-300" v-else-if="email_status == 'fail'">Terjadi
      kesalahan.</div>
    <p class="text-sm mt-2 text-gray-700 dark:text-gray-200">Setelah memasukkan email, silahkan konfirmasi di inbox Kamu
      dengan judul email
      <i>“Quarterly PDCA with Imam”</i>
    </p>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const token = import.meta.env.VITE_BUTTONDOWN_API_KEY

const email = ref('')
const email_status = ref('')

const submitEmailForNewsletter = () => {
  email_status.value = 'sending'

  axios.post('https://api.buttondown.email/v1/subscribers', {
    email: email.value,
    referrer_url: 'https://imsus.dev',
    tags: ['visitor']
  }, {
    headers: {
      'Authorization': `Token ${token}`
    }
  }).then(() => {
    email_status.value = 'success'
    setTimeout(() => {
      email_status.value = ''
    }, 5000)
  }).catch(() => {
    email_status.value = 'fail'
    setTimeout(() => {
      email_status.value = ''
    }, 5000)
  })
}
</script>