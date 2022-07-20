<script>
  import Choose_now_cards from './Choose_now_cards.svelte';

  import Feature_6_section from './Feature_6_section.svelte';

  import Feature_5_section from './Feature_5_section.svelte';

  import Feacture_4_section from './Feacture_4_section.svelte';

  import Feacture_3_section from './Feacture_3_section.svelte';

  import Feature_2_section from './Feature_2_section.svelte';

  import Footer_section from './Footer_section.svelte'

  import Main_features_section from './Main_features_section.svelte'

  import Clients_section from './Clients_section.svelte'

  import Features_section from './Features_section.svelte'

  import Navigation_sections from './Navigation_sections.svelte'

  import Hero_section from './Hero_section.svelte'
</script>

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
          class="bg-white p-20 text-xl rounded-lg outline-double outline-stone-400">
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
              <div>
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
    <div class="flex flex-row items-center mt-6 justify-center w-full">
      <button
        class="max-w-sm px-4 py-2 font-bold text-white rounded-lg bg-primary-dark hover:bg-blue-600 text-black-500">
        Send Message
      </button>
    </div>

