<script>
	import { t } from '$lib/i18n';

	let { plans: plansProp = null } = $props();

	const plans = $derived(
		plansProp ?? [
			{
				id: 'starter',
				name: $t('pricing.plan.starter.name'),
				price: $t('pricing.plan.starter.price'),
				subtitle: $t('pricing.plan.starter.subtitle'),
				highlight: false,
				features: [
					$t('pricing.plan.starter.features.1'),
					$t('pricing.plan.starter.features.2'),
					$t('pricing.plan.starter.features.3'),
					$t('pricing.plan.starter.features.4')
				],
				cta: { label: $t('pricing.plan.starter.cta'), href: '/contact', variant: 'primary' }
			},
			{
				id: 'pro',
				name: $t('pricing.plan.pro.name'),
				price: $t('pricing.plan.pro.price'),
				subtitle: $t('pricing.plan.pro.subtitle'),
				highlight: true,
				features: [
					$t('pricing.plan.pro.features.1'),
					$t('pricing.plan.pro.features.2'),
					$t('pricing.plan.pro.features.3'),
					$t('pricing.plan.pro.features.4'),
					$t('pricing.plan.pro.features.5'),
					$t('pricing.plan.pro.features.6'),
					$t('pricing.plan.pro.features.7')
				],
				cta: { label: $t('pricing.plan.pro.cta'), href: '/contact', variant: 'inverted' }
			},
			{
				id: 'enterprise',
				name: $t('pricing.plan.enterprise.name'),
				price: $t('pricing.plan.enterprise.price'),
				subtitle: $t('pricing.plan.enterprise.subtitle'),
				highlight: false,
				features: [
					$t('pricing.plan.enterprise.features.1'),
					$t('pricing.plan.enterprise.features.2'),
					$t('pricing.plan.enterprise.features.3'),
					$t('pricing.plan.enterprise.features.4'),
					$t('pricing.plan.enterprise.features.5'),
					$t('pricing.plan.enterprise.features.6')
				],
				cta: { label: $t('pricing.plan.enterprise.cta'), href: '/contact', variant: 'outline' }
			}
		]
	);
</script>

<section class="mt-2 max-w-[1600px] mx-auto px-6 md:px-12 py-24">
	<!-- Header -->
	<div class="mb-20">
		<div class="flex items-center gap-3 mb-6">
			<div class="w-5 h-5 rounded-full border border-black flex items-center justify-center">
				<div class="w-2 h-2 rounded-full bg-black"></div>
			</div>
			<p class="font-geist text-sm font-medium">{$t('pricing.eyebrow')}</p>
		</div>

		<h2 class="font-calsans text-5xl md:text-7xl tracking-tight leading-[1.05]">
			{$t('pricing.title')}
			<span class="text-black/40">{$t('pricing.titleMuted')}</span>
		</h2>

		<p class="mt-6 max-w-2xl font-inter text-lg text-black/60">
			{$t('pricing.subtitle')}
		</p>
	</div>

	<!-- Plans -->
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
		{#each plans as plan}
			<div
				class="
					rounded-3xl p-10 flex flex-col relative overflow-hidden min-h-[700px]
					{plan.highlight ? 'bg-black text-white' : 'bg-white border border-black/5 text-black'}
				"
			>
				{#if plan.highlight}
					<div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
				{/if}

				<p class="relative font-geist text-sm opacity-70 mb-4">{plan.name}</p>
				<p class="relative font-calsans text-5xl mb-2">{plan.price}</p>
				<p class="relative font-inter text-sm opacity-60 mb-8">{plan.subtitle}</p>

				<ul class="relative space-y-4 mb-10 font-inter text-sm opacity-80">
					{#each plan.features as feature}
						<li>✔ {feature}</li>
					{/each}
				</ul>

				<a
					href={plan.cta.href}
					class="
						relative mt-auto inline-flex items-center justify-center
						rounded-full px-6 py-3 font-geist text-sm transition
						{plan.cta.variant === 'primary'
						? 'bg-black text-white hover:bg-black/90'
						: plan.cta.variant === 'inverted'
							? 'bg-white text-black hover:bg-white/90'
							: 'border border-black hover:bg-black hover:text-white'}
					"
				>
					{plan.cta.label}
				</a>
			</div>
		{/each}
	</div>
</section>
