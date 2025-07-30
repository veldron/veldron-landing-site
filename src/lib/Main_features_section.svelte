<script>
  let animate_team = false;
  import viewport from "../assets/js/useViewPort";
</script>

<div class="flex flex-col max-w-screen-2xl m-auto w-full">
  <div class="flex flex-col md:flex-row items-start justify-start">
    <div class="basis-3/4">
      <h1
        class="px-10 pt-16 pb-8 md:mt-20 text-4xl font-bold capitalize text-center text-black-500"
      >
        Why Small Businesses Choose AI Agents
      </h1>
      <p class="text-xl px-10 m-auto text-center text-slate-500 max-w-3xl">
        Stop losing customers to slow response times and repetitive tasks. Our AI agents work around the clock 
        to handle customer inquiries, qualify leads, and automate your busiest processes - giving you time to focus on growing your business.
      </p>

      <div class="flex flex-row items-center justify-center mt-8">
        <a
          target="_blank"
          href="https://cal.com/insanebaba/short-meet"
          class="px-10 floating flex flex-row gap-3 py-4 font-bold text-white rounded-full bg-primary-dark
          hover:bg-primary"
        >
          See AI Agents in Action <svg
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
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
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
        Complete AI Agent Implementation for SMBs
      </h1>
      <p class="text-xl px-10 m-auto text-center text-slate-500 max-w-3xl">
        From initial consultation to full deployment, we handle everything. Get custom AI agents 
        that integrate seamlessly with your existing tools and processes - no technical expertise required on your end.
      </p>
      <div class="flex flex-row items-center justify-center mt-8">
        <a
          target="_blank"
          href="https://cal.com/insanebaba/short-meet"
          class="flex flex-row items-center px-10 py-4 font-bold text-white
          rounded-full bg-primary-dark hover:bg-primary"
        >
          Start Your AI Transformation
        </a>
      </div>
    </div>
  </div>
</div>
