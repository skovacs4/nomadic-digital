<script>
  import { t } from '$lib/i18n';
</script>

<section class="">
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
		<div class="relative z-10 w-full pb-[26vh] sm:pb-[28vh] md:pb-[30vh] lg:pb-[32vh]">
			<div class="max-w-[1200px] mx-auto px-6 md:px-12">
				<p class="font-inter text-sm text-white/60 mb-6">{$t('hero.kicker')}</p>

				<h1
					class="font-calsans text-white text-[40px] sm:text-[56px] md:text-[72px] lg:text-[96px]
 leading-[1.02] tracking-tight"
				>
					{$t('hero.title.main')}
					<span class="text-white/40">{$t('hero.title.muted')}</span>
				</h1>

				<p class="mt-8 font-inter text-base sm:text-lg md:text-xl
 text-white/70 max-w-[560px]">
					{$t('hero.subtitle')}
				</p>

				<div class="mt-12 flex items-center gap-6">
					<a
						href="/contact"
						class="inline-flex items-center gap-2 rounded-full bg-white text-black font-geist text-xs sm:text-sm px-6 py-3 sm:px-7 sm:py-4 font-medium hover:bg-white/90 transition"
					>
						{$t('hero.cta.primary')}
					</a>
					<a
						href="#selected-work"
						class="font-geist text-xs sm:text-sm px-6 py-3 sm:px-7 sm:py-4 text-white/70 hover:text-white transition"
					>
						{$t('hero.cta.secondary')}
					</a>
				</div>
			</div>
		</div>

		<!-- FOOT NOTE -->
		<p class="absolute bottom-8 right-10 text-white/30 text-sm">{$t('hero.footer')}</p>
	</div>
</section>
