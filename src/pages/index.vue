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
              <label for="newsletter-email" class="block text-gray-600 dark:text-gray-300">Sent quarterly-ish.</label>
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
        <h2 class="font-medium mb-6">Selected Writing</h2>
        <div class="grid grid-cols-5 lg:gap-y-3">
          <div class="text-gray-600 dark:text-gray-300 col-span-5 lg:col-span-1">2018</div>
          <div class="col-span-5 lg:col-span-4">
            <h3><a href="#" class="underline"><i class="not-italic font-medium">Everything Easy is Hard Again</i></a>
            </h3>
            <small class="text-sm text-gray-500 dark:text-gray-400">Presented at Awwwards Conference in Berlin,
              Germany</small>
            <p class="mt-3 mb-9 lg:mb-5 text-gray-600 dark:text-gray-300">A talk about longevity in technology: can a
              person
              have 20 years of experience or five
              years, repeated
              four times?</p>
          </div>
          <div class="text-gray-600 dark:text-gray-300 col-span-5 lg:col-span-1">2015</div>
          <div class="col-span-5 lg:col-span-4">
            <h3><a href="#" class="underline"><i class="not-italic font-medium">The Web’s Grain</i></a>
            </h3>
            <small class="text-sm text-gray-500 dark:text-gray-400">Presented at Webstock in Wellington, New
              Zealand</small>
            <p class="mt-3 mb-9 lg:mb-5 text-gray-600 dark:text-gray-300">Is there deeper understanding in using a
              browser’s
              built-in affordances to guide web design decisions?</p>
          </div>
          <div class="text-gray-600 dark:text-gray-300 col-span-5 lg:col-span-1">2013</div>
          <div class="col-span-5 lg:col-span-4">
            <h3><a href="#" class="underline"><i class="not-italic font-medium">What Screens Wants</i></a>
            </h3>
            <small class="text-sm text-gray-500 dark:text-gray-400">Presented at Build in Belfast, N. Ireland</small>
            <p class="mt-3 mb-9 lg:mb-5 text-gray-600 dark:text-gray-300">Digital’s medium is the screen. What’s does it
              mean to
              natively design for this canvas?</p>
          </div>
          <div class="text-gray-600 dark:text-gray-300 col-span-5 lg:col-span-1">2012</div>
          <div class="col-span-5 lg:col-span-4">
            <h3><a href="#" class="underline"><i class="not-italic font-medium">The Shape of Design</i></a>
            </h3>
            <small class="text-sm text-gray-500 dark:text-gray-400">Purchase at Amazon or BuyOlympia (Support
              Indie!)</small>
            <p class="mt-3 lg:mb-5 text-gray-600 dark:text-gray-300">A little philosophical handbook about design
              and
              making things for others that focuses on the Why questions.</p>
          </div>
        </div>
      </section>
      <section>
        <h2 class="font-medium mb-6">Work Experience</h2>
        <div class="grid grid-cols-5 lg:gap-y-3">
          <div class="text-gray-600 dark:text-gray-300 col-span-5 lg:col-span-1">2022–Now</div>
          <div class="col-span-5 lg:col-span-4">
            <h3 class="font-medium">Head of Brand at Modern Treasury</h3>
            <small class="text-sm text-gray-500 dark:text-gray-400">NYC/SF & Remote</small>
            <p class="mt-3 mb-9 lg:mb-5 text-gray-600 dark:text-gray-300">Establishing the creative vision and visual
              tone for
              the fintech unicorn. Ship-steering, team-building, and strategic design swash-buckling.</p>
          </div>
          <div class="text-gray-600 dark:text-gray-300 col-span-5 lg:col-span-1">2020–2022</div>
          <div class="col-span-5 lg:col-span-4">
            <h3 class="font-medium">Creative Director at Fictive Kin</h3>
            <small class="text-sm text-gray-500 dark:text-gray-400">New York, NY & Remote</small>
            <p class="mt-3 mb-9 lg:mb-5 text-gray-600 dark:text-gray-300">Setting creative vision, providing design
              leadership,
              establishing process, and managing client relationships, while participating as an IC at a leading digital
              agency whose clients include Sweetgreen, Ogilvy, National Geographic, TripAdvisor, and Samsung.</p>
          </div>
          <div class="text-gray-600 dark:text-gray-300 col-span-5 lg:col-span-1">2017–2020</div>
          <div class="col-span-5 lg:col-span-4">
            <h3 class="font-medium">Self-employed Designer</h3>
            <small class="text-sm text-gray-500 dark:text-gray-400">New York, NY</small>
            <p class="mt-3 mb-9 lg:mb-5 text-gray-600 dark:text-gray-300">Design and consulting for early stage startups
              and
              established leaders at the intersection of brand and digital product. Clients included: Etsy, Meetup,
              Kaplan, Abstract, and many YC startups.</p>
          </div>
          <div class="text-gray-600 dark:text-gray-300 col-span-5 lg:col-span-1">2014–2017</div>
          <div class="col-span-5 lg:col-span-4">
            <h3 class="font-medium">Co-founder at Abstract</h3>
            <small class="text-sm text-gray-500 dark:text-gray-400">New York, NY</small>
            <p class="mt-3 mb-9 lg:mb-5 text-gray-600 dark:text-gray-300">The traditional set of founder
              responsibilities:
              setting vision, creating product definition, fundraising, and company leadership. Lead design across brand
              and product, and helped define the company’s go-to-market approach.</p>
          </div>
          <div class="text-gray-600 dark:text-gray-300 col-span-5 lg:col-span-1">2001–2014</div>
          <div class="col-span-5 lg:col-span-4">
            <h3 class="font-medium">
              Self-employed Designer</h3>
            <small class="text-sm text-gray-500 dark:text-gray-400">Portland, OR & New York, NY</small>
            <p class="mt-3 lg:mb-5 text-gray-600 dark:text-gray-300">Product design, web design, publication design,
              branding, and illustration. Clients include: Nike, Microsoft, NPR, Adobe, Facebook, <i>WIRED</i>,
              <i>Bloomberg
                Businessweek</i>, O’Reilly Media, <i>The Atlantic</i>, and Justin Bieber (sorta).
            </p>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>