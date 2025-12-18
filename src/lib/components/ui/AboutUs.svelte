<script>
	import { t } from '$lib/i18n';

	// runes-mode props (optional props with defaults)
	let {
		label = null,
		brand = null,
		titleBold = null,
		titleRest = null,
		description = null
	} = $props();

	// computed localized values (uses passed props if provided)
	const labelText = $derived(label ?? $t('about.label'));
	const brandText = $derived(brand ?? $t('about.brand'));
	const titleBoldText = $derived(titleBold ?? $t('about.titleBold'));
	const titleRestText = $derived(titleRest ?? $t('about.titleRest'));
	const descriptionText = $derived(description ?? $t('about.description'));
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

			<p class="font-inter text-sm font-medium text-black">{labelText}</p>
		</div>

		<!-- MAIN CONTENT -->
		<div class="md:col-span-8 md:col-start-4">
			<!-- Brand -->
			<p class="font-inter text-sm text-black/60 mb-4 md:mb-6">{brandText}</p>

			<!-- Headline -->
			<h1
				class="font-inter text-3xl sm:text-4xl md:text-6xl leading-tight md:leading-[1.15] text-black"
			>
				<span class="block md:inline font-semibold">{titleBoldText}</span>{' '}
				<span class="block md:inline text-black/45">{titleRestText}</span>
			</h1>

			<!-- Description -->
			<p
				class="font-inter text-base md:text-lg text-black/60 max-w-xl mt-6 md:mt-8 leading-relaxed"
			>
				{descriptionText}
			</p>
		</div>
	</div>
</section>
