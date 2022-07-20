<script>
  import Contact_source from './Contact_source.svelte';

  import Contact_form from './Contact_form.svelte';

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
    <Feacture_3_section></Feacture_3_section>
    <Feacture_4_section></Feacture_4_section>
    <Feature_5_section></Feature_5_section>
    <Feature_6_section></Feature_6_section>
    <Choose_now_cards></Choose_now_cards>
    <Contact_form></Contact_form>
    <Contact_source></Contact_source>
    <Footer_section />


  </div>
</div>
