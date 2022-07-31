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
<div class=" flex flex-row items-center justify-center">
  <div class="basis-1/2">
    <div
      class=" flex flex-col max-w-7xl m-auto items-center p-8 md:p-16
      lg:px-52"
    >
      <h1 class="text-black-500 md:text-6xl text-5xl font-bold text-center">
        Get your
        <span class="text-primary-dark">MVP</span>
        to
        <span class="text-primary-dark text-bold">Market</span>
        in Record Time ⚡⚡
      </h1>
      <span class="text-center text-slate-700 text-xl mt-2 font-Zodiak">
        Veldron is a fast and reliable consultancy to get your MVP ready within
        record time at a fraction of equity. We believe in you as much as you
        believe in your startup.
      </span>
      <div>
        <div class=" ">
          <div
            class="container flex flex-row justify-center mt-20 items-center
            space-x-5"
          >
            <!-- <button
                  class=" bg-primary-dark hover:bg-primary items-center
                  text-white font-bold md:py-3 md:px-14 py-2 px-4 rounded-full">
                  Get Started
                </button> -->
            <div class="flex flex-col md:flex-row gap-4">
              <!-- <div class="relative">
                <div class="absolute top-4 left-3">
                  <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500" />
                </div>
                <input
                  type="text"
                  class="h-14 w-96 pl-10 pr-20 rounded-full shadow-xl
                  border-gray-900 z-0 focus:shadow focus:outline-none"
                  placeholder="Email......." />
                <div class="absolute top-2 right-2">
                  <button
                    class=" bg-primary-dark hover:bg-primary text-white font-bold
                    py-2 px-5 rounded-full">
                    Contact me
                  </button>
                </div>
              </div> -->
              <a
                target="_blank"
                href="https://cal.com/insanebaba/short-meet"
                class="flex h-14 text-center items-center flex-row justify-center w-full gap-4 bg-primary-dark hover:bg-primary text-white font-bold
                  py-2 px-8 rounded-full"
              >
                Book a meeting <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
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
  <div class="basis-1/2">
    <Feature_1 />
  </div>
</div>
