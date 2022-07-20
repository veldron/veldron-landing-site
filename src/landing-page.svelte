<script>
  import Feature_2_section from './Feature_2_section.svelte';

  import Footer_section from './Footer_section.svelte'

  import Main_features_section from './Main_features_section.svelte'

  import Clients_section from './Clients_section.svelte'

  import Features_section from './Features_section.svelte'

  import Navigation_sections from './Navigation_sections.svelte'

  import Hero_section from './Hero_section.svelte'
</script>

<div class="font-serif">
  <Navigation_sections />
  <div class="w-full ">
    <!-- container max-w-lg -->
    <!-- hero page -->
    <Hero_section />

    <!-- <div>
        <img src="https://oliver-tailwind.netlify.app/assets/images/home_side.png" alt="">
      </div> -->
    <!-- <h1
        class="px-10 py-12 text-4xl font-bold text-center text-black-500 md:text-5xl">
        Explore About Our Awesome Features
      </h1> -->

    <Main_features_section />

    <Features_section />

    <Clients_section />

    <Feature_2_section></Feature_2_section>
    <div class="items-center m-10 md:py-44 md:px-52">
      <div class="flex flex-row justify-center w-full" />
      <h1 class="mt-8 text-5xl font-bold text-center text-black-500">
        Hosts Like You, Worldwide
      </h1>
      <p class="mt-5 text-xl text-zinc-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum
        modi, adipisci facilis.
      </p>
      <!-- Rating cards -->
      <div
        class="flex flex-col items-center justify-center py-8 space-x-16 md:flex-row ">
        <div class="max-w-sm ml-16 overflow-hidden rounded shadow-lg md:mt-8">
          <div class="p-12 border-2 ">
            <div class="mb-2 text-xl font-bold">4.92/5</div>
            <p class="text-base text-gray-700">Average ratings</p>
          </div>
        </div>
        <div class="max-w-sm mt-8 overflow-hidden rounded shadow-lg">
          <div class="p-12 border-2">
            <div class="mb-2 text-xl font-bold">260K+</div>
            <p class="text-base text-gray-700">Monthly Installs</p>
          </div>
        </div>
        <div class="max-w-sm mt-8 overflow-hidden rounded shadow-lg">
          <div class="flex flex-col items-center justify-center p-12 border-2">
            <div class="mb-2 text-xl font-bold">40K+</div>
            <p class="text-base text-gray-700">Weekly Downloads</p>
          </div>
        </div>
        <div class="max-w-sm mt-8 overflow-hidden rounded shadow-lg">
          <div class="flex flex-col items-center justify-center p-12 border-2">
            <div class="mb-2 text-xl font-bold">4.9M</div>
            <p class="text-base text-gray-700">Total Downloads</p>
          </div>
        </div>
      </div>
    </div>
    <div class="py-40 rounded-lg bg-primary-dark">
      <h1 class="text-5xl font-bold text-center text-white md:text-7xl">
        We’re Ready for a Challenging Project
      </h1>
      <p class="py-10 text-xl text-center text-white text-black-500 m-7">
        The point of using Lorem Ipsum is that opposed to using 'Content here,
        content here', making it look like readable English.
      </p>
      <div class="flex flex-row items-center justify-center w-full">
        <button
          class="max-w-sm px-4 py-2 font-bold bg-white rounded-full text-black-500">
          start trial free
        </button>
      </div>
    </div>
    <div class="py-20 ml-8 ">
      <h1 class="text-5xl font-bold text-center">
        How Easy Is It To Get Started?
      </h1>
      <p class="py-10 text-xl text-center text-slate-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum
        modi, adipisci facilis.
      </p>

      <div class="flex flex-col ml-20 space-x-10 md:flex-row">
        <div class="ml-10">
          <button
            class="items-center py-3 font-bold text-white rounded-full bg-primary-dark hover:bg-primary px-14">
            Step1
          </button>
          <h1 class="py-3 text-2xl font-bold">Design & Devloping</h1>
          <p class=" text-slate-500 md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div>
          <button
            class="items-center py-3 font-bold text-white rounded-full bg-primary-dark hover:bg-primary px-14">
            Step2
          </button>
          <h1 class="py-3 text-2xl font-bold">Testing Project</h1>
          <p class=" text-slate-500 md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div>
          <button
            class="items-center py-3 font-bold text-white rounded-full bg-primary-dark hover:bg-primary px-14">
            Step3
          </button>
          <h1 class="py-3 text-2xl font-bold">Publisher Project</h1>
          <p class=" text-slate-500 md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
    <div class="py-56 ml-8">
      <h1 class="text-5xl font-bold text-center">Oliver Is Loved By Users</h1>
      <p class="py-10 text-2xl text-center text-slate-500 text-black-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum
        modi, adipisci facilis.
      </p>
      <!-- create cards -->
    </div>
    <div class="ml-8">
      <h1 class="text-5xl font-bold text-center">
        Find A Plan That Works For You
      </h1>
      <p class="py-10 text-xl text-center text-slate-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum
        modi, adipisci facilis.
      </p>
      <div class="mt-16 space-x-8 ">
        <div
          class="flex flex-col md:flex-row md:items-between md:justify-between">
          <div class="max-w-sm overflow-hidden rounded shadow-2xl">
            <div class="px-20 py-20">
              <div class="mb-2 text-3xl font-bold">Basic</div>
              <p class="py-16 text-xl text-gray-700 ">
                Start building beautiful websites.
              </p>
              <button
                class="items-center py-3 font-bold text-white rounded-full bg-primary-dark hover:bg-primary px-14">
                Choose Now
              </button>
              <div class="py-6 ">
                <h1 class="mb-2 text-4xl font-bold">$/199</h1>
                <p class="text-2xl text-gray-700">Price Includes GST.</p>
              </div>
            </div>
          </div>
          <div class="mt-6">
            <div class="max-w-sm overflow-hidden rounded shadow-2xl">
              <div class="px-20 py-20">
                <div class="mb-2 text-3xl font-bold">Professional</div>
                <p class="py-16 text-xl text-gray-700">
                  Start building beautiful websites.
                </p>
                <button
                  class="items-center py-3 font-bold text-white rounded-full bg-primary-dark hover:bg-primary px-14">
                  Choose Now
                </button>
                <div class="py-6 ">
                  <h1 class="mb-2 text-4xl font-bold">$/299</h1>
                  <p class="text-2xl text-gray-700">Price Includes GST.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-6">
            <div class="max-w-sm overflow-hidden rounded shadow-2xl">
              <div class="px-20 py-20">
                <div class="mb-2 text-3xl font-bold">Ultimate</div>
                <p class="py-10 text-xl text-gray-700 md:py-16">
                  Start building beautiful websites.
                </p>
                <button
                  class="items-center py-3 font-bold text-white rounded-full bg-primary-dark hover:bg-primary px-14">
                  Choose Now
                </button>
                <div class="py-6 ">
                  <h1 class="mb-2 font-bold md:text-4xl">$/399</h1>
                  <p class="text-2xl text-gray-700">Price Includes GST.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10 rounded-lg bg-primary-dark">
      <h1 class="py-20 text-5xl font-bold text-center text-white ">
        Contact Our Sales Team
      </h1>

      <p class="text-xl text-center text-white ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum
        modi, adipisci facilis.
      </p>
      <!-- registration form -->

      <div class="flex flex-row items-center justify-center mt-10 ">
        <form
          action=""
          class="bg-white rounded-lg outline-double outline-stone-400">
          <div class="mt-4">
            <div class="flex flex-row space-x-10">
              <div>
                <label class="block" for="Name">
                  Name
                  <label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                  </label>
                </label>
              </div>
              <div class="mt-4">
                <label class="block" for="email">
                  Email
                  <label>
                    <input
                      type="text"
                      placeholder="Your Email"
                      class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                  </label>
                </label>
              </div>
            </div>
            <div class="mt-4">
              <label class="block">
                Subject
                <label>
                  <input
                    type="subject"
                    placeholder="Your Subject"
                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                </label>
              </label>
            </div>
            <div class="mt-4">
              <label class="block">
                Message
                <label>
                  <input
                    type="message"
                    placeholder="Your Message"
                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                </label>
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="flex flex-row items-center justify-center w-full">
      <button
        class="max-w-sm px-4 py-2 font-bold text-white rounded-lg bg-primary-dark hover:bg-purple-600 text-black-500">
        Send Message
      </button>
    </div>

    <div
      class="flex flex-col justify-between px-6 py-40 ml-20 space-x-10 md:flex-row items-between pl-9">
      <div class="">
        <h1 class="py-3 ml-10 text-2xl font-bold md:mt-10">Email</h1>
        <p class="ml-10 text-xl text-slate-500">information@gmail.com</p>
      </div>
      <div class="mt-7">
        <h1 class="py-3 text-2xl font-bold">Telephone</h1>
        <p class="text-xl text-slate-500">+(485) 874 249 23</p>
      </div>
      <div class="mt-7">
        <h1 class="py-3 text-2xl font-bold">Business Hours</h1>
        <p class="text-xl text-slate-500">Monday To Friday</p>
        <p class="text-xl text-slate-500">9:00am To 6:00pm (GMT)</p>
      </div>
    </div>

    <Footer_section />


  </div>
</div>
