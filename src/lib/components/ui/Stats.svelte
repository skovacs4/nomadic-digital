<script>
	import { onMount } from 'svelte';
	import { t } from '$lib/i18n';

	let { stats: statsProp = null } = $props();

	const stats = $derived(
		statsProp ?? [
			{ value: $t('stats.1.value'), label: $t('stats.1.label') },
			{ value: $t('stats.2.value'), label: $t('stats.2.label') },
			{ value: $t('stats.3.value'), label: $t('stats.3.label') },
			{ value: $t('stats.4.value'), label: $t('stats.4.label') }
		]
	);

	let section;

	// true once we ran the animation at least once
	let hasAnimated = $state(false);

	let displayValues = $state([]);

	$effect(() => {
		// When language/stats change:
		// - if we already animated, show final values immediately (no getting stuck at 0)
		// - otherwise keep zeros until intersection triggers animation
		displayValues = hasAnimated ? stats.map((s) => s.value) : stats.map(() => '0');
	});

	function getTarget(v) {
		return Number(v.match(/\d+/)?.[0] ?? 0);
	}

	function getSuffix(v) {
		return v.replace(/\d+/g, '');
	}

	function animate() {
		const duration = 900;
		const start = performance.now();

		const targets = stats.map((s) => getTarget(s.value));
		const suffixes = stats.map((s) => getSuffix(s.value));

		function tick(now) {
			const progress = Math.min((now - start) / duration, 1);

			displayValues = targets.map((t, i) => {
				const current = Math.floor(t * progress);
				return `${current}${suffixes[i]}`;
			});

			if (progress < 1) requestAnimationFrame(tick);
			else displayValues = stats.map((s) => s.value);
		}

		requestAnimationFrame(tick);
	}

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !hasAnimated) {
					hasAnimated = true;
					animate();
				}
			},
			{ threshold: 0.4 }
		);

		if (section) observer.observe(section);
		return () => observer.disconnect();
	});
</script>


<section bind:this={section} class="px-6 md:px-12 py-24 max-w-8xl mx-auto">
	<div
		class="
			grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
			gap-12 justify-items-center text-center
			lg:text-left lg:justify-items-start lg:ml-[16.666%]
		"
	>
		{#each stats as s, i}
			<div class="max-w-xs">
				<p class="font-inter text-6xl sm:text-7xl lg:text-8xl leading-none font-semibold">
					{displayValues[i] ?? '0'}
				</p>

				<p class="font-inter text-base text-black/60 mt-4 leading-relaxed">
					{s.label}
				</p>
			</div>
		{/each}
	</div>
</section>
