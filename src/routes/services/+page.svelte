<script>
	import { t } from '$lib/i18n';
	import { page } from '$app/stores';

	import Contact from '$lib/components/ui/Contact.svelte';
	import HowItWorks from '$lib/components/ui/HowItWorks.svelte';

	const url = $page.url.href;

	$: title = `${$t('services.meta.title')} | Nomadic Digital`;
	$: description = $t('services.meta.description');

	// hero + sections driven by translation keys (not hardcoded text)
	const services = [
		{
			num: '01',
			kickerKey: 'services.01.kicker',
			headlineKey: 'services.01.headline',
			bodyKey: 'services.01.body',
			points: [
				{ id: '1.1', key: 'services.01.points.1' },
				{ id: '1.2', key: 'services.01.points.2' },
				{ id: '1.3', key: 'services.01.points.3' },
				{ id: '1.4', key: 'services.01.points.4' }
			]
		},
		{
			num: '02',
			kickerKey: 'services.02.kicker',
			headlineKey: 'services.02.headline',
			bodyKey: 'services.02.body',
			points: [
				{ id: '2.1', key: 'services.02.points.1' },
				{ id: '2.2', key: 'services.02.points.2' },
				{ id: '2.3', key: 'services.02.points.3' },
				{ id: '2.4', key: 'services.02.points.4' },
				{ id: '2.5', key: 'services.02.points.5' },
				{ id: '2.6', key: 'services.02.points.6' }
			]
		},
		{
			num: '03',
			kickerKey: 'services.03.kicker',
			headlineKey: 'services.03.headline',
			bodyKey: 'services.03.body',
			points: [
				{ id: '3.1', key: 'services.03.points.1' },
				{ id: '3.2', key: 'services.03.points.2' },
				{ id: '3.3', key: 'services.03.points.3' },
				{ id: '3.4', key: 'services.03.points.4' },
				{ id: '3.5', key: 'services.03.points.5' },
				{ id: '3.6', key: 'services.03.points.6' }
			]
		},
		{
			num: '04',
			kickerKey: 'services.04.kicker',
			headlineKey: 'services.04.headline',
			bodyKey: 'services.04.body',
			points: [
				{ id: '4.1', key: 'services.04.points.1' },
				{ id: '4.2', key: 'services.04.points.2' },
				{ id: '4.3', key: 'services.04.points.3' },
				{ id: '4.4', key: 'services.04.points.4' }
			]
		},
		{
			num: '05',
			kickerKey: 'services.05.kicker',
			headlineKey: 'services.05.headline',
			bodyKey: 'services.05.body',
			points: [
				{ id: '5.1', key: 'services.05.points.1' },
				{ id: '5.2', key: 'services.05.points.2' },
				{ id: '5.3', key: 'services.05.points.3' },
				{ id: '5.4', key: 'services.05.points.4' },
				{ id: '5.5', key: 'services.05.points.5' }
			]
		}
	];

	const highlights = [
		{
			img: '/content/team-working.jpg',
			tagKey: 'services.highlights.1.tag',
			titleKey: 'services.highlights.1.title',
			descKey: 'services.highlights.1.desc',
			tall: false
		},
		{
			img: '/content/team-working.jpg',
			tagKey: 'services.highlights.2.tag',
			titleKey: 'services.highlights.2.title',
			descKey: 'services.highlights.2.desc',
			tall: true
		}
	];
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
</svelte:head>


<section class="max-w-[1600px] mx-auto px-6 md:px-0 py-36 md:py-48">
	<h1 data-aos="fade-up" class="text-5xl md:text-9xl tracking-tight leading-[1.05] mb-28">
		{$t('services.pageTitle')}
	</h1>

	<div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
		<!-- LEFT -->
		<div data-aos="fade-up" data-aos-delay="100" class="lg:col-span-2 flex items-center gap-3">
			<span class="w-6 h-6 rounded-full border border-black flex items-center justify-center">
				<span class="text-sm leading-none">+</span>
			</span>
			<h2 class="text-base font-[900]">{$t('services.capabilities')}</h2>
		</div>

		<!-- CENTER -->
		<div data-aos="fade-up" data-aos-delay="200" class="lg:col-span-8 space-y-8">
			<h3 class="font-geist text-xl md:text-4xl max-w-5xl">
				<span class="text-black font-[700] block">
					{$t('services.hero.bold')}
				</span>
				<span class="text-black/50 font-[600] block mt-4">
					{$t('services.hero.sub')}
				</span>
			</h3>

			<p class="font-inter text-sm text-black/50 font-bold max-w-2xl">
				{$t('services.hero.note')}
			</p>
		</div>

		<!-- RIGHT -->
		<div data-aos="fade-up" data-aos-delay="300" class="lg:col-span-2">
			<p class="font-inter text-sm text-black/40 leading-relaxed font-bold">
				{$t('services.hero.right')}
			</p>
		</div>
	</div>
</section>

<!-- IMAGE -->
<div data-aos="fade-up" data-aos-delay="400" class="mt-4 max-w-[1600px] mx-auto px-6 md:px-0">
	<div class="relative overflow-hidden rounded-3xl group">
		<img
			src="/content/wheel.png"
			alt={$t('services.hero.imageAlt')}
			class="w-full h-[420px] md:h-[560px] object-cover grayscale transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
		/>
	</div>
</div>

<section class="max-w-[1600px] mx-auto px-6 md:px-0 py-28 space-y-32">
	{#each services as s, idx}
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-28">
			<div data-aos="fade-up" class="lg:col-span-3">
				<p class="font-geist text-base font-bold mb-3">{s.num}</p>
				<p class="font-inter text-sm text-black/40 font-bold">
					{$t(s.kickerKey)}
				</p>
			</div>

			<div data-aos="fade-up" data-aos-delay="150" class="lg:col-span-7 space-y-6">
				<p class="font-geist text-2xl md:text-4xl leading-[1.2] tracking-tight">
					<span class="text-black font-[700]">
						{$t(s.headlineKey)}
					</span>
				</p>

				<p class="font-inter text-lg text-black/50 font-bold max-w-2xl">
					{$t(s.bodyKey)}
				</p>

				<ul
					class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-inter text-black/60 font-bold"
				>
					{#each s.points as p}
						<li class="flex gap-3">
							<span class="w-8 text-black/30">{p.id}</span>
							<span>{$t(p.key)}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	{/each}
</section>

<!-- ================= SERVICE HIGHLIGHTS ================= -->
<section class="max-w-[1600px] mx-auto px-6 md:px-0 py-24">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
		{#each highlights as card, i}
			<div data-aos="fade-up" data-aos-delay={i * 120} class="group">
				<div class="relative overflow-hidden rounded-[28px] bg-neutral-100">
					<img
						src={card.img}
						alt={$t(card.titleKey)}
						class={`w-full ${card.tall ? 'h-[525px]' : 'h-full'} object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]`}
					/>
					<div
						class="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
					></div>
				</div>

				<div class="mt-6 space-y-1">
					<p class="font-inter text-xs uppercase tracking-wide text-black/40 font-bold">
						{$t(card.tagKey)}
					</p>

					<p class="font-inter text-base font-bold">
						{$t(card.titleKey)}
					</p>

					<p class="font-inter text-sm text-black/50 font-bold max-w-md">
						{$t(card.descKey)}
					</p>
				</div>
			</div>
		{/each}
	</div>
</section>

<div class="max-w-[1700px] mx-auto" data-aos="fade-in">
	<HowItWorks />
</div>

<section class="max-w-[1600px] mx-auto px-6 md:px-0 py-32">
	<div class="text-center space-y-6">
		<h2
			data-aos="fade-up"
			data-aos-duration="700"
			class="font-calsans text-4xl md:text-6xl tracking-tight"
		>
			{$t('services.bottomCta.title')}
		</h2>

		<p
			data-aos="fade-up"
			data-aos-delay="150"
			data-aos-duration="700"
			class="font-inter text-lg text-black/50 font-bold max-w-xl mx-auto"
		>
			{$t('services.bottomCta.sub')}
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
			<span class="relative z-10">{$t('services.bottomCta.button')}</span>

			<span
				class="
					relative z-10 w-2 h-2 rounded-full bg-white
					transition-transform duration-300
					group-hover:translate-x-1
				"
			></span>

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
