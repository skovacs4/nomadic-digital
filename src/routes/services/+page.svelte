<script>
	import Contact from "$lib/components/ui/Contact.svelte";
	import HowItWorks from "$lib/components/ui/HowItWorks.svelte";

</script>

<section class="max-w-[1600px] mx-auto px-6 md:px-0 py-36 md:py-48">
	<h1 data-aos="fade-up" class="text-5xl md:text-9xl tracking-tight leading-[1.05] mb-28">
		Services
	</h1>

	<div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
		<!-- LEFT -->
		<div data-aos="fade-up" data-aos-delay="100" class="lg:col-span-2 flex items-center gap-3">
			<span class="w-6 h-6 rounded-full border border-black flex items-center justify-center">
				<span class="text-sm leading-none">+</span>
			</span>
			<h2 class="text-base font-[900]">Capabilities</h2>
		</div>

		<!-- CENTER -->
		<div data-aos="fade-up" data-aos-delay="200" class="lg:col-span-8 space-y-8">
			<h3 class="font-geist text-xl md:text-4xl max-w-5xl">
				<span class="text-black font-[700] block">
					We design and build digital systems that support real growth.
				</span>
				<span class="text-black/50 font-[600] block mt-4">
					From strategy and UX to complex development and integrations, our work is focused on
					clarity, performance, and long-term value.
				</span>
			</h3>

			<p class="font-inter text-sm text-black/50 font-bold max-w-2xl">
				We don’t offer generic packages. Every engagement is shaped around the business problem, the
				product, and the stage you’re at.
			</p>
		</div>

		<!-- RIGHT -->
		<div data-aos="fade-up" data-aos-delay="300" class="lg:col-span-2">
			<p class="font-inter text-sm text-black/40 leading-relaxed font-bold">
				Strategy-led. Outcome-driven. Built to last.
			</p>
		</div>
	</div>
</section>

<!-- IMAGE -->
<div data-aos="fade-up" data-aos-delay="400" class="mt-4 max-w-[1600px] mx-auto px-6 md:px-0">
	<div class="relative overflow-hidden rounded-3xl group">
		<img
			src="/content/wheel.png"
			alt="Studio collaboration"
			class="w-full h-[420px] md:h-[560px] object-cover grayscale transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
		/>
	</div>
</div>

<section class="max-w-[1600px] mx-auto px-6 md:px-0 py-28 space-y-32">
	<!-- SERVICE 1 -->
	<div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-28">
		<div data-aos="fade-up" class="lg:col-span-3">
			<p class="font-geist text-base font-bold mb-3">01</p>
			<p class="font-inter text-sm text-black/40 font-bold">Web & E-commerce Platforms</p>
		</div>

		<div data-aos="fade-up" data-aos-delay="150" class="lg:col-span-7 space-y-6">
			<p class="font-geist text-2xl md:text-4xl leading-[1.2] tracking-tight">
				<span class="text-black font-[700]"> Fast, scalable platforms built for conversion. </span>
			</p>

			<p class="font-inter text-lg text-black/50 font-bold max-w-2xl">
				We design and develop modern websites and e-commerce platforms that load fast, scale
				cleanly, and support both marketing and operations.
			</p>

			<ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-inter text-black/60 font-bold">
				<li class="flex gap-3">
					<span class="w-8 text-black/30">1.1</span>
					<span>Custom storefronts</span>
				</li>
				<li class="flex gap-3">
					<span class="w-8 text-black/30">1.2</span>
					<span>CB2C & B2B flows</span>
				</li>
				<li class="flex gap-3">
					<span class="w-8 text-black/30">1.3</span>
					<span>Performance optimization</span>
				</li>
				<li class="flex gap-3">
					<span class="w-8 text-black/30">1.4</span>
					<span>SEO-ready architecture</span>
				</li>
			</ul>
		</div>
	</div>

	<!-- SERVICE 2 -->
	<div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-28">
		<div data-aos="fade-up" class="lg:col-span-3">
			<p class="font-geist text-base font-bold mb-3">02</p>
			<p class="font-inter text-sm text-black/40 font-bold">SaaS & Custom Systems</p>
		</div>

		<div data-aos="fade-up" data-aos-delay="150" class="lg:col-span-7 space-y-6">
			<p class="font-geist text-2xl md:text-4xl leading-[1.2] tracking-tight">
				<span class="text-black font-[700]"> Complex products, clean architecture. </span>
			</p>

			<p class="font-inter text-lg text-black/50 font-bold max-w-2xl">
				We build internal tools, SaaS platforms, and custom dashboards where reliability, security,
				and maintainability matter.
			</p>

			<ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-inter text-black/60 font-bold">
				<li class="flex gap-3">
					<span class="w-8 text-black/30">2.1</span>
					<span>Admin dashboards</span>
				</li>
				<li class="flex gap-3">
					<span class="w-8 text-black/30">2.2</span>
					<span>Role-based systems</span>
				</li>
				<li class="flex gap-3">
					<span class="w-8 text-black/30">2.3</span>
					<span>Payments & subscriptions</span>
				</li>
				<li class="flex gap-3">
					<span class="w-8 text-black/30">2.4</span>
					<span>Scalable backend logic</span>
				</li>
				<li class="flex gap-3">
					<span class="w-8 text-black/30">2.5</span>
					<span>ERP integrations</span>
				</li>
				<li class="flex gap-3">
					<span class="w-8 text-black/30">2.6</span>
					<span>Complex API integrations</span>
				</li>
			</ul>
		</div>
	</div>

	<!-- SERVICE 3 -->
	<div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-28">
		<div data-aos="fade-up" class="lg:col-span-3">
			<p class="font-geist text-base font-bold mb-3">03</p>
			<p class="font-inter text-sm text-black/40 font-bold">UX, Brand & Product Design</p>
		</div>

		<div data-aos="fade-up" data-aos-delay="150" class="lg:col-span-7 space-y-6">
			<p class="font-geist text-2xl md:text-4xl leading-[1.2] tracking-tight">
				<span class="text-black font-[700]"> Design that removes friction. </span>
			</p>

			<p class="font-inter text-lg text-black/50 font-bold max-w-2xl">
				We design interfaces and brand systems that feel intentional, clear, and aligned with how
				users actually behave.
			</p>

			<ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-inter text-black/60 font-bold">
				<li class="flex gap-3">
					<span class="w-8 text-black/30">3.1</span>
					<span>UX & UI design</span>
				</li>
				<li class="flex gap-3">
					<span class="w-8 text-black/30">3.2</span>
					<span>Product structure</span>
				</li>
				<li class="flex gap-3">
					<span class="w-8 text-black/30">3.3</span>
					<span>Brand systems</span>
				</li>
				<li class="flex gap-3">
					<span class="w-8 text-black/30">3.4</span>
					<span>Design systems</span>
				</li>
				<li class="flex gap-3">
					<span class="w-8 text-black/30">3.5</span>
					<span>Print & on-demand production</span>
				</li>
				<li class="flex gap-3">
					<span class="w-8 text-black/30">3.6</span>
					<span>Physical brand assets (cards, apparel, packaging)</span>
				</li>
			</ul>
		</div>
	</div>

	<!-- SERVICE 4 -->
	<div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-28">
		<div data-aos="fade-up" class="lg:col-span-3">
			<p class="font-geist text-base font-bold mb-3">04</p>
			<p class="font-inter text-sm text-black/40 font-bold">Marketing & Growth</p>
		</div>

		<div data-aos="fade-up" data-aos-delay="150" class="lg:col-span-7 space-y-6">
			<p class="font-geist text-2xl md:text-4xl leading-[1.2] tracking-tight">
				<span class="text-black font-[700]"> Marketing built on data, not assumptions. </span>
			</p>

			<p class="font-inter text-lg text-black/50 font-bold max-w-2xl">
				We plan and execute marketing systems that support growth long-term — aligned with product,
				infrastructure, and real business constraints.
			</p>

			<ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-inter text-black/60 font-bold">
				<li class="flex gap-3">
					<span class="w-8 text-black/30">4.1</span>
					<span>Performance marketing</span>
				</li>
				<li class="flex gap-3">
					<span class="w-8 text-black/30">4.2</span>
					<span>SEO & content strategy</span>
				</li>
				<li class="flex gap-3">
					<span class="w-8 text-black/30">4.3</span>
					<span>Analytics & conversion tracking</span>
				</li>
				<li class="flex gap-3">
					<span class="w-8 text-black/30">4.4</span>
					<span>Campaign structure & optimization</span>
				</li>
			</ul>
		</div>
	</div>

	<!-- SERVICE 5 -->
	<div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-28">
		<div data-aos="fade-up" class="lg:col-span-3">
			<p class="font-geist text-base font-bold mb-3">05</p>
			<p class="font-inter text-sm text-black/40 font-bold">Mobile App Development</p>
		</div>

		<div data-aos="fade-up" data-aos-delay="150" class="lg:col-span-7 space-y-6">
			<p class="font-geist text-2xl md:text-4xl leading-[1.2] tracking-tight">
				<span class="text-black font-[700]"> Mobile apps built for real-world usage. </span>
			</p>

			<p class="font-inter text-lg text-black/50 font-bold max-w-2xl">
				We design and develop mobile applications that are reliable, performant, and easy to
				maintain — focused on long-term usability, not short-term demos.
			</p>

			<ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-inter text-black/60 font-bold">
				<li class="flex gap-3">
					<span class="w-8 text-black/30">5.1</span>
					<span>iOS & Android applications</span>
				</li>
				<li class="flex gap-3">
					<span class="w-8 text-black/30">5.2</span>
					<span>Cross-platform development (Flutter / React Native)</span>
				</li>
				<li class="flex gap-3">
					<span class="w-8 text-black/30">5.3</span>
					<span>API & backend integration</span>
				</li>
				<li class="flex gap-3">
					<span class="w-8 text-black/30">5.4</span>
					<span>Performance & scalability optimization</span>
				</li>
				<li class="flex gap-3">
					<span class="w-8 text-black/30">5.5</span>
					<span>App Store & Play Store deployment</span>
				</li>
			</ul>
		</div>
	</div>
</section>

<!-- ================= SERVICE HIGHLIGHTS ================= -->
<section class="max-w-[1600px] mx-auto px-6 md:px-0 py-24">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
		{#each [{ img: '/content/team-working.jpg', title: 'Scalable systems', description: 'Architecture designed to grow with your business.', tag: 'Engineering' }, { img: '/content/team-working.jpg', title: 'Clear product design', description: 'Interfaces that reduce friction and increase conversion.', tag: 'UX / UI', tall: true }] as card, i}
			<div data-aos="fade-up" data-aos-delay={i * 120} class="group">
				<!-- IMAGE -->
				<div class="relative overflow-hidden rounded-[28px] bg-neutral-100">
					<img
						src={card.img}
						alt={card.title}
						class={`w-full ${card.tall ? 'h-[525px]' : 'h-full'} object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]`}
					/>

					<!-- SUBTLE OVERLAY -->
					<div
						class="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
					></div>
				</div>

				<!-- META -->
				<div class="mt-6 space-y-1">
					<p class="font-inter text-xs uppercase tracking-wide text-black/40 font-bold">
						{card.tag}
					</p>

					<p class="font-inter text-base font-bold">
						{card.title}
					</p>

					<p class="font-inter text-sm text-black/50 font-bold max-w-md">
						{card.description}
					</p>
				</div>
			</div>
		{/each}
	</div>
</section>

<div class="max-w-[1700px] mx-auto" data-aos="fade-in">
	<HowItWorks />
</div>

<!-- <section class="max-w-[1600px] mx-auto px-6 md:px-0 py-36">
	<div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
		<div data-aos="fade-up" class="lg:col-span-3">
			<p class="font-geist text-base font-bold mb-3">Process</p>
			<p class="font-inter text-sm text-black/40 font-bold max-w-xs">
				Focused, collaborative, and transparent.
			</p>
		</div>

		<div data-aos="fade-up" data-aos-delay="150" class="lg:col-span-7 space-y-8">
			<p class="font-geist text-2xl md:text-4xl leading-[1.2] tracking-tight">
				<span class="text-black font-[700]"> A clear process, without unnecessary ceremony. </span>
			</p>

			<ul class="space-y-4 font-inter text-lg text-black/50 font-bold max-w-2xl">
				<li>— We start with context, not assumptions</li>
				<li>— We define scope tightly and honestly</li>
				<li>— We build in iterations, not surprises</li>
				<li>— We optimize for long-term maintainability</li>
			</ul>
		</div>
	</div>
</section> -->

<section class="max-w-[1600px] mx-auto px-6 md:px-0 py-32">
	<div class="text-center space-y-6">
		<h2
			data-aos="fade-up"
			data-aos-duration="700"
			class="font-calsans text-4xl md:text-6xl tracking-tight"
		>
			Have a specific problem to solve?
		</h2>

		<p
			data-aos="fade-up"
			data-aos-delay="150"
			data-aos-duration="700"
			class="font-inter text-lg text-black/50 font-bold max-w-xl mx-auto"
		>
			If you’re unsure which service fits best, we’ll help you figure it out.
		</p>

		<a
			href="/contact"
			data-aos="fade-up"
			data-aos-delay="300"
			data-aos-duration="700"
			class="
				group relative inline-flex items-center gap-3
				rounded-full bg-black text-white
				px-7 py-4 text-sm font-geist
				transition-all duration-300 ease-out
				hover:bg-black/90
				hover:-translate-y-[2px]
				active:translate-y-0
			"
		>
			<span class="relative z-10">Start a conversation</span>

			<!-- Animated dot -->
			<span
				class="
					relative z-10 w-2 h-2 rounded-full bg-white
					transition-transform duration-300
					group-hover:translate-x-1
				"
			></span>

			<!-- Subtle hover glow -->
			<span
				class="
					absolute inset-0 rounded-full
					bg-white/10
					opacity-0
					transition-opacity duration-300
					group-hover:opacity-100
				"
			></span>
		</a>
	</div>
</section>

<section class="max-w-[1700px] mx-auto px-6 md:px-0 pb-36">
	<Contact />
</section>
