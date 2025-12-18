<script>
	import { slide, fade } from 'svelte/transition';
	import { t } from '$lib/i18n';

	let open = $state(-1);

	let { faqs: faqsProp = null } = $props();

	const faqs = $derived(
		faqsProp ?? [
			{ q: $t('faq.1.q'), a: $t('faq.1.a') },
			{ q: $t('faq.2.q'), a: $t('faq.2.a') },
			{ q: $t('faq.3.q'), a: $t('faq.3.a') },
			{ q: $t('faq.4.q'), a: $t('faq.4.a') },
			{ q: $t('faq.5.q'), a: $t('faq.5.a') },
			{ q: $t('faq.6.q'), a: $t('faq.6.a') }
		]
	);
</script>

<section class="mt-2 max-w-[1600px] mx-auto px-6 md:px-12 py-24">
	<div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
		<!-- LEFT -->
		<div class="lg:col-span-4">
			<h2 class="font-calsans text-6xl md:text-7xl tracking-tight mb-6">
				{$t('faq.title')}<span class="text-black/40"></span>
			</h2>

			<p class="font-inter text-lg text-black/60 max-w-sm">
				{$t('faq.subtitle')}
			</p>
		</div>

		<!-- RIGHT -->
		<div class="lg:col-span-8 space-y-4">
			{#each faqs as item, i}
				<div class="rounded-2xl bg-white border border-black/5 px-8 py-6 transition cursor-pointer">
					<button
						class="w-full flex items-center justify-between text-left cursor-pointer"
						type="button"
						on:click={() => (open = open === i ? -1 : i)}
					>
						<span class="font-geist text-lg">{item.q}</span>

						<span
							class="w-8 h-8 rounded-full border border-black flex items-center justify-center text-sm
							transition-transform duration-300 cursor-pointer"
							class:rotate-45={open === i}
						>
							+
						</span>
					</button>

					{#if open === i}
						<div class="overflow-hidden" in:slide={{ duration: 260 }} out:slide={{ duration: 200 }}>
							<p
								class="mt-4 font-inter text-sm text-black/60 max-w-2xl leading-relaxed"
								in:fade={{ duration: 200 }}
								out:fade={{ duration: 150 }}
							>
								{item.a}
							</p>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
