<script>
const plans = [
	{
		id: 'starter',
		name: 'Starter',
		price: '€1,200',
		subtitle: 'For early-stage businesses',
		highlight: false,
		features: [
			'Website or landing page',
			'UX/UI design',
			'Responsive layout',
			'Basic SEO setup'
		],
		cta: {
			label: 'Get started',
			href: '/contact',
			variant: 'primary'
		}
	},
	{
		id: 'pro',
		name: 'Pro',
		price: '€2,500',
		subtitle: 'Best value for growing teams',
		highlight: true,
		features: [
			'Everything in Starter',
			'Custom integrations',
			'Performance optimization',
			'Advanced SEO & analytics',
			'E-commerce websites (standard)',
			'Mobile app development (simple apps: ordering, booking, MVP)',
			'Priority support'
		],
		cta: {
			label: 'Start project',
			href: '/contact',
			variant: 'inverted'
		}
	},
	{
		id: 'enterprise',
		name: 'Enterprise',
		price: 'Custom',
		subtitle: 'Built around your business',
		highlight: false,
		features: [
			'Complex platforms & SaaS',
			'Custom e-commerce solutions',
			'ERP / API integrations',
			'Automation workflows',
			'Advanced mobile applications',
			'Long-term partnership'
		],
		cta: {
			label: 'Talk to us',
			href: '/contact',
			variant: 'outline'
		}
	}
];

</script>

<section class="mt-2 max-w-[1600px] mx-auto px-6 md:px-12 py-24">
	<!-- Header -->
	<div class="mb-20">
		<div class="flex items-center gap-3 mb-6">
			<div class="w-5 h-5 rounded-full border border-black flex items-center justify-center">
				<div class="w-2 h-2 rounded-full bg-black"></div>
			</div>
			<p class="font-geist text-sm font-medium">Pricing</p>
		</div>

		<h2 class="font-calsans text-5xl md:text-7xl tracking-tight leading-[1.05]">
			Simple pricing
			<span class="text-black/40"> for growing teams.</span>
		</h2>

		<p class="mt-6 max-w-2xl font-inter text-lg text-black/60">
			Transparent plans designed to scale with your business. No hidden fees.
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

				<p class="relative font-geist text-sm opacity-70 mb-4">
					{plan.name}
				</p>

				<p class="relative font-calsans text-5xl mb-2">
					{plan.price}
				</p>

				<p class="relative font-inter text-sm opacity-60 mb-8">
					{plan.subtitle}
				</p>

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
