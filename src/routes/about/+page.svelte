<script>
	import { t } from '$lib/i18n';
	import { page } from '$app/stores';

	import ClientsV2 from '$lib/components/ui/ClientsV2.svelte';
	import Contact from '$lib/components/ui/Contact.svelte';
	import Stats from '$lib/components/ui/Stats.svelte';

	const url = $page.url.href;
</script>

<svelte:head>
	<title>{$t('meta.about.title')}</title>

	<meta name="description" content={$t('meta.about.description')} />

	<!-- Canonical -->
	<link rel="canonical" href={url} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content={$t('meta.about.title')} />
	<meta property="og:description" content={$t('meta.about.description')} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content="/og/about.jpg" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={$t('meta.about.title')} />
	<meta name="twitter:description" content={$t('meta.about.description')} />
	<meta name="twitter:image" content="/og/about.jpg" />
</svelte:head>

<!-- ================= HERO / INTRO ================= -->
<section class="max-w-[1600px] mx-auto px-6 md:px-0 py-36 md:py-48">
	<h1 data-aos="fade-up" class="text-5xl md:text-9xl tracking-tight leading-[1.05] mb-28">
		{$t('about.pageTitle')}
	</h1>

	<div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
		<!-- LEFT -->
		<div data-aos="fade-up" data-aos-delay="100" class="lg:col-span-2 flex items-center gap-3">
			<span class="w-6 h-6 rounded-full border border-black flex items-center justify-center">
				<span class="text-sm leading-none">+</span>
			</span>
			<h2 class="text-base font-[900]">{$t('about.studio')}</h2>
		</div>

		<!-- CENTER -->
		<div data-aos="fade-up" data-aos-delay="200" class="lg:col-span-8 space-y-8">
			<h3 class="font-geist text-xl md:text-4xl max-w-5xl">
				<span class="text-black font-[700] block">
					{$t('about.hero.bold')}
				</span>
				<span class="text-black/50 font-[600] block mt-4">
					{$t('about.hero.sub')}
				</span>
			</h3>

			<!-- SOCIAL PROOF -->
			<div class="flex items-center gap-6 pt-6">
				<div class="flex -space-x-2">
					<img
						class="w-10 h-10 rounded-full border border-white object-cover"
						src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=128&auto=format&fit=crop"
						alt=""
					/>
					<img
						class="w-10 h-10 rounded-full border border-white object-cover"
						src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=128&auto=format&fit=crop"
						alt=""
					/>
					<img
						class="w-10 h-10 rounded-full border border-white object-cover"
						src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=128&auto=format&fit=crop"
						alt=""
					/>
					<div
						class="w-10 h-10 rounded-full border border-white bg-black text-white flex items-center justify-center text-xs font-geist"
					>
						56+
					</div>
				</div>

				<p class="font-inter text-sm text-black/50 font-bold">
					{$t('about.hero.socialProof')}
				</p>
			</div>
		</div>

		<!-- RIGHT -->
		<div data-aos="fade-up" data-aos-delay="300" class="lg:col-span-2">
			<p class="font-inter text-sm text-black/40 leading-relaxed font-bold">
				{$t('about.hero.note')}
			</p>
		</div>
	</div>

	<!-- IMAGE -->
	<div data-aos="fade-up" data-aos-delay="400" class="mt-32">
		<div class="relative overflow-hidden rounded-3xl group">
			<img
				src="/content/wheel.png"
				alt={$t('about.hero.imageAlt')}
				class="w-full h-[420px] md:h-[560px] object-cover grayscale transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
			/>
		</div>
	</div>
</section>

<!-- ================= STATS ================= -->
<section class="max-w-[1600px] mx-auto">
	<Stats />
</section>

<!-- ================= APPROACH ================= -->
<section class="max-w-[1600px] mx-auto px-6 md:px-0 py-36">
	<div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
		<div data-aos="fade-up" class="lg:col-span-3">
			<p class="font-geist text-base font-bold mb-3">Nomadic Digital ®</p>
			<p class="font-inter text-sm text-black/40 leading-relaxed max-w-xs font-bold">
				{$t('about.approach.kicker')}
			</p>
		</div>

		<div data-aos="fade-up" data-aos-delay="150" class="lg:col-span-7 space-y-10">
			<p class="font-geist text-2xl md:text-4xl leading-[1.2] tracking-tight">
				<span class="text-black/40">{$t('about.approach.line1')}</span>{' '}
				<span class="text-black font-[700]">{$t('about.approach.line2')}</span>{' '}
				<span class="text-black/40">{$t('about.approach.line3')}</span>
			</p>

			<p class="font-inter text-lg text-black/50 leading-relaxed max-w-2xl font-bold">
				{$t('about.approach.body')}
			</p>

			<a
				href="/portfolio"
				class="inline-flex items-center gap-3 rounded-full bg-black text-white px-6 py-3 text-sm font-geist transition hover:bg-black/90 hover:gap-4"
			>
				{$t('about.approach.cta')}
				<span class="w-2 h-2 rounded-full bg-white"></span>
			</a>
		</div>
	</div>
</section>

<!-- ================= CLIENTS ================= -->
<ClientsV2 />

<!-- ================= DIFFERENCE ================= -->
<section class="max-w-[1600px] mx-auto px-6 md:px-0 py-36">
	<div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
		<!-- LEFT: identity -->
		<div data-aos="fade-up" class="lg:col-span-3">
			<p class="font-geist text-base font-bold mb-3">{$t('about.difference.title')}</p>
			<p class="font-inter text-sm text-black/40 leading-relaxed max-w-xs font-bold">
				{$t('about.difference.subtitle')}
			</p>
		</div>

		<!-- CENTER: core statement -->
		<div data-aos="fade-up" data-aos-delay="150" class="lg:col-span-7 space-y-10">
			<p class="font-geist text-2xl md:text-4xl leading-[1.2] tracking-tight">
				<span class="text-black font-[700]">{$t('about.difference.bold')}</span>{' '}
				<span class="text-black/40">{$t('about.difference.rest')}</span>
			</p>

			<p class="font-inter text-lg text-black/50 leading-relaxed max-w-2xl font-bold">
				{$t('about.difference.body')}
			</p>

			<a
				href="/contact"
				class="inline-flex items-center gap-3 rounded-full bg-black text-white px-6 py-3 text-sm font-geist transition hover:bg-black/90 hover:gap-4"
			>
				{$t('about.difference.cta')}
				<span class="w-2 h-2 rounded-full bg-white"></span>
			</a>
		</div>
	</div>
</section>

<!-- ================= EDITORIAL CARDS ================= -->
<section class="max-w-[1600px] mx-auto px-6 md:px-0 py-24">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
		{#each [{ img: '/content/team-working.jpg', title: $t('about.editorial.1.title'), year: '2024' }, { img: '/content/dev-working.png', title: $t('about.editorial.2.title'), year: '2025', tall: true }] as card, i}
			<div data-aos="fade-up" data-aos-delay={i * 120} class="group">
				<div class="relative overflow-hidden rounded-[28px] bg-neutral-100">
					<img
						src={card.img}
						alt={card.title}
						class={`w-full ${card.tall ? 'h-[525px]' : 'h-full'} object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]`}
					/>
				</div>

				<div class="flex items-center gap-3 mt-6">
					<p class="font-inter text-base font-bold">{card.title}</p>
					<span class="text-sm text-black/40 font-bold">/{card.year}</span>
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- ================= CONTACT ================= -->
<section class="max-w-[1700px] mx-auto">
	<Contact />
</section>
