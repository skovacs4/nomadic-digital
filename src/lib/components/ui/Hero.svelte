<script>
	// REMOVE all JS like visible = false
</script>

<section class="px-2 md:px-2 pt-8 md:pt-12 bg-white">
	<div
		class="
			relative
			min-h-[85vh]
			flex flex-col justify-center
			px-6 md:px-12
			opacity-0 animate-fadeIn
			bg-gradient-to-b from-[#d9d9d9] to-[#bfbfbf]
			rounded-[40px]
			overflow-hidden
			shadow-[0_0_80px_-20px_rgba(0,0,0,0.25)]
		"
	>
		<!-- Background Video -->
		<div class="absolute inset-0 -z-20 overflow-hidden">
			<video
				src="videos/hero-video.mp4"
				autoplay
				muted
				loop
				playsinline
				preload="auto"
				class="absolute inset-0 w-full h-full object-cover opacity-60"
			/>
		</div>

		<!-- Gradient Overlay -->
		<div class="absolute inset-0 -z-10 bg-gradient-to-t from-black/40 to-black/10"></div>

		<!-- Grain Placeholder -->
		<div
			class="
				absolute inset-0 -z-10
				opacity-[0.07]
				bg-[url('https://placehold.co/600x600/eaeaea/cccccc?text=noise')]
				mix-blend-soft-light
				bg-cover bg-center
			"
		/>

		<!-- CONTENT -->
		<div class="relative z-10 max-w-7xl mx-auto space-y-8 py-20">
			<h1 class="font-calsans text-5xl md:text-7xl leading-[1.1] text-white max-w-4xl">
				Crafting premium digital experiences for brands that demand quality.
			</h1>

			<p class="font-inter text-lg md:text-xl text-white/80 max-w-2xl">
				We design, develop, and launch modern websites and digital products with a focus on clarity,
				performance, and timeless design.
			</p>

			<div class="flex items-center gap-4 pt-2">
				<a
					href="/contact"
					class="
						px-6 py-3 rounded-full
						bg-white text-black
						font-geist text-sm uppercase tracking-wide
						hover:bg-white/90 transition
					"
				>
					Start a Project
				</a>

				<a
					href="/work"
					class="font-geist text-sm tracking-wide uppercase text-white/90 hover:text-white"
				>
					View Work →
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes fadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}
	.animate-fadeIn {
		animation: fadeIn 0.8s ease forwards;
	}
</style>
