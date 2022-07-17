<script>

  import Hero_section from './Hero_section.svelte';
</script>

<nav
    class="flex flex-col md:flex-row sticky top-0 bg-gray-100 shadow-lg w-full
    z-10 items-center justify-between px-24 py-8 ">
    <!-- max-w-screen-xl mx-auto -->
    <p class="text-4xl font-bold tracking-wide mt-3">Veldron</p>
    <div />
    <ul
      class="flex mt-10 md:mt-0 items-center justify-center font-bold text-2xl
      flex-col md:flex-row md:space-x-8">
      <li
        class="hover:text-primary-dark hover:underline hover:underline-offset-8
        cursor-pointer">
        Home
      </li>
      <li
        class="hover:text-primary-dark hover:underline hover:underline-offset-8
        cursor-pointer">
        Feature
      </li>
      <li
        class="hover:text-primary-dark hover:underline hover:underline-offset-8
        cursor-pointer">
        Client
      </li>
      <li
        class="hover:text-primary-dark hover:underline hover:underline-offset-8
        cursor-pointer">
        Price
      </li>
      <li
        class="hover:text-primary-dark hover:underline hover:underline-offset-8
        cursor-pointer">
        Contact
      </li>
    </ul>
  </nav>

