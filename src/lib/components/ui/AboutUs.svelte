<script>
	export let label = 'About us';
	export let brand = 'nomadic®';

	export let titleBold = 'How we launch';
	export let titleRest = 'websites and marketing campaigns.';

	export let description =
		'See how our team combines creativity, technology, and strategy to build powerful digital solutions.';
</script>

<section class="px-6 md:px-12 py-20 md:py-32">
	<div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
		<!-- EYEBROW / LABEL -->
		<div class="md:col-span-2 flex items-center gap-3">
			<div
				class="w-5 h-5 rounded-full border border-black flex items-center justify-center shrink-0"
			>
				<div class="w-2 h-2 rounded-full bg-black"></div>
			</div>

			<p class="font-inter text-sm font-medium text-black">
				{label}
			</p>
		</div>

		<!-- MAIN CONTENT -->
		<div class="md:col-span-8 md:col-start-4">
			<!-- Brand -->
			<p class="font-inter text-sm text-black/60 mb-4 md:mb-6">
				{brand}
			</p>

			<!-- Headline -->
			<h1
				class="font-inter text-3xl sm:text-4xl md:text-6xl leading-tight md:leading-[1.15] text-black"
			>
				<span class="block md:inline font-semibold">
					{titleBold}
				</span>{' '}
				<span class="block md:inline text-black/45">
					{titleRest}
				</span>
			</h1>

			<!-- Description -->
			<p
				class="font-inter text-base md:text-lg text-black/60 max-w-xl mt-6 md:mt-8 leading-relaxed"
			>
				{description}
			</p>
		</div>
	</div>
</section>
