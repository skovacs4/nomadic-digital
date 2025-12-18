<script>
	import { t } from '$lib/i18n';

	export let image = "/content/portrait-left-bar.png";

	// localized defaults
	$: title = $t('why.title1');
	$: title2 = $t('why.title2');
	$: subtitle = $t('why.subtitle');

	$: stats = [
		{
			value: "20+",
			index: "01",
			label: $t('why.stat1.label'),
			desc: $t('why.stat1.desc'),
			logos: [
				"https://placehold.co/50x20?text=A",
				"https://placehold.co/50x20?text=B",
				"https://placehold.co/50x20?text=C"
			]
		},
		{
			value: "95%",
			index: "02",
			label: $t('why.stat2.label'),
			desc: $t('why.stat2.desc'),
			logos: [
				"/logos/clients/kron-imobiliare.png",
				"/logos/clients/kronburg.png",
				"/logos/clients/adedari.png"
			]
		}
	];
</script>

<section class="px-6 md:px-12 py-24 bg-[var(--color-background)] max-w-8xl">
	<!-- Label row -->
	<div class="flex items-center gap-3 mb-12">
		<div class="w-6 h-6 rounded-full border border-black flex items-center justify-center">
			<div class="w-2.5 h-2.5 rounded-full bg-black"></div>
		</div>
		<p class="font-geist text-black text-md font-semibold">{$t('why.label')}</p>
	</div>

	<div class="grid grid-cols-1 lg:grid-cols-3 gap-16">
		<!-- LEFT: RESPONSIVE IMAGE WITH OVERLAY -->
		<div class="flex justify-center lg:justify-start">
			<div
				class="
			relative group
			w-full
			max-w-sm
			rounded-[26px]
			overflow-hidden
			shadow-sm
			aspect-[3/5]
			bg-black/5
		"
			>
				<!-- BACKGROUND IMAGE -->
				<img
					src={image}
					alt="Why choose us"
					class="
				w-full h-full object-cover
				transition-all duration-700 ease-out
				lg:group-hover:scale-110
				lg:group-hover:blur-sm
				lg:group-hover:brightness-[0.65]
			"
				/>

				<!-- DARK GRADIENT OVERLAY -->
				<div
					class="
				absolute inset-0
				bg-gradient-to-t from-black/70 via-black/30 to-transparent
				opacity-100 lg:opacity-0
				lg:group-hover:opacity-100
				transition-opacity duration-500
			"
				></div>

				<!-- BOTTOM TEXT OVERLAY -->
				<div
					class="
				absolute bottom-6 left-6 right-6
				text-white
				opacity-100 lg:opacity-0
				translate-y-0 lg:translate-y-3
				lg:group-hover:opacity-100
				lg:group-hover:translate-y-0
				transition-all duration-500
			"
				>
					<p class="font-geist text-base md:text-lg leading-relaxed drop-shadow-xl">
						{@html $t('why.overlay.text')}
					</p>

					<a
						href="/contact"
						class="
		mt-4 group/cta inline-flex items-center gap-2 px-5 py-2
		rounded-full bg-white text-black
		font-geist text-sm
		hover:bg-white/90 transition-all duration-300
	"
					>
						{$t('why.overlay.cta')}
						<span
							class="
			w-2 h-2 rounded-full bg-black
			transition-transform duration-300 ease-out
			group-hover/cta:translate-x-1
		"
						></span>
					</a>
				</div>

				<!-- TOP-RIGHT ICON -->
				<div
					class="
				absolute top-3 right-3 w-7 h-7 rounded-full
				bg-black/60 text-white
				flex items-center justify-center
				text-sm backdrop-blur-sm shadow-lg
			"
				>
					+
				</div>
			</div>
		</div>

		<!-- RIGHT CONTENT -->
		<div class="lg:col-span-2 space-y-12">
			<!-- Headline -->
			<div>
				<h1 class="font-calsans text-4xl md:text-6xl leading-[1.15] text-black">
					{title}
				</h1>
				<h1 class="font-calsans text-4xl md:text-6xl leading-[1.15] text-black mt-2 text-black/60">
					{title2}
				</h1>
			</div>

			<!-- Subtitle -->
			<p class="font-inter text-lg text-black/70 max-w-2xl leading-relaxed">
				{subtitle}
			</p>

			<!-- STATS GRID -->
			<div class="grid grid-cols-1 md:grid-cols-2 gap-1">
				{#each stats as s, i}
					<div class="bg-white rounded-3xl p-8 shadow-sm">
						<div class="flex items-start justify-between mb-6">
							<p class="font-calsans text-4xl md:text-5xl text-black">{s.value}</p>
							<p class="font-inter text-xs text-black/40">{s.index}</p>
						</div>

						<p class="font-geist text-sm text-black font-semibold mb-6">{s.label}</p>

						{#if s.desc}
							<p class="font-inter text-sm text-black/60 mb-6 leading-relaxed">
								{s.desc}
							</p>
						{/if}

						{#if i === 1}
							<div class="flex items-center gap-4 opacity-70">
								{#each s.logos as l}
									<img src={l} alt="client logo" class="w-14 h-auto object-contain" />
								{/each}
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
