<script lang="ts">
	// @ts-nocheck
	let openId: string | null = null;

	const VISIBLE_TAGS = 5;
	let expandedCategories: Record<string, boolean> = {};

	const services = [
		{
			id: '001',
			title: 'Web design and development',
			description:
				'Modern, responsive, and user-friendly websites designed to engage visitors and drive conversions.',
			image:
				'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
			categories: [
				'Packaging design',
				'Logo design',
				'Rebranding',
				'Typography',
				'Guidelines',
				'Visual identity'
			]
		},
		{
			id: '002',
			title: 'Social media marketing',
			description:
				'Strategic, data-driven social media campaigns designed to build brand awareness and connect with your audience.',
			image:
				'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
			categories: [
				'Content strategy',
				'Community management',
				'Paid advertising',
				'Analytics & reporting',
				'Platform optimization'
			]
		},
		{
			id: '003',
			title: 'SEO and content marketing',
			description:
				'Search optimization and high-quality content that increases visibility, drives traffic, and builds authority.',
			image:
				'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
			categories: [
				'Keyword research',
				'On-page optimization',
				'Content creation',
				'Link building'
			]
		},
		{
			id: '004',
			title: 'Branding and identity',
			description:
				'Distinctive, memorable brand experiences that communicate your values and create emotional connections.',
			image:
				'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80',
			categories: [
				'Brand strategy',
				'Logo design',
				'Brand voice',
				'Color systems',
				'Brand guidelines',
				'Identity applications'
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

<section class="relative bg-black text-white px-6 md:px-14 py-42" data-aos="fade-up">
	<!-- Header -->
	<div class="max-w-7xl mx-auto mb-24" data-aos="fade-up">
		<div class="flex items-center gap-3 text-sm text-white/60 mb-6">
			<span class="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center"
				>+</span
			>
			<span>What we do</span>
		</div>

		<h2 class="text-[clamp(3.5rem,8vw,6.5rem)] font-semibold tracking-tight">
			Services<span class="text-white/40"></span>
			<!-- <span class="text-white/40 text-2xl align-super ml-2">(4)</span> -->
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
						<h3 class="text-xl md:text-2xl font-semibold">{s.title}</h3>
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
						class="mt-10 pl-[6.5rem] grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-12"
						data-aos="fade-up"
						data-aos-delay="80"
					>
						<!-- Image -->
						<div class="w-28 h-28 rounded-xl overflow-hidden bg-white/10 shrink-0">
							<img src={s.image} alt="" class="w-full h-full object-cover" />
						</div>

						<!-- Text -->
						<div>
							<p class="text-white/60 max-w-xl mb-6">{s.description}</p>
						</div>

						<!-- Categories -->
						<div class="max-w-sm">
							<span class="block text-xs uppercase tracking-wider text-white/40 mb-3">
								Categories
							</span>

							<div class="flex flex-wrap gap-2">
								{#each expandedCategories[s.id] ? s.categories : s.categories.slice(0, VISIBLE_TAGS) as c}
									<span class="px-3 py-1.5 text-xs rounded-full bg-white text-black font-medium">
										{c}
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
											? 'Show less'
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
</section>
