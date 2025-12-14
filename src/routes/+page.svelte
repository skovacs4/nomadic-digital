<script>
	import Hero from "$lib/components/ui/Hero.svelte";
	import Clients from "$lib/components/ui/Clients.svelte";
	import Portfolio from "$lib/components/ui/Portfolio.svelte";
	import SectionHeader from "$lib/components/ui/SectionHeader.svelte";
	import WhyChooseUs from "$lib/components/ui/WhyChooseUs.svelte";
	import Services from "$lib/components/ui/Services.svelte";
	import AboutUs from "$lib/components/ui/AboutUs.svelte";
	import HowItWorks from "$lib/components/ui/HowItWorks.svelte";
	import Testimonials from "$lib/components/ui/Testimonials.svelte";
	import Stats from "$lib/components/ui/Stats.svelte";
	import CaseStudy from "$lib/components/ui/CaseStudy.svelte";
	import Pricing from "$lib/components/ui/Pricing.svelte";
	import Team from "$lib/components/ui/Team.svelte";
	import FAQ from "$lib/components/ui/FAQ.svelte";
	import Blog from "$lib/components/ui/Blog.svelte";
	import Contact from "$lib/components/ui/Contact.svelte";
</script>

<!-- HERO -->
<div class="my-4" data-aos="fade">
	<Hero />
</div>

<!-- CLIENT LOGOS -->
<div class="mt-8 max-w-[1600px] mx-auto" data-aos="fade-up">
	<Clients />
</div>

<!-- PROJECTS HEADER -->
<div id="selected-work" class="mt-16 max-w-[1500px] mx-auto px-6 md:px-12" data-aos="fade-up">
	<SectionHeader
		count={"Selected work"}
		title="Projects"
		description="We’ve helped businesses across industries achieve their goals. Here are some of our recent projects."
	/>
</div>

<!-- PORTFOLIO GRID -->
<div class="max-w-[1500px] mx-auto" data-aos="fade-up">
	<Portfolio />
</div>

<!-- WHY CHOOSE US -->
<div class="mt-12 max-w-[1600px] mx-auto" data-aos="fade-up">
	<WhyChooseUs />
</div>

<!-- SERVICES -->
<div class="my-2" data-aos="fade-up">
	<Services />
</div>

<!-- ABOUT US -->
<div class="mt-2 max-w-[1600px] mx-auto" data-aos="fade-up">
	<AboutUs />
</div>

<!-- HOW IT WORKS -->
<div class="mt-2 max-w-[1600px] mx-auto" data-aos="fade-up">
	<HowItWorks />
</div>

<!-- TESTIMONIALS -->
<div class="mt-2 max-w-[1600px] mx-auto" data-aos="fade-up">
	<Testimonials />
</div>

<!-- STATS -->
<div class="mt-2 max-w-[1600px] mx-auto" data-aos="fade-up">
	<Stats />
</div>

<!-- CASE STUDY -->
<div class="mt-2 max-w-[1600px] mx-auto" data-aos="fade-up">
	<CaseStudy />
</div>

<!-- PRICING -->
<div data-aos="zoom-in" id="pricing">
	<Pricing />
</div>

<!-- TEAM -->
<div data-aos="fade-up">
	<Team />
</div>

<!-- FAQ -->
<div data-aos="fade-up">
	<FAQ />
</div>

<!-- BLOG -->
<div data-aos="fade-up">
	<Blog />
</div>

<!-- CONTACT -->
<div data-aos="fade-up">
	<Contact />
</div>
