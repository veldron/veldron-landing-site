<script>
  import credits from "/public/assets/data/credits.json";
  export let open = false;
</script>

<footer
  class="flex flex-col items-center justify-center w-full max-w-screen-xl p-4 m-auto bg-white rounded-lg shadow md:flex-row md:items-center md:justify-between md:p-6 "
>
  <span class="text-sm text-gray-500 sm:text-center ">
    © 2022
    <a href="https://veldron.com/" class="hover:underline">Veldron</a>
    . All Rights Reserved.
  </span>
  <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 sm:mt-0">
    <li>
      <a href="/#" class="mr-4 hover:underline md:mr-6 ">About</a>
    </li>
    <li>
      <a href="/#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
    </li>
    <li>
      <a
        target="_blank"
        href="https://cal.com/insanebaba/short-meet"
        class="hover:underline">Contact</a
      >
    </li>
  </ul>
</footer>
<div
  class="flex flex-col items-center w-full max-w-screen-xl p-4 m-auto text-xs bg-white md:p-6 md:flex-row md:justify-between"
>
  <button on:click={() => (open = true)}>Image Credits</button>
</div>

<div
  class:hidden={!open}
  class="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full p-8 modal lg:p-0"
>
  <div class="fixed w-full h-full bg-gray-900 opacity-50 modal-overlay" />
  <div
    class="z-50 w-full mx-auto overflow-y-auto bg-white rounded-lg shadow-xl lg:h-max lg:w-1/2"
  >
    <div class="px-8 py-5 text-2xl font-extrabold bg-gray-100 head">
      Image Credits
    </div>
    <div class="p-8 content">
      <!-- for each element in credits render them -->
      {#each credits.credits as credit}
        <p class="mb-4">
          {@html credit}
        </p>
      {/each}
    </div>
    <div class="flex items-center justify-center w-full p-12 flex-ro">
      <button
        class="p-4 m-auto text-white border rounded-lg  bg-primary-light hover:bg-primary-dark"
        on:click={() => (open = false)}>close</button
      >
    </div>
  </div>
</div>
