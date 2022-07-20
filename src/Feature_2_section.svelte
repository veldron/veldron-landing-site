<script>
  import Footer_section from './Footer_section.svelte'

  import Main_features_section from './Main_features_section.svelte'

  import Clients_section from './Clients_section.svelte'

  import Features_section from './Features_section.svelte'

  import Navigation_sections from './Navigation_sections.svelte'

  import Hero_section from './Hero_section.svelte'
</script>

<div class="p-12 rounded-lg bg-primary-dark">
      <h1 class="text-6xl text-center text-white md:text-7xl ">What We Do</h1>
      <p class="text-xl text-center text-white">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eum
        modi, adipisci facilis.
      </p>
      <div class="grid grid-cols-2 gap-2 px-3 py-2 mt-12 bg-white">
        <div class="flex flex-col items-center">
          <div class="flex flex-row justify-center w-full">
            <img
              src="https://oliver-tailwind.netlify.app/assets/images/icon/pen&ruller.svg"
              alt="" />
            <h2 class="text-xl font-bold text-center text-black-500">
              Well Documented
            </h2>
          </div>
          <p class="text-xl text-center text-black-500 text-zinc-500">
            Ned ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque.
          </p>
        </div>
        <div>
          <div class="flex flex-row justify-center w-full">
            <img
              src="https://oliver-tailwind.netlify.app/assets/images/icon/code.svg"
              alt="" />
            <h2 class="text-xl font-bold text-center text-black-500">
              Highly Customizable
            </h2>
          </div>
          <p class="text-xl text-center text-black-500 text-zinc-500">
            The point of using Lorem Ipsum is has a normal distribution of
            letters, as opposed to using.
          </p>
        </div>

        <div>
          <div class="flex flex-row justify-center w-full">
            <img
              src="https://oliver-tailwind.netlify.app/assets/images/icon/headphones.svg"
              alt="" />
            <h2 class="text-xl font-bold text-center text-black-500">
              24/7 Support
            </h2>
          </div>
          <span class="text-xl text-center text-black-500 text-zinc-500">
            There are many variations of but the majority have suffered
            alteration in some form.
          </span>
        </div>
        <div class="">
          <div class="flex flex-row justify-center w-full">
            <img
              src="https://oliver-tailwind.netlify.app/assets/images/icon/groupchat.svg"
              alt="" />
            <h1 class="text-xl font-bold text-center text-black-500">
              Community
            </h1>
          </div>

          <span class="text-xl text-center text-black-500 text-zinc-500">
            If you are going to use a Ipsum, you need to be sure there isn't
            anything in the middle of text.
          </span>
        </div>
      </div>
    </div>

