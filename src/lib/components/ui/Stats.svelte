<script>
	import { onMount } from 'svelte';

	export let stats = [
		{ value: '3m+', label: 'Ad impressions managed' },
		{ value: '27+', label: 'Successful projects launched' },
		{ value: '98%', label: 'Client satisfaction rate' },
		{ value: '50k+', label: 'Monthly visitors driven through SEO' }
	];

	let section;
	let animated = false;

	let displayValues = stats.map(() => '0');

	function getTarget(v) {
		// ONLY the visible number
		return Number(v.match(/\d+/)[0]);
	}

	function getSuffix(v) {
		return v.replace(/\d+/g, '');
	}

	function animate() {
		const duration = 900;
		const start = performance.now();

		const targets = stats.map(s => getTarget(s.value));
		const suffixes = stats.map(s => getSuffix(s.value));

		function tick(now) {
			const progress = Math.min((now - start) / duration, 1);

			displayValues = targets.map((t, i) => {
				const current = Math.floor(t * progress);
				return `${current}${suffixes[i]}`;
			});

			if (progress < 1) {
				requestAnimationFrame(tick);
			} else {
				displayValues = stats.map(s => s.value);
			}
		}

		requestAnimationFrame(tick);
	}

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !animated) {
					animated = true;
					animate();
				}
			},
			{ threshold: 0.4 }
		);

		observer.observe(section);
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
					{displayValues[i]}
				</p>

				<p class="font-inter text-base text-black/60 mt-4 leading-relaxed">
					{s.label}
				</p>
			</div>
		{/each}
	</div>
</section>
