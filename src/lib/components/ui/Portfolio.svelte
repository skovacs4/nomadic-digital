<script>
	import { projects } from '$lib/data/portfolio.js';

</script>

<section class="px-6 md:px-0 py-24 bg-[var(--color-background)]">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
		{#each projects as p}
			<a href={`/portfolio/${p.slug}`} class="group space-y-3 cursor-pointer block">
				<!-- HEADER -->
				<div class="flex items-center justify-between bg-white rounded-xl px-5 py-3 shadow-sm">
					<p class="font-inter font-semibold text-black text-lg">
						{p.title}
					</p>

					<!-- Traffic lights -->
					<div
						class="flex items-center gap-1.5 opacity-30 group-hover:opacity-100 transition-all duration-300"
					>
						<div
							class="w-3 h-3 rounded-full bg-red-500 scale-75 group-hover:scale-100 transition"
						></div>
						<div
							class="w-3 h-3 rounded-full bg-yellow-400 scale-75 group-hover:scale-100 transition"
						></div>
						<div
							class="w-3 h-3 rounded-full bg-green-500 scale-75 group-hover:scale-100 transition"
						></div>
					</div>
				</div>

				<!-- CARD -->
				<div class="relative bg-white rounded-3xl overflow-hidden shadow-sm">
					<!-- Background image -->
					<img
						src={p.thumbnail}
						alt={p.title}
						class="
							absolute inset-0 w-full h-full object-cover
							transition-all duration-700
							group-hover:scale-[1.12]
							group-hover:blur-[2px]
							group-hover:brightness-75
						"
					/>

					<!-- Centered logo -->
					<div
						class="
							absolute inset-0 flex items-center justify-center
							transition-all duration-500
							pointer-events-none
						"
					>
						<img
							src={p.hero.logo}
							alt={`${p.title} logo`}
							class="
								w-[150px] md:w-[170px]
								transition-all duration-500
								group-hover:scale-95
								group-hover:opacity-100
								drop-shadow-[0_3px_8px_rgba(0,0,0,0.35)]
							"
						/>
					</div>

					<!-- Spacer -->
					<div class="invisible w-full h-[360px] md:h-[440px]"></div>
				</div>
			</a>
		{/each}
	</div>
</section>
