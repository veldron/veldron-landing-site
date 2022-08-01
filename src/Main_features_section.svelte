<script>
  let animate_team = false;
  import viewport from "./assets/js/useViewPort";
</script>

<div class="flex flex-col max-w-screen-2xl m-auto w-full">
  <div class="flex flex-col md:flex-row items-start justify-start ">
    <div class="basis-3/4">
      <!-- <h2 class="py-12 text-2xl m-auto text-center text-black-500">PERFECT DESIGN</h2> -->
      <h1
        class="px-10 py-16 md:mt-20 text-4xl font-bold capitalize text-center
        text-black-500"
      >
        Bring your dream, get your digital Product
      </h1>
      <p class="text-xl px-10 m-auto text-center text-slate-500">
        You have a product in mind. You know how it should look, feel and work.
        You're welcome to manifest it to reality with us.
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
      <h3 class="py-12 text-xl font-bold text-left text-black-500">
        Team Collaboration
      </h3>
      <h1
        class="py-4 text-3xl font-bold text-center text-black-500 md:text-4xl"
      >
        Our teams help you in every phase of your startup
      </h1>
      <span class="py-4 text-xl mt-7 text-zinc-500 md:text-2xl text-justify">
        Our Teams have diverse skills and experience in the field of product
        development. We have a team of experts who can help you in every phase
        of your startup, from ideation to product launch, from pitch decks to
        marketing strategies. No stone is left unturned in making your product a
        success.
      </span>
      <div class="flex flex-row items-center justify-center mt-8">
        <button
          class="flex flex-row items-center px-10 py-4 font-bold text-white
          rounded-full bg-primary-dark hover:bg-primary"
        >
          Explore
        </button>
      </div>
    </div>
  </div>
</div>

<style>
  .floating {
    animation-name: floating;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    margin-left: 30px;
    margin-top: 5px;
  }

  @keyframes floating {
    from {
      transform: translate(0, 0px);
    }
    65% {
      transform: translate(0, 15px);
    }
    to {
      transform: translate(0, -0px);
    }
  }
  svg#freepik_stories-content-team:not(.animated) .animable {
    opacity: 0;
  }
  svg#freepik_stories-content-team.animated #freepik--Floor--inject-55 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) zoomIn;
    animation-delay: 0s;
  }
  svg#freepik_stories-content-team.animated #freepik--Shadows--inject-55 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) fadeIn;
    animation-delay: 0s;
  }
  svg#freepik_stories-content-team.animated #freepik--character-2--inject-55 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) lightSpeedLeft;
    animation-delay: 0s;
  }
  svg#freepik_stories-content-team.animated #freepik--character-1--inject-55 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) lightSpeedLeft;
    animation-delay: 0s;
  }
  svg#freepik_stories-content-team.animated #freepik--Table--inject-55 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideRight;
    animation-delay: 0s;
  }
  svg#freepik_stories-content-team.animated #freepik--Target--inject-55 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideUp;
    animation-delay: 0s;
  }
  svg#freepik_stories-content-team.animated #freepik--character-3--inject-55 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) zoomOut;
    animation-delay: 0s;
  }
  svg#freepik_stories-content-team.animated
    #freepik--speech-bubbles--inject-55 {
    animation: 1s 1 forwards cubic-bezier(0.36, -0.01, 0.5, 1.38) slideUp;
    animation-delay: 0s;
  }
  @keyframes zoomIn {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes lightSpeedLeft {
    from {
      transform: translate3d(-50%, 0, 0) skewX(20deg);
      opacity: 0;
    }
    60% {
      transform: skewX(-10deg);
      opacity: 1;
    }
    80% {
      transform: skewX(2deg);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes slideRight {
    0% {
      opacity: 0;
      transform: translateX(30px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes slideUp {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: inherit;
    }
  }
  @keyframes zoomOut {
    0% {
      opacity: 0;
      transform: scale(1.5);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
</style>
