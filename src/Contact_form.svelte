<div class="mt-10 rounded-lg bg-primary-dark">
  <h1 class="pt-20 text-5xl font-bold text-center text-white ">Contact Us</h1>

  <!-- <p class="text-xl text-center text-white ">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum
    modi, adipisci facilis.
  </p> -->
  <!-- registration form -->

  <div class="flex flex-row items-center justify-center  py-20 ">
    <form
      action=""
      class="bg-white p-20 text-xl rounded-lg outline-double outline-stone-400"
    >
      <div class="mt-4">
        <div class="flex flex-row space-x-10">
          <div>
            <label for="email" class="block py-3 text-gray-500"> Name </label>
            <div class="flex items-center p-2 pl-5 border rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-gray-400  h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
              <input
                type="text"
                placeholder="John Doe"
                id="name"
                class="w-full p-1 ml-3 text-gray-500 focus:ring-primary outline-none bg-transparent"
              />
            </div>
          </div>
          <div>
            <div>
              <label for="email" class="block py-3 text-gray-500">
                Email
              </label>
              <div class="flex items-center p-2 pl-5 border rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-gray-400 w-7 h-7"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                  />
                  <path
                    d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                  />
                </svg>
                <input
                  type="email"
                  placeholder="name@mail.com"
                  id="email"
                  class="w-full p-1 ml-3 text-gray-500 focus:ring-primary outline-none bg-transparent"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <div>
            <label for="email" class="block py-3 text-gray-500">
              Subject
            </label>
            <div
              class="flex items-center focus:ring-primary pl-5  p-2 border rounded-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-gray-400 h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
              <input
                type="text"
                placeholder="Here's my idea"
                id="subject"
                class="w-full p-1 ml-3 text-gray-500 focus:ring-primary outline-none bg-transparent"
              />
            </div>
          </div>
        </div>
        <div class="mt-4">
          <div>
            <label for="message" class="block py-3 text-gray-500">
              Subject
            </label>
            <div
              class="flex items-start focus:ring-primary pl-5 p-2 border rounded-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray-400 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <textarea
                type="text"
                rows="4"
                placeholder="My message is ...."
                id="message"
                class="w-full p-1 ml-3 text-gray-500 focus:ring-primary outline-none bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row mt-8 items-center justify-center w-full">
        <button
          class="max-w-sm px-4 py-2 font-bold text-white rounded-lg bg-primary-dark hover:bg-primary-light text-black-500"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
</div>
