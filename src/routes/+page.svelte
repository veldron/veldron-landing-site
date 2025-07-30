<script>
  import Contact_form from '$lib/Contact_form.svelte';
  import Footer_section from '$lib/Footer_section.svelte';
  import Main_features_section from '$lib/Main_features_section.svelte';
  import Clients_section from '$lib/Clients_section.svelte';
  import Features_section from '$lib/Features_section.svelte';
  import Hero_section from '$lib/Hero_section.svelte';
  import AI_usecases_section from '$lib/AI_usecases_section.svelte';
  import AI_stats_section from '$lib/AI_stats_section.svelte';
  import Pricing_section from '$lib/Pricing_section.svelte';
</script>

<svelte:head>
	<title>AI Agents for Small Business | Automate Operations & Boost Growth | Veldron</title>
	<meta name="description" content="Transform your small business with custom AI agents. Automate customer service, sales, and operations. Get 24/7 AI assistants that reduce costs by 40% and increase productivity by 3x. Free consultation." />
	<meta name="keywords" content="AI agents for small business, business automation, AI chatbots SMB, customer service automation, sales AI agents, small business AI solutions" />
	<meta property="og:title" content="AI Agents for Small Business - Automate & Grow with Veldron" />
	<meta property="og:description" content="Custom AI agents that work 24/7 for your small business. Automate customer service, sales, and operations. See 40% cost reduction and 3x productivity boost." />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="AI Agents for Small Business | Veldron" />
	<meta name="twitter:description" content="Transform your SMB with AI agents. Automate operations, boost productivity 3x, reduce costs 40%. Free consultation available." />
	
	<!-- Structured Data for SEO -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Organization",
		"name": "Veldron",
		"description": "AI Agents and automation solutions for small and medium businesses",
		"url": "https://veldron.com",
		"contactPoint": {
			"@type": "ContactPoint",
			"telephone": "+1-XXX-XXX-XXXX",
			"contactType": "sales",
			"areaServed": "US",
			"availableLanguage": "English"
		},
		"sameAs": [
			"https://linkedin.com/company/veldron"
		],
		"service": [
			{
				"@type": "Service",
				"name": "AI Customer Service Agents",
				"description": "24/7 automated customer service for small businesses"
			},
			{
				"@type": "Service", 
				"name": "Sales & Lead Qualification Agents",
				"description": "AI agents that qualify leads and schedule appointments"
			},
			{
				"@type": "Service",
				"name": "Business Process Automation", 
				"description": "Custom AI agents for workflow automation"
			}
		]
	}
	</script>
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
  <AI_usecases_section />
  <AI_stats_section />
  <!-- <Pricing_section /> -->
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
