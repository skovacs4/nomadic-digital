<section class="px-2 md:px-0 ">
<div
	class="
		relative
		h-[100vh]
		rounded-[0px]
		overflow-hidden
		bg-black
		shadow-[0_0_60px_-20px_rgba(0,0,0,0.35)]
		flex items-end
		animate-[fadeIn_1.2s_ease-out]
	"
>

		<!-- Background Video -->
		<video
			src="videos/hero-video.mov"
			autoplay
			muted
			loop
			playsinline
			preload="auto"
			class="absolute inset-0 w-full h-full object-cover opacity-45"
		></video>

		<!-- Gradient Overlay -->
		<div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10"></div>

		<!-- Grain -->
		<div class="grain-layer pointer-events-none absolute inset-0"></div>

		<!-- CONTENT -->
		<div class="relative z-10 w-full">
			<div class="max-w-[1200px] mx-auto px-6 md:px-12 -translate-y-[100%] md:-translate-y-[60%]">
				<p class="font-inter text-sm text-white/60 mb-6">Nomadic Digital ® — Digital Studio</p>

				<h1
					class="font-calsans text-white text-[56px] sm:text-[72px] md:text-[96px] leading-[1.02] tracking-tight"
				>
					We build digital experiences
					<span class="text-white/40"> that actually perform.</span>
				</h1>

				<p class="mt-8 font-inter text-lg md:text-xl text-white/70 max-w-[560px]">
					Strategy, design, and development for brands that want clarity, speed, and measurable
					growth.
				</p>

				<div class="mt-12 flex items-center gap-6">
					<a
						href="/contact"
						class="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-black font-geist text-sm font-medium hover:bg-white/90 transition"
					>
						Start a project →
					</a>
					<a
						href="#selected-work"
						class="font-geist text-sm text-white/70 hover:text-white transition"
					>
						View selected work
					</a>
				</div>
			</div>
		</div>

		<!-- FOOT NOTE -->
		<p class="absolute bottom-8 right-10 text-white/30 text-sm">© 2025 Nomadic Digital</p>
	</div>
</section>
