<script setup lang="ts">
import NewsletterSignup from "~/components/newsletter-signup.vue";

const year_experience = new Date().getFullYear() - 2014;
</script>

<template>
  <main
    class="home-page"
    id="main"
  >
    <div
      class="max-w-[38rem] mx-auto w-full mt-[7.5rem] flex flex-col gap-y-[3.75rem]"
    >
      <section>
        <h2 class="font-medium mb-6">Tentang</h2>
        <p class="text-gray-600 dark:text-gray-300">
          Saya adalah seorang web developer dengan pengalaman
          {{ year_experience }} tahun di bidang full-stack. Saya bekerja di
          industri agency, media, dan periklanan. Sekarang saya berkutat di
          bidang influencer marketing sekaligus mengembangkan produk
          <a
            class="underline hover:text-black dark:hover:text-white"
            href="https://lemon.cm"
            rel="noopener"
            target="_blank"
          >Lemon&nbsp;Platform</a>. Saat ini, saya menjabat sebagai Chief Technology Officer di
          <a
            class="underline hover:text-black dark:hover:text-white"
            href="https://cchan.co.id"
            rel="noopener"
            target="_blank"
          >PT&nbsp;C&nbsp;Channel&nbsp;Indonesia</a>.
        </p>
        <p class="mt-4 text-gray-600 dark:text-gray-300">
          Beberapa produk yang telah saya buat antara lain Lemon Platform,
          termasuk Lemon for Brand dan Lemon for Influencer. Ketika awal karir
          saya sebagai web developer, saya membantu membuat website
          <a
            class="underline hover:text-black dark:hover:text-white"
            href="https://kawaiibeautyjapan.com"
            rel="noopener"
            target="_blank"
          >Kawaii&nbsp;Beauty&nbsp;Japan</a>. Selain itu ada beberapa microsite, dan library yang telah saya
          open-source di Github.
        </p>
      </section>
      <section>
        <h2 class="font-medium mb-6">Kontak</h2>
        <div class="grid grid-cols-12 gap-x-3 sm:gap-3">
          <div
            class="text-gray-500 dark:text-gray-400 col-span-12 lg:col-span-3"
          >Email</div>
          <div class="col-span-12 lg:col-span-9 mb-9 lg:mb-0">
            <a
              class="underline text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white"
              href="mailto:hi@imsus.dev"
              rel="noopener"
              target="_blank"
            >hi@imsus.dev</a>
          </div>
          <div
            class="text-gray-500 dark:text-gray-400 col-span-12 lg:col-span-3"
          >Telegram</div>
          <div class="col-span-12 lg:col-span-9 mb-9 lg:mb-0">
            <a
              class="underline text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white"
              href="https://t.me/imsus"
              rel="noopener"
              target="_blank"
            >t.me/imsus</a>
          </div>
          <div
            class="text-gray-500 dark:text-gray-400 col-span-12 lg:col-span-3"
          >Github</div>
          <div class="col-span-12 lg:col-span-9 mb-9 lg:mb-0">
            <a
              class="underline text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white"
              href="https://github.com/imsus"
              rel="noopener"
              target="_blank"
            >github.com/imsus</a>
          </div>
          <div
            class="text-gray-500 dark:text-gray-400 col-span-12 lg:col-span-3"
          >LinkedIn</div>
          <div class="col-span-12 lg:col-span-9 mb-9 lg:mb-0">
            <a
              class="underline text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white"
              href="https://www.linkedin.com/in/imsus"
              rel="noopener"
              target="_blank"
            >linkedin.com/in/imsus</a>
          </div>
          <div
            class="print:hidden text-gray-500 dark:text-gray-400 col-span-12 lg:col-span-3"
          >Newsletter</div>
          <div class="print:hidden col-span-12 lg:col-span-9">
            <NewsletterSignup client:visible></NewsletterSignup>
          </div>
        </div>
      </section>
      <section>
        <h2 class="font-medium mb-6">Proyek Pilihan</h2>
        <div class="grid grid-cols-12 gap-x-3 sm:gap-3">
          <div
            class="text-gray-500 dark:text-gray-400 col-span-12 lg:col-span-3"
          >2019</div>
          <div class="col-span-12 lg:col-span-9">
            <h3>
              <a
                class="underline"
                href="https://lemon.cm"
                rel="noopener"
                target="_blank"
              >
                <i class="not-italic font-medium">Lemon Platform</i>
              </a>
            </h3>
            <small
              class="text-sm text-gray-500 dark:text-gray-400"
            >Laravel, Vue 2, Inertia, Quasar</small>
            <p class="mt-3 mb-9 lg:mb-5 text-gray-600 dark:text-gray-300">
              Platform yang memudahkan Brand dan Influencer dalam mengelola dan
              berpartisipasi dalam influencer marketing.
            </p>
          </div>
          <div
            class="text-gray-500 dark:text-gray-400 col-span-12 lg:col-span-3"
          >2014</div>
          <div class="col-span-12 lg:col-span-9">
            <h3>
              <a
                class="underline"
                href="https://kawaiibeautyjapan.com"
              >
                <i class="not-italic font-medium">Kawaii Beauty Japan</i>
              </a>
            </h3>
            <small
              class="text-sm text-gray-500 dark:text-gray-400"
            >Custom CMS menggunakan Laravel</small>
            <p class="mt-3 mb-9 lg:mb-5 text-gray-600 dark:text-gray-300">
              Portal website yang menyediakan informasi untuk wanita di
              Indonesia.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2 class="font-medium mb-6">Pengalaman Kerja</h2>
        <div class="grid grid-cols-12 gap-x-3 sm:gap-3">
          <div
            class="text-gray-500 dark:text-gray-400 col-span-12 lg:col-span-3"
          >2020–Sekarang</div>
          <div class="col-span-12 lg:col-span-9">
            <h3 class="font-medium">Chief Technology Officer</h3>
            <small
              class="text-sm text-gray-500 dark:text-gray-400"
            >PT C Channel Media Indonesia</small>
            <p class="mt-3 mb-9 lg:mb-5 text-gray-600 dark:text-gray-300">
              Launching dan maintain Lemon Platform, mengembangkan fitur,
              mengatur developer, dan meningkatkan produktivitas tim
              development.
            </p>
          </div>
          <div
            class="text-gray-500 dark:text-gray-400 col-span-12 lg:col-span-3"
          >2018–2020</div>
          <div class="col-span-12 lg:col-span-9">
            <h3 class="font-medium">Head of Development Team</h3>
            <small
              class="text-sm text-gray-500 dark:text-gray-400"
            >PT C Channel Media Indonesia</small>
            <p class="mt-3 mb-9 lg:mb-5 text-gray-600 dark:text-gray-300">
              Bekerja bersama developer untuk membuat prototipe dari Lemon
              Platform. Lingkup kerja termasuk mengatur developer, merancang
              desain database dan aplikasi.
            </p>
          </div>
          <div
            class="text-gray-500 dark:text-gray-400 col-span-12 lg:col-span-3"
          >2015–2018</div>
          <div class="col-span-12 lg:col-span-9">
            <h3 class="font-medium">Full Stack Web Developer</h3>
            <small
              class="text-sm text-gray-500 dark:text-gray-400"
            >PT Media Makmur (diakuisisi oleh C Channel)</small>
            <p class="mt-3 mb-9 lg:mb-5 text-gray-600 dark:text-gray-300">
              Menambahkan fitur dan me-maintain website Kawaii Beauty Japan. Dan
              juga mengerjakan beberapa microsite untuk campaign klien.
            </p>
          </div>
          <div
            class="text-gray-500 dark:text-gray-400 col-span-12 lg:col-span-3"
          >2014–2015</div>
          <div class="col-span-12 lg:col-span-9">
            <h3 class="font-medium">Front End Web Developer</h3>
            <small
              class="text-sm text-gray-500 dark:text-gray-400"
            >PT Media Makmur</small>
            <p class="mt-3 mb-9 lg:mb-5 text-gray-600 dark:text-gray-300">
              Desain interface front end untuk website Kawaii Beauty Japan.
              Tugas meliputi: desain, membuat HTML dan template Blade.
            </p>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
