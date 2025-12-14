<script>
	// Placeholder logos in clean 300 × 120 ratio
	export let logos = [
		"/logos/clients/softone.png",
		"/logos/clients/kronburg.png",
		"/logos/clients/filicori.png",
		"/logos/clients/conte.png",
		"/logos/clients/natscent.png",
		"/logos/clients/qbs.png"
	];
</script>

<section class="px-6 md:px-12 py-4 md:py-12 md:my-24 bg-[#f5f5f5]">
	<!-- TOP ROW -->
	<div class="flex items-center justify-start gap-24 mb-10">
		<!-- LEFT ICON + TITLE -->
		<div class="flex items-center gap-3">
			<div class="w-5 h-5 rounded-full border border-black flex items-center justify-center">
				<div class="w-2 h-2 rounded-full bg-black"></div>
			</div>

			<h2 class="font-inter text-base font-bold text-black tracking-tight">Our clients</h2>
		</div>

		<p class="font-inter text-sm text-black/50 tracking-wide font-bold">(Selected client partnerships)</p>
	</div>

	<!-- LOGOS GRID -->
	<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1">
		{#each logos as logo}
			<div
				class="
					bg-white
					rounded-[14px]
					h-36 md:h-48
					flex items-center justify-center
					p-6
					shadow-[0_0_0_1px_rgba(0,0,0,0.05)]
				"
			>
				<img src={logo} alt="Client logo" class="w-full h-full object-contain grayscale" />
			</div>
		{/each}
	</div>
</section>
