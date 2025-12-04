<script>
	// Placeholder logos (16:9-ish)
	export let logos = [
		"https://placehold.co/300x140/ffffff/000000?text=Logo+1",
		"https://placehold.co/300x140/ffffff/000000?text=Logo+2",
		"https://placehold.co/300x140/ffffff/000000?text=Logo+3",
		"https://placehold.co/300x140/ffffff/000000?text=Logo+4",
		"https://placehold.co/300x140/ffffff/000000?text=Logo+5",
		"https://placehold.co/300x140/ffffff/000000?text=Logo+6"
	];
</script>

<section class="px-6 md:px-12 py-20 bg-[var(--color-background)]">
	<!-- Top row -->
	<div class="flex items-center justify-start gap-[15%] mb-12">
		<!-- Left label with dot -->
		<div class="flex items-center gap-3">
			<div class="w-6 h-6 rounded-full border border-black flex items-center justify-center">
				<div class="w-2.5 h-2.5 rounded-full bg-black"></div>
			</div>

			<h2 class="font-inter text-black text-md font-semibold">Our clients</h2>
		</div>

		<!-- Date -->
		<p class="font-geist text-md font-bold text-black/70 tracking-wide">(2016–25©)</p>
	</div>

	<!-- Logos grid -->
	<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
		{#each logos as logo}
			<div
				class="
					bg-white
					rounded-[22px]
					h-40
					flex items-center justify-center
					shadow-[0_0_0_1px_rgba(0,0,0,0.06)]
					p-6
				"
			>
				<img src={logo} alt="Client logo" class="w-full h-full object-contain grayscale" />
			</div>
		{/each}
	</div>
</section>
