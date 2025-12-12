<script>
	export let stats = [
		{
			value: '3m+',
			label: 'Ad impressions managed'
		},
		{
			value: '27+',
			label: 'Successful projects launched'
		},
		{
			value: '98%',
			label: 'Client satisfaction rate'
		},
		{
			value: '50k+',
			label: 'Monthly visitors driven through SEO'
		}
	];
</script>

<section class="px-6 md:px-12 py-24 max-w-8xl mx-auto" data-aos="fade-up">
	<div
		class="
			grid
			grid-cols-1
			sm:grid-cols-2
			lg:grid-cols-4
			gap-12
			justify-items-center
			text-center
			lg:text-left
			lg:justify-items-start
			lg:ml-[16.666%]
		"
	>
		{#each stats as s, i}
			<div class="max-w-xs" data-aos="fade-up" data-aos-delay={i * 100}>
				<p
					class="font-inter text-6xl sm:text-7xl lg:text-8xl leading-none text-black font-semibold"
				>
					{s.value}
				</p>

				<p class="font-inter text-base text-black/60 mt-4 leading-relaxed">
					{s.label}
				</p>
			</div>
		{/each}
	</div>
</section>
