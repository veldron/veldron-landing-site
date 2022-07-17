<script>
  import Navigation_sections from './Navigation_sections.svelte'

  import Hero_section from './Hero_section.svelte'
</script>

<section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div
            class="max-w-screen-md mb-8 lg:mb-16 justify-center items-center
            flex flex-col m-auto">
            <h2
              class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900
              dark:text-white">
              Designed for startups, like yours
            </h2>
            <p class="text-gray-500 text-center sm:text-xl dark:text-gray-400">
              <span>
                Here at Veldron we focus on startup markets where we can use
                technology, innovation and marketing to unlock full potential
              </span>
            </p>
          </div>
          <div
            class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12
            md:space-y-0">
            <div>
              <div
                class="flex justify-center items-center mb-4 w-10 h-10
                rounded-full bg-primary lg:h-12 lg:w-12 dark:bg-primary-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  stroke-width="2">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002
                    2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>

              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Product</h3>
              <p class="text-gray-500 dark:text-gray-400">
                Plan it, get it, launch it. Collaborate seamlessly with all the
                organization and hit your marketing goals every month with our
                marketing plan.
              </p>
            </div>
            <div>
              <div
                class="flex justify-center items-center mb-4 w-10 h-10
                rounded-full bg-primary lg:h-12 lg:w-12 dark:bg-primary-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  stroke-width="2">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343
                    2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0
                    0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0
                    0118 0z" />
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Affordable</h3>
              <p class="text-gray-500 dark:text-gray-400">
                With Veldron, you don't have to pay to development, programming,
                or product design. You don't pay for developer management or
                product owner. We take care of those things. You only pay for
                the infrastructure like site hosting, domain name, email and
                cloud storage.
              </p>
            </div>
            <div>
              <div
                class="flex justify-center items-center mb-4 w-10 h-10
                rounded-full bg-primary lg:h-12 lg:w-12 dark:bg-primary-dark">
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12.8345 3.16228C12.8911 3.11941 12.9406 3.06928 12.9821
                    3.01371L15.5437 3.01371C15.5556 3.01371 15.5674 3.01343
                    15.5793 3.01287C15.7492 3.0048 15.9191 3.00485 16.0884
                    3.01287C16.1002 3.01343 16.1121 3.01371 16.1239
                    3.01371H16.1622C16.7372 3.01371 17.2807 3.13977 17.7684
                    3.36505C17.7813 3.37102 17.7944 3.37661 17.8076
                    3.38184C18.7252 3.74393 19.5443 4.36082 20.1474
                    5.20428C21.0565 6.4756 21.34 8.06951 20.9522 9.55242L17.6706
                    6.31483C17.5303 6.17636 17.3411 6.09873 17.1439
                    6.09873L12.3991 6.09873C12.3889 6.09873 12.3787 6.09894
                    12.3685 6.09935C12.2158 6.10558 12.0684 6.15834 11.9462
                    6.25093L10.0616 7.67873C10.0085 7.71898 9.95251 7.75291
                    9.89456 7.78064C9.48892 7.97478 8.98739 7.86539 8.70382
                    7.49495C8.66353 7.44232 8.62954 7.38691 8.60174
                    7.3296C8.40712 6.92844 8.51546 6.43454 8.88527
                    6.15436L12.8345 3.16228Z"
                    fill="white" />
                  <path
                    d="M7.89848 14.2357L7.88524 14.2487L6.91116 15.2166L6.89837
                    15.2294C6.54534 15.5663 5.98426 15.562 5.63654
                    15.2165C5.28444 14.8667 5.28444 14.2995 5.63654
                    13.9496L6.61062 12.9818C6.96272 12.6319 7.53358 12.6319
                    7.88568 12.9818C8.23346 13.3273 8.23772 13.885 7.89848
                    14.2357Z"
                    fill="white" />
                  <path
                    d="M7.60772 15.9344C7.26849 16.2852 7.27276 16.8428 7.62053
                    17.1883C7.97263 17.5382 8.5435 17.5382 8.8956
                    17.1883L9.86967 16.2205C10.2218 15.8706 10.2218 15.3034
                    9.86967 14.9536C9.82621 14.9104 9.77941 14.8725 9.7301
                    14.84C9.38493 14.6123 8.91673 14.6459 8.60783
                    14.9407L8.59505 14.9535L7.62097 15.9214L7.60772 15.9344Z"
                    fill="white" />
                  <path
                    d="M5.50058 11.4079C5.85268 11.7578 5.85268 12.325 5.50058
                    12.6748L4.5265 13.6427C4.1744 13.9925 3.60354 13.9925
                    3.25144 13.6427C2.89934 13.2928 2.89934 12.7256 3.25144
                    12.3758L4.22552 11.4079C4.57761 11.0581 5.14848 11.0581
                    5.50058 11.4079Z"
                    fill="white" />
                  <path
                    d="M11.8542 16.9253C12.2063 17.2752 12.2063 17.8424 11.8542
                    18.1922L10.8801 19.1601C10.8078 19.2318 10.7264 19.2889
                    10.6395 19.3312C10.303 19.4952 9.88489 19.4381 9.60502
                    19.1601C9.32515 18.882 9.26774 18.4666 9.43277
                    18.1322L9.43404 18.1296C9.4765 18.0443 9.5335 17.9642
                    9.60502 17.8932L10.5791 16.9253C10.9312 16.5755 11.5021
                    16.5755 11.8542 16.9253Z"
                    fill="white" />
                  <path
                    d="M5.3439 4.83107C6.73954 3.44435 8.63783 2.86145 10.456
                    3.08238L7.97943 4.95876C6.89415 5.78101 6.68509 7.32557
                    7.51275 8.40674C8.33862 9.48558 9.88451 9.69482 10.9675
                    8.87433L12.6511 7.59873L16.8362 7.59873L20.3426
                    11.0581C20.3538 11.0719 20.3658 11.0853 20.3786
                    11.0981L21.5285 12.2481C22.0903 12.8099 22.0903 13.7207
                    21.5285 14.2825C20.9987 14.8123 20.1585 14.8425 19.5934
                    14.3731L19.4971 14.2768C19.4781 14.2578 19.458 14.2407
                    19.437 14.2254L18.3441 13.1326C18.1488 12.9373 17.8323
                    12.9373 17.637 13.1326C17.4417 13.3278 17.4417 13.6444
                    17.637 13.8397L18.787 14.9896C18.8286 15.0312 18.8713 15.071
                    18.915 15.109L18.9589 15.1528C19.3568 15.5508 19.3568 16.196
                    18.9589 16.594C18.5609 16.992 17.9156 16.992 17.5177
                    16.594L17.3488 16.4251C17.1535 16.2298 16.8369 16.2298
                    16.6417 16.4251C16.5415 16.5252 16.4928 16.6572 16.4953
                    16.7884C16.4924 16.9201 16.5411 17.0527 16.6416
                    17.1532L16.8646 17.3762C17.2327 17.7443 17.2327 18.3411
                    16.8646 18.7092C16.4965 19.0773 15.8997 19.0773 15.5316
                    18.7092L15.5305 18.7081L15.5188 18.6962L15.3087
                    18.4862C15.2363 18.4137 15.1471 18.3681 15.0536
                    18.3495C14.8951 18.3178 14.7243 18.3633 14.6015
                    18.4862C14.4063 18.6814 14.4063 18.998 14.6015
                    19.1933L14.8199 19.4117C15.1869 19.7876 15.1842 20.3898
                    14.8117 20.7623C14.4431 21.1308 13.848 21.1384 13.4702
                    20.7793L12.0386 19.4187L12.5635 18.8971C13.3074 18.1579
                    13.3074 16.9596 12.5635 16.2205C12.1709 15.8303 11.6495
                    15.6461 11.1352 15.6679C11.1571 15.1569 10.9717 14.6389
                    10.579 14.2487C10.1865 13.8587 9.66531 13.6745 9.15123
                    13.6961C9.17308 13.1852 8.98769 12.6671 8.59505
                    12.277C8.09544 11.7805 7.38733 11.6175 6.7508
                    11.7879C6.69714 11.3912 6.51686 11.008 6.20995
                    10.7031C5.52351 10.021 4.44351 9.96838 3.6963
                    10.5451C3.23454 8.55553 3.78374 6.38124 5.3439 4.83107Z"
                    fill="white" />
                </svg>

              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">
                Continous Collaboration
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                We collaborate with our clients to ensure that we deliver the
                MVP that they need. We have regular meetings, deployments, and
                code reviews to ensure that we are always on the same page with
                our clients.
              </p>
            </div>
            <div>
              <div
                class="flex justify-center items-center mb-4 w-10 h-10
                rounded-full bg-primary lg:h-12 lg:w-12 dark:bg-primary-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  stroke-width="2">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Speed</h3>
              <p class="text-gray-500 dark:text-gray-400">
                We believe, an MVP delayed is an MVP lost. If you don't reach
                market in time, you probably never will. That's why we built
                Veldron to focus and prioritise speed delivery of MVP to our
                clients.
              </p>
            </div>
            <div>
              <div
                class="flex justify-center items-center mb-4 w-10 h-10
                rounded-full bg-primary lg:h-12 lg:w-12 dark:bg-primary-dark">
                <svg
                  class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6
                  dark:text-primary-300"
                  fill="white"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1
                    0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2
                    2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">
                Enterprise Design
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                Craft beautiful, delightful experiences for both marketing and
                product with real cross-company collaboration.
              </p>
            </div>
            <div>
              <div
                class="flex justify-center items-center mb-4 w-10 h-10
                rounded-full bg-primary lg:h-12 lg:w-12 dark:bg-primary-dark">
                <svg
                  class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6
                  dark:text-primary-300"
                  fill="white"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0
                    01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061
                    2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0
                    01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0
                    012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0
                    012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0
                    01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0
                    01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532
                    0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd" />
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Operations</h3>
              <p class="text-gray-500 dark:text-gray-400">
                Keep your company’s lights on with customizable, iterative, and
                structured workflows built for all efficient teams and
                individual.
              </p>
            </div>
          </div>
        </div>
      </section>

