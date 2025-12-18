<script>
  import { t } from '$lib/i18n';

  // optional overrides via props (runes mode)
  let {
    eyebrow = null,
    title = null,
    year = null,
    summary = null,
    testimonials = null
  } = $props();

  const eyebrowText = $derived(eyebrow ?? $t('testimonials.eyebrow'));
  const titleText = $derived(title ?? $t('testimonials.title'));
  const yearText = $derived(year ?? $t('testimonials.year'));

  const summaryData = $derived(
    summary ?? {
      rating: $t('testimonials.summary.rating'),
      count: '56+',
      text: $t('testimonials.summary.text')
    }
  );

  const testimonialsData = $derived(
    testimonials ?? [
      {
        name: $t('testimonials.items.1.name'),
        role: $t('testimonials.items.1.role'),
        text: $t('testimonials.items.1.text'),
        rating: 5
      },
      {
        name: $t('testimonials.items.2.name'),
        role: $t('testimonials.items.2.role'),
        text: $t('testimonials.items.2.text'),
        rating: 5
      },
      {
        name: $t('testimonials.items.3.name'),
        role: $t('testimonials.items.3.role'),
        text: $t('testimonials.items.3.text'),
        rating: 5
      }
    ]
  );
</script>

<section class="px-6 md:px-12 py-32 max-w-8xl mx-auto">
	<!-- Header -->
	<div class="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 mb-16 md:mb-20 overflow-x-hidden">
		<!-- Eyebrow -->
		<div class="flex items-center gap-3 md:col-span-2">
			<div
				class="w-5 h-5 rounded-full border border-black flex items-center justify-center shrink-0"
			>
				<div class="w-2 h-2 rounded-full bg-black"></div>
			</div>
			<p class="font-inter text-sm font-medium text-black">{eyebrowText}</p>
		</div>

		<!-- Title -->
		<div class="md:col-span-8 md:col-start-4">
			<h2 class="text-[clamp(3.5rem,8vw,6.5rem)] font-semibold tracking-tight">
				{titleText}
			</h2>

			<p class="font-inter text-sm text-black/50 mt-3">{yearText}</p>
		</div>
	</div>

	<!-- Content grid -->
	<div class="grid grid-cols-1 md:grid-cols-4 gap-1 md:ml-[16.666%]">
		<!-- Summary card -->
		<div class="bg-white rounded-3xl p-8 border border-black/5 flex flex-col justify-between">
			<div>
				<p class="font-inter text-5xl text-black mb-2">
					{summaryData.rating}
					<span class="text-lg text-black/50">/5</span>
				</p>
				<p class="font-inter text-sm text-black/60">{summaryData.text}</p>
			</div>

			<button
				class="mt-8 w-full rounded-full bg-black text-white py-3 text-sm font-inter hover:bg-black/90 transition"
			>
				{$t('testimonials.cta.leaveReview')}
			</button>
		</div>

		<!-- Testimonial cards -->
		{#each testimonialsData as item}
			<div class="bg-white rounded-3xl p-8 border border-black/5 flex flex-col justify-between">
				<div class="flex gap-1 text-sm text-black/80 mb-6">
					{#each Array(item.rating) as _}
						<span>★</span>
					{/each}
				</div>

				<p class="font-inter text-lg text-black leading-relaxed mb-8">{item.text}</p>

				<div>
					<p class="font-inter text-sm text-black">{item.name}</p>
					<p class="font-inter text-xs text-black/50">{item.role}</p>
				</div>
			</div>
		{/each}
	</div>
</section>
