<script lang="ts">
	// @ts-nocheck
	import { t } from '$lib/i18n';

	let openId: string | null = null;

	const VISIBLE_TAGS = 5;
	let expandedCategories: Record<string, boolean> = {};

	const services = [
		{
			id: '01',
			titleKey: 'services.01.title',
			descKey: 'services.01.desc',
			image: '/content/services/mockup-open-laptop.jpg',
			categories: [
				'services.01.cat.1',
				'services.01.cat.2',
				'services.01.cat.3',
				'services.01.cat.4',
				'services.01.cat.5',
				'services.01.cat.6'
			]
		},
		{
			id: '02',
			titleKey: 'services.02.title',
			descKey: 'services.02.desc',
			image: '/content/services/saas-code-2.jpg',
			categories: [
				'services.02.cat.1',
				'services.02.cat.2',
				'services.02.cat.3',
				'services.02.cat.4',
				'services.02.cat.5',
				'services.02.cat.6',
				'services.02.cat.7',
				'services.02.cat.8'
			]
		},
		{
			id: '03',
			titleKey: 'services.03.title',
			descKey: 'services.03.desc',
			image: '/content/services/design.jpg',
			categories: [
				'services.03.cat.1',
				'services.03.cat.2',
				'services.03.cat.3',
				'services.03.cat.4',
				'services.03.cat.5',
				'services.03.cat.6'
			]
		},
		{
			id: '04',
			titleKey: 'services.04.title',
			descKey: 'services.04.desc',
			image: '/content/services/web-view.jpg',
			categories: [
				'services.04.cat.1',
				'services.04.cat.2',
				'services.04.cat.3',
				'services.04.cat.4',
				'services.04.cat.5',
				'services.04.cat.6',
				'services.04.cat.7'
			]
		},
		{
			id: '05',
			titleKey: 'services.05.title',
			descKey: 'services.05.desc',
			image: '/content/services/app-development.jpg',
			categories: [
				'services.05.cat.1',
				'services.05.cat.2',
				'services.05.cat.3',
				'services.05.cat.4',
				'services.05.cat.5',
				'services.05.cat.6'
			]
		}
	];

	function toggle(id: string) {
		openId = openId === id ? null : id;
	}

	function toggleCategories(id: string) {
		expandedCategories[id] = !expandedCategories[id];
	}
</script>

<section
	class="relative bg-black text-white px-6 md:px-14 py-42 overflow-hidden"
	data-aos="fade-up"
>
	<!-- Background image -->
	<div
		class="absolute inset-0 pointer-events-none bg-cover bg-center opacity-[1]"
		style="background-image: url('/content/abstract-dark.jpg');"
	></div>

	<!-- Dark overlay -->
	<div class="absolute inset-0 pointer-events-none bg-black/70"></div>

	<!-- Content -->
	<div class="relative z-10">
		<!-- Header -->
		<div class="max-w-7xl mx-auto mb-24" data-aos="fade-up">
			<div class="flex items-center gap-3 text-sm text-white/60 mb-6">
				<span class="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center"
					>+</span
				>
				<span>{$t('services.kicker')}</span>
			</div>

			<h2 class="text-[clamp(3.5rem,8vw,6.5rem)] font-semibold tracking-tight">
				{$t('services.heading')}<span class="text-white/40"></span>
			</h2>
		</div>

		<!-- Accordion -->
		<div class="max-w-7xl mx-auto divide-y divide-white/10">
			{#each services as s, i}
				<div class="py-8" data-aos="fade-up" data-aos-delay={i * 100}>
					<!-- Row header -->
					<button
						on:click={() => toggle(s.id)}
						class="w-full flex items-center justify-between gap-8 text-left group cursor-pointer"
					>
						<div class="flex items-center gap-10">
							<span class="text-white/40 text-sm w-16">({s.id})</span>
							<h3 class="text-xl md:text-2xl font-semibold">{$t(s.titleKey)}</h3>
						</div>

						<span
							class="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center
							text-white/70 group-hover:border-white group-hover:text-white transition"
						>
							{openId === s.id ? '–' : '+'}
						</span>
					</button>

					<!-- Expanded content -->
					{#if openId === s.id}
						<div
							class="mt-10 pl-[6.5rem] grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-12 transition-all duration-300"
							data-aos="fade-in"
							data-aos-delay="80"
						>
							<!-- Image -->
							<div class="w-28 h-28 rounded-xl overflow-hidden bg-white/10 shrink-0">
								<img src={s.image} alt="" class="w-full h-full object-cover" />
							</div>

							<!-- Text -->
							<div>
								<p class="text-white/60 max-w-xl mb-6">{$t(s.descKey)}</p>
							</div>

							<!-- Categories -->
							<div class="max-w-sm">
								<span class="block text-xs uppercase tracking-wider text-white/40 mb-3">
									{$t('services.categoriesLabel')}
								</span>

								<div class="flex flex-wrap gap-2">
									{#each expandedCategories[s.id] ? s.categories : s.categories.slice(0, VISIBLE_TAGS) as c}
										<span class="px-3 py-1.5 text-xs rounded-full bg-white text-black font-medium">
											{$t(c)}
										</span>
									{/each}

									{#if s.categories.length > VISIBLE_TAGS}
										<button
											type="button"
											on:click={() => toggleCategories(s.id)}
											class="px-3 py-1.5 text-xs rounded-full bg-white/10 text-white/70 cursor-pointer
											hover:bg-white/20 hover:text-white transition"
										>
											{expandedCategories[s.id]
												? $t('services.showLess')
												: `+${s.categories.length - VISIBLE_TAGS}`}
										</button>
									{/if}
								</div>
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
