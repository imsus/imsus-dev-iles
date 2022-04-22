<script setup lang="ts">

</script>

<template>
  <main id="main" class="home-page">
    <div class="max-w-[38rem] mx-auto w-full mt-[7.5rem] flex flex-col gap-y-[3.75rem]">
      <section>
        <h2 class="font-medium mb-6">About</h2>
        <p class="text-gray-600 dark:text-gray-300">Saya adalah seorang web developer dengan pengalaman 8 tahun di
          bidang full-stack. Saya bekerja di industri agency, media, dan periklanan. Sekarang saya berkutat di bidang
          influencer marketing sekaligus mengembangkan produk <a href="https://lemon.cm"
            class="underline hover:text-black dark:hover:text-white" target="_blank" rel="noopener">Lemon Platform</a>.
          Saat ini, saya menjabat sebagai Chief Technology Officer di <a href="https://cchan.co.id"
            class="underline hover:text-black dark:hover:text-white" target="_blank" rel="noopener">PT C Channel
            Indonesia</a>..
        </p>
        <p class="mt-4 text-gray-600 dark:text-gray-300">Beberapa produk yang telah saya buat antara lain Lemon
          Platform, termasuk Lemon for Brand dan Lemon for Influencer. Ketika awal karir saya sebagai web developer,
          saya membantu membuat website <a href="https://kawaiibeautyjapan.com"
            class="underline hover:text-black dark:hover:text-white" target="_blank" rel="noopener">Kawaii Beauty
            Japan</a>. Selain itu ada beberapa microsite, dan library yang telah saya open-source di Github.
        </p>
      </section>
      <section>
        <h2 class="font-medium mb-6">Contact</h2>
        <div class="grid grid-cols-5 lg:gap-y-3">
          <div class="text-gray-600 dark:text-gray-300 col-span-5 lg:col-span-1">Email</div>
          <div class="col-span-5 lg:col-span-4 mb-9 lg:mb-0"><a href="mailto:hi@imsus.dev"
              class="underline text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white" target="_blank"
              rel="noopener">hi@imsus.dev</a>
          </div>
          <div class="text-gray-600 dark:text-gray-300 col-span-5 lg:col-span-1">Twitter</div>
          <div class="col-span-5 lg:col-span-4 mb-9 lg:mb-0"><a href="https://twitter.com/imsus"
              class="underline text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white" target="_blank"
              rel="noopener">@imsus</a>
          </div>
          <div class="text-gray-600 dark:text-gray-300 col-span-5 lg:col-span-1">Github</div>
          <div class="col-span-5 lg:col-span-4 mb-9 lg:mb-0"><a href="https://github.com/imsus"
              class="underline text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white" target="_blank"
              rel="noopener">@imsus</a>
          </div>
          <div class="text-gray-600 dark:text-gray-300 col-span-5 lg:col-span-1">LinkedIn</div>
          <div class="col-span-5 lg:col-span-4 mb-9 lg:mb-0"><a href="https://www.linkedin.com/in/imsus"
              class="underline text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white" target="_blank"
              rel="noopener">@imsus</a>
          </div>
          <div class="text-gray-600 dark:text-gray-300 col-span-5 lg:col-span-1">Newsletter</div>
          <div class="col-span-5 lg:col-span-4">
            <form action="" class="flex flex-col gap-y-3">
              <label for="newsletter-email" class="block text-gray-600 dark:text-gray-300">Dikirim per 3 bulan.</label>
              <div class="flex gap-x-[1.25rem]">
                <input id="newsletter-email" class="border dark:bg-black dark:border-gray-700 h-10 w-full px-3 rounded"
                  type="email" placeholder="Your email address" required>
                <button
                  class="inline-flex items-center justify-center h-10 px-6 rounded bg-gray-200 dark:bg-gray-700 font-medium">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section>
        <h2 class="font-medium mb-6">Selected Projects</h2>
        <div class="grid grid-cols-5 lg:gap-y-3">
          <div class="text-gray-600 dark:text-gray-300 col-span-5 lg:col-span-1">2019</div>
          <div class="col-span-5 lg:col-span-4">
            <h3><a href="https://lemon.cm" target="_blank" rel="noopener" class="underline"><i
                  class="not-italic font-medium">Lemon Platform</i></a>
            </h3>
            <small class="text-sm text-gray-500 dark:text-gray-400">Laravel, Vue 2, Inertia, Quasar</small>
            <p class="mt-3 mb-9 lg:mb-5 text-gray-600 dark:text-gray-300">Platform yang memudahkan Brand dan Influencer
              dalam mengelola dan berpartisipasi dalam influencer marketing.</p>
          </div>
          <div class="text-gray-600 dark:text-gray-300 col-span-5 lg:col-span-1">2014</div>
          <div class="col-span-5 lg:col-span-4">
            <h3><a href="https://kawaiibeautyjapan.com" class="underline"><i class="not-italic font-medium">Kawaii
                  Beauty Japan</i></a>
            </h3>
            <small class="text-sm text-gray-500 dark:text-gray-400">Custom CMS menggunakan Laravel</small>
            <p class="mt-3 mb-9 lg:mb-5 text-gray-600 dark:text-gray-300">Portal website yang menyediakan informasi
              untuk wanita di Indonesia.</p>
          </div>
        </div>
      </section>
      <section>
        <h2 class="font-medium mb-6">Work Experience</h2>
        <div class="grid grid-cols-5 lg:gap-y-3">
          <div class="text-gray-600 dark:text-gray-300 col-span-5 lg:col-span-1">2020–Now</div>
          <div class="col-span-5 lg:col-span-4">
            <h3 class="font-medium">Chief Technology Officer</h3>
            <small class="text-sm text-gray-500 dark:text-gray-400">PT C Channel Media Indonesia</small>
            <p class="mt-3 mb-9 lg:mb-5 text-gray-600 dark:text-gray-300">Launching and maintaining Lemon Platform,
              adding features, managing developers, and improving development team productivity.</p>
          </div>
          <div class="text-gray-600 dark:text-gray-300 col-span-5 lg:col-span-1">2018–2020</div>
          <div class="col-span-5 lg:col-span-4">
            <h3 class="font-medium">Head of Development Team</h3>
            <small class="text-sm text-gray-500 dark:text-gray-400">PT C Channel Media Indonesia</small>
            <p class="mt-3 mb-9 lg:mb-5 text-gray-600 dark:text-gray-300">Working with developers to create prototype of
              Lemon Platform. Task includes managing developer, architecting database and applications.</p>
          </div>
          <div class="text-gray-600 dark:text-gray-300 col-span-5 lg:col-span-1">2015–2018</div>
          <div class="col-span-5 lg:col-span-4">
            <h3 class="font-medium">Full Stack Web Developer</h3>
            <small class="text-sm text-gray-500 dark:text-gray-400">PT Media Makmur (acquired by C Channel
              Indonesia)</small>
            <p class="mt-3 mb-9 lg:mb-5 text-gray-600 dark:text-gray-300">Adding features and maintaining Kawaii Beauty
              Japan Website. Also working on several microsites for client campaign.</p>
          </div>
          <div class="text-gray-600 dark:text-gray-300 col-span-5 lg:col-span-1">2014–2015</div>
          <div class="col-span-5 lg:col-span-4">
            <h3 class="font-medium">Front End Web Developer</h3>
            <small class="text-sm text-gray-500 dark:text-gray-400">PT Media Makmur</small>
            <p class="mt-3 mb-9 lg:mb-5 text-gray-600 dark:text-gray-300">Designing front end interface for Kawaii
              Beauty Japan website. Tasks including: designing, creating HTML & Blade views.</p>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>