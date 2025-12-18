<script>
	import { cubicOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import { onMount } from 'svelte';
	import { t } from '$lib/i18n';

	let {
		caseStudy: caseStudyProp = null,
		performance: performanceProp = null,
		score: scoreProp = 92,
		visits: visitsProp = null
	} = $props();

	const caseStudy = $derived(
		caseStudyProp ?? {
			label: $t('case.label'),
			tags: $t('case.tags'),
			brand: 'CONTE',
			image: '/content/grain-dark.jpg',
			description: $t('case.description'),
			link: '/portfolio/conte'
		}
	);

	const performance = $derived(
		performanceProp ?? {
			boost: $t('case.performance.boost'),
			conversion: $t('case.performance.conversion'),
			testimonial: $t('case.performance.testimonial'),
			author: $t('case.performance.author')
		}
	);

	const score = $derived(scoreProp ?? 92);

	const visits = $derived(
		visitsProp ?? {
			total: '38K',
			growth: '+30%',
			months: [
				{ label: $t('case.month.dec'), value: 1 },
				{ label: $t('case.month.jan'), value: 1.3 },
				{ label: $t('case.month.feb'), value: 1.1 },
				{ label: $t('case.month.mar'), value: 1.5 },
				{ label: $t('case.month.apr'), value: 2.3 },
				{ label: $t('case.month.may'), value: 5.3 }
			]
		}
	);

	let root;
	let visible = $state(false);

	// score anim
	const animatedScore = tweened(0, { duration: 2700, easing: cubicOut });

	// bars
	let barStores = [];
	let barHeights = $state([]);
	let unsubs = [];

	function cleanupBars() {
		for (const u of unsubs) if (typeof u === 'function') u();
		unsubs = [];
	}

	function initBars() {
		cleanupBars();

		const n = visits.months.length;

		// local array so we DON'T read barHeights inside subscriptions
		const heights = Array(n).fill(0);

		barStores = Array.from({ length: n }, () => tweened(0, { duration: 600, easing: cubicOut }));
		barHeights = heights.slice();

		unsubs = barStores.map((store, i) =>
			store.subscribe((v) => {
				heights[i] = v;
				barHeights = heights.slice(); // reassign from local, no barHeights read
			})
		);
	}

	function animateBarsWithStagger() {
		barStores.forEach((store, i) => {
			setTimeout(() => {
				store.set(visits.months[i].value);
			}, i * 120);
		});
	}

	// Re-init bars when visits changes (locale switch changes labels)
	$effect(() => {
		initBars();

		if (visible) {
			animatedScore.set(score);
			animateBarsWithStagger();
		} else {
			animatedScore.set(0);
		}

		return () => cleanupBars();
	});

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					visible = true;
					animatedScore.set(score);
					animateBarsWithStagger();
					observer.disconnect();
				}
			},
			{ threshold: 0.35 }
		);

		if (root) observer.observe(root);

		return () => {
			observer.disconnect();
			cleanupBars();
		};
	});
</script>

<section bind:this={root} class="max-w-[1600px] mx-auto px-6 md:px-12 py-24">
	{#if visible}
		<div class="grid grid-cols-12 gap-4">
			<!-- HERO CARD -->
			<div
				class="col-span-12 lg:col-span-6 lg:row-span-2 relative rounded-3xl overflow-hidden bg-black text-white p-10 flex flex-col justify-between min-h-[460px] animate-fadeIn"
			>
				<img src={caseStudy.image} class="absolute inset-0 w-full h-full object-cover opacity-90" />
				<div class="absolute inset-0 bg-black/65"></div>

				<div class="relative z-10">
					<p class="font-geist text-sm text-white/70 mb-2">{caseStudy.label}</p>
					<p class="font-inter text-xs text-white/50 mb-6">{caseStudy.tags}</p>
					<h3 class="font-calsans text-6xl tracking-tight">{caseStudy.brand}</h3>
				</div>

				<div class="relative z-10 flex items-end justify-between">
					<p class="font-inter text-lg max-w-sm">{caseStudy.description}</p>
					<a
						href={caseStudy.link}
						class="font-geist text-sm text-white/80 hover:text-white transition"
					>
						{$t('case.live')}
					</a>
				</div>
			</div>

			<!-- PERFORMANCE -->
			<div
				class="col-span-12 lg:col-span-4 lg:row-span-2 bg-white rounded-3xl p-10 border border-black/5 flex flex-col justify-between animate-fadeIn"
				style="animation-delay:.1s"
			>
				<div>
					<p class="font-inter text-sm text-black/50 mb-2">{$t('case.performance.title')}</p>
					<p class="font-calsans text-2xl mb-6">{performance.boost}</p>

					<p class="font-inter text-sm text-black/50 mb-2">
						{$t('case.performance.conversionLabel')}
					</p>
					<p class="font-calsans text-2xl">{performance.conversion}</p>
				</div>

				<div class="mt-auto pt-10">
					<p class="font-inter text-sm text-black/70 mb-4 leading-relaxed">
						“{performance.testimonial}”
					</p>
					<p class="font-geist text-sm font-medium">{performance.author}</p>
				</div>
			</div>

			<!-- SCORE -->
			<div
				class="col-span-12 lg:col-span-2 bg-white rounded-3xl p-10 border border-black/5 flex flex-col items-center justify-center animate-fadeIn"
				style="animation-delay:.2s"
			>
				<svg width="120" height="120" viewBox="0 0 120 120">
					<circle cx="60" cy="60" r="52" stroke="#e5e5e5" stroke-width="8" fill="none" />
					<circle
						cx="60"
						cy="60"
						r="52"
						stroke="#000"
						stroke-width="8"
						fill="none"
						stroke-linecap="round"
						stroke-dasharray="326"
						stroke-dashoffset={326 - ($animatedScore / 100) * 326}
						transform="rotate(-90 60 60)"
					/>
				</svg>

				<p class="font-calsans text-2xl mt-4">{$animatedScore.toFixed(0)}</p>
				<p class="font-inter text-sm text-black/60">{$t('case.scoreLabel')}</p>
			</div>

			<!-- VISITS -->
			<div
				class="col-span-12 lg:col-span-2 lg:col-start-11 bg-white rounded-3xl p-10 border border-black/5 animate-fadeIn"
				style="animation-delay:.3s"
			>
				<div class="mb-6">
					<p class="font-calsans text-3xl">
						{visits.total}
						<span class="text-sm text-black/50 ml-2">{visits.growth}</span>
					</p>
					<p class="font-inter text-sm text-black/60">{$t('case.visitsLabel')}</p>
				</div>

				<div class="flex items-end gap-2 h-28">
					{#each visits.months as m, i}
						<div class="flex flex-col items-center gap-2">
							<div
								class="w-4 rounded-full bg-black origin-bottom transition-all"
								style="height:{(barHeights[i] ?? 0) * 18}px"
							/>
							<span class="text-xs text-black/40">{m.label}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</section>

<style>
	@keyframes fadeIn {
		from { opacity: 0; transform: translateY(24px); }
		to { opacity: 1; transform: translateY(0); }
	}
	.animate-fadeIn {
		animation: fadeIn 0.6s ease-out both;
	}
</style>
