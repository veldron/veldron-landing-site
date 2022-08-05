<script>
  import SvelteSeo from "svelte-seo";
  import Feature_1 from "./lib/image_components/feature_1.svelte";
</script>

<SvelteSeo
  title="Veldron - Equity to MVP"
  description="Veldron is a fast and reliable consultancy to get your MVP ready
  within record time at a fraction of equity. We believe in you as much as you
  believe in your startup."
/>
<div class="flex flex-col items-center justify-center  md:flex-row">
  <div class="md:basis-3/4">
    <div
      class="flex flex-col items-center m-auto  max-w-7xl md:p-8 lg:px-32"
    >
      <h1 class="p-8 text-5xl font-bold tracking-wide text-center text-black-500 md:text-6xl font-Zodiak">
        Get your
        <span class="p-2 leading-4 text-primary-dark ">MVP</span>
        <br/>
        to
        <span class="p-2 leading-4 text-primary-dark text-bold">Market</span>
        <br/>
        in Record Time ⚡⚡
      </h1>
      <span class="p-4 mt-2 text-xl text-center text-slate-700 ">
        Veldron is a fast and reliable consultancy to get your MVP ready within
        record time at a fraction of equity. We believe in you as much as you
        believe in your startup.
      </span>
      <div>
        <div class="">
          <div
            class="container flex flex-row items-center justify-center mt-3 md:mt-20 space-x-5"
          >
            <!-- <button
                  class="items-center px-4 py-2 font-bold text-white rounded-full  bg-primary-dark hover:bg-primary md:py-3 md:px-14">
                  Get Started
                </button> -->
            <div class="flex flex-col gap-4 md:flex-row">
              <!-- <div class="relative">
                <div class="absolute top-4 left-3">
                  <i class="z-20 text-gray-400 fa fa-search hover:text-gray-500" />
                </div>
                <input
                  type="text"
                  class="z-0 pl-10 pr-20 border-gray-900 rounded-full shadow-xl h-14 w-96 focus:shadow focus:outline-none"
                  placeholder="Email......." />
                <div class="absolute top-2 right-2">
                  <button
                    class="px-5 py-2 font-bold text-white rounded-full  bg-primary-dark hover:bg-primary">
                    Contact me
                  </button>
                </div>
              </div> -->
              <a
                target="_blank"
                href="https://cal.com/insanebaba/short-meet"
                class="flex flex-row items-center justify-center w-full gap-4 px-8 py-2 font-bold text-center text-white rounded-full h-14 bg-primary-dark hover:bg-primary"
              >
                Book a meeting <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="h-54 md:basis-1/2">
    <Feature_1 />
  </div>
</div>
