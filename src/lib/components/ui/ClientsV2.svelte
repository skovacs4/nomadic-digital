<script>
export let clients = [
	{ logo: '/logos/clients/softone.png', year: '2024' },
	{ logo: '/logos/clients/kronburg.png', year: '2024', maxWidth: '90px' }, // 👈 smaller
	{ logo: '/logos/clients/filicori.png', year: '2024' },
	{ logo: '/logos/clients/conte.png', year: '2024' },
	{ logo: '/logos/clients/natscent.png', year: '2025' },
	{ logo: '/logos/clients/qbs.png', year: '2025' }
];
</script>

<section class="max-w-[1600px] mx-auto px-4 md:px-0 py-36">
	<!-- HEADER -->
	<div class="flex items-center gap-24 mb-20">
		<div class="flex items-center gap-3">
			<span class="w-6 h-6 rounded-full border border-black flex items-center justify-center">
				<span class="text-sm leading-none">+</span>
			</span>
			<h2 class="font-geist text-base font-bold">Our clients</h2>
		</div>

		<p class="font-inter text-sm text-black/40 font-bold">(Long term partnerships built on trust)</p>
	</div>

	<!-- GRID -->
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each clients as client}
			<div
				class="
					relative
					bg-white
					rounded-[28px]
					h-[320px]
					flex items-center justify-center
					border border-black/5
				"
			>
				<img
					src={client.logo}
					alt="Client logo"
					class="object-contain grayscale w-full px-6"
					style="max-height: {client.maxWidth ?? '200px'};"
				/>

				<!-- YEAR -->
				<span class="absolute bottom-6 right-6 text-xs font-inter text-black/40 font-bold">
					/{client.year}
				</span>
			</div>
		{/each}
	</div>
</section>
