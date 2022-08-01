<div class="mt-10 rounded-lg bg-primary-dark">
  <h1 class="pt-20 text-5xl font-bold text-center text-white ">Contact Us</h1>

  <!-- <p class="text-xl text-center text-white ">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum
    modi, adipisci facilis.
  </p> -->
  <!-- registration form -->

  <div class="flex flex-row items-center justify-center py-20 ">
    <form class="w-full max-w-lg">
      <div class="flex flex-wrap ">
        <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-white uppercase"
            for="grid-first-name"
          >
            First Name
          </label>
          <input
            class="block w-full px-4 py-3 mb-3 leading-tight text-white bg-gray-200 rounded appearance-none focus:outline-none focus:bg-primary-light"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
          <!-- <p class="text-xs italic text-red-500">Please fill out this field.</p> -->
        </div>
        <div class="w-full px-3 md:w-1/2">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-white uppercase"
            for="grid-last-name"
          >
            Last Name
          </label>
          <input
            class="block w-full px-4 py-3 leading-tight text-white bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-primary-light focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
          />
        </div>
      </div>
      <div class="flex flex-wrap ">
        <div class="w-full px-3">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-white uppercase"
            for="grid-password"
          >
            E-mail
          </label>
          <input
            class="block w-full px-4 py-3 mb-3 leading-tight text-white bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-primary-light focus:border-gray-500"
            id="email"
            placeholder="name@email.com"
            type="email"
          />
          <!-- <p class="text-xs italic text-gray-600">Some tips - as long as needed</p> -->
        </div>
      </div>
      <div class="flex flex-wrap ">
        <div class="w-full px-3">
          <label
            class="block mb-2 text-xs font-bold tracking-wide text-white uppercase"
            for="grid-password"
          >
            Message
          </label>
          <textarea
            class="block w-full h-48 px-4 py-3 mb-3 leading-tight text-white bg-gray-200 border border-gray-200 rounded appearance-none resize-none no-resize focus:outline-none focus:bg-primary-light focus:border-gray-500"
            id="message"
          />
          <!-- <p class="text-xs italic text-gray-600">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p> -->
        </div>
      </div>
      <div class="md:flex md:items-center md:flex-row md:justify-center ">
        <div class="rounded bg-primary hover:bg-primary-light">
          <button
            class="px-4 py-2 font-bold text-white rounded focus:shadow-outline focus:outline-none text-center"
            type="submit"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  </div>
</div>
