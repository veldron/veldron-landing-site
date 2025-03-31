<script>
  let animate_team = false;
  import viewport from "./assets/js/useViewPort";
</script>

<div class="flex flex-col max-w-screen-2xl m-auto w-full">
  <div class="flex flex-col md:flex-row items-start justify-start">
    <div class="basis-3/4">
      <h1
        class="px-10 pt-16 pb-8 md:mt-20 text-4xl font-bold capitalize text-center text-black-500"
      >
        Expert-Driven Speed for Complex Technology Implementation
      </h1>
      <p class="text-xl px-10 m-auto text-center text-slate-500 max-w-3xl">
        Our deep expertise across modern tech stacks – including AI, LLMs, data
        platforms, and the newest frameworks – allows us to accelerate the
        development and management of intricate ICT solutions tailored for
        established businesses.
      </p>

      <div class="flex flex-row items-center justify-center mt-8">
        <a
          target="_blank"
          href="https://cal.com/insanebaba/short-meet"
          class="px-10 floating flex flex-row gap-3 py-4 font-bold text-white rounded-full bg-primary-dark
          hover:bg-primary"
        >
          Schedule a meeting <svg
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
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
    <div class="w-full basis-1/2">
      <img src="assets/images/Journey-amico.svg" alt="" />
    </div>
  </div>

  <div class="flex flex-col md:py-16 md:flex-row">
    <div class="basis-1/2">
      <div use:viewport on:enterViewport={() => (animate_team = true)}>
        {#if animate_team}
          <embed
            src="assets/images/team_collaboration.svg"
            id="freepik_stories-content-team"
            alt="Team Collaboration"
          />
        {/if}
      </div>
    </div>
    <div class=" basis-3/4 p-10 mt-5">
      <h1
        class="px-10 pt-16 pb-8 md:mt-20 text-4xl font-bold capitalize text-center text-black-500"
      >
        Mastering the Full Spectrum of Modern ICT
      </h1>
      <p class="text-xl px-10 m-auto text-center text-slate-500 max-w-3xl">
        From robust backend architectures and seamless frontend experiences to
        advanced data science, AI integration, and LLM fine-tuning using the
        latest frameworks – our expert teams rapidly deliver complex,
        enterprise-grade solutions.
      </p>
      <div class="flex flex-row items-center justify-center mt-8">
        <a
          target="_blank"
          href="https://cal.com/insanebaba/short-meet"
          class="flex flex-row items-center px-10 py-4 font-bold text-white
          rounded-full bg-primary-dark hover:bg-primary"
        >
          Explore
        </a>
      </div>
    </div>
  </div>
</div>
