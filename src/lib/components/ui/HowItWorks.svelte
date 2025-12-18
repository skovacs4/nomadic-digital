<script>
  import { t } from '$lib/i18n';

  const steps = $derived([
    {
      step: $t('how.steps.1.step'),
      title: $t('how.steps.1.title'),
      description: $t('how.steps.1.desc')
    },
    {
      step: $t('how.steps.2.step'),
      title: $t('how.steps.2.title'),
      description: $t('how.steps.2.desc')
    },
    {
      step: $t('how.steps.3.step'),
      title: $t('how.steps.3.title'),
      description: $t('how.steps.3.desc')
    },
    {
      step: $t('how.steps.4.step'),
      title: $t('how.steps.4.title'),
      description: $t('how.steps.4.desc')
    }
  ]);
</script>

<section class="px-6 md:px-12 py-24 mx-auto">
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 md:ml-[0.1]">
		{#each steps as s}
			<div class="border-t border-black/10 pt-6">
				<p class="font-geist text-xs text-black/40 mb-4">{s.step}</p>
				<h3 class="font-calsans text-xl md:text-2xl leading-tight mb-3 text-black">{s.title}</h3>
				<p class="font-inter text-sm text-black/60 leading-relaxed">{s.description}</p>
			</div>
		{/each}
	</div>
</section>
