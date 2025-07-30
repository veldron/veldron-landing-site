<script>
  import Contact_form from '$lib/Contact_form.svelte';
  import Footer_section from '$lib/Footer_section.svelte';
  import Main_features_section from '$lib/Main_features_section.svelte';
  import Clients_section from '$lib/Clients_section.svelte';
  import Features_section from '$lib/Features_section.svelte';
  import Hero_section from '$lib/Hero_section.svelte';
</script>

<svelte:head>
	<title>Veldron - Landing Site</title>
	<meta name="description" content="Veldron landing page" />
</svelte:head>

<div class="w-full">
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
  <!-- <Feature_2_section></Feature_2_section> -->
  <!-- <Feacture_3_section></Feacture_3_section> -->
  <!-- <Feacture_4_section></Feacture_4_section> -->
  <!-- <Feature_5_section></Feature_5_section> -->
  <!-- <Feature_6_section></Feature_6_section> -->
  <!-- <Choose_now_cards></Choose_now_cards> -->
  <Contact_form />
  <!-- <Contact_source></Contact_source> -->
  <Footer_section />
</div>
