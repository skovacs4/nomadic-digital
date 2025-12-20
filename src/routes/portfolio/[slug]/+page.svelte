<script>
	import Contact from '$lib/components/ui/Contact.svelte';
	import { t } from '$lib/i18n';
	import { page } from '$app/stores';

	export let data;
	const { project } = data;

	const url = $page.url.href;

	// SEO strings
	$: title = `${project.client} — ${$t(project.categoryKey)} | Nomadic Digital`;
	$: description = $t(project.overview.descriptionKey);
	const image = project.hero.image;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />

	<!-- Open Graph -->
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={image} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
</svelte:head>

<!-- HERO -->
<section class="relative min-h-[80vh] flex items-end bg-black text-white overflow-hidden">
	<img
		src={project.hero.image}
		alt={project.title}
		class="absolute inset-0 w-full h-full object-cover opacity-90 scale-[1.05]"
	/>
	<div class="absolute inset-0 bg-black/60"></div>

	<div class="relative z-10 max-w-[1600px] mx-auto px-4 md:px-0 pb-20 w-full">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
			<div class="lg:col-span-8 space-y-6">
				<img src={project.hero.logo} class="h-10 md:h-14 object-contain" alt="" />

				<h1 class="text-4xl md:text-6xl tracking-tight leading-[1.05]">
					{$t(project.overview.headlineKey)}
				</h1>

				<p class="text-white/70 text-lg max-w-2xl">
					{$t(project.overview.descriptionKey)}
				</p>
			</div>

			<div class="lg:col-span-4 text-sm text-white/70 space-y-2">
				<p><strong>{$t('portfolio.meta.client')}:</strong> {project.client}</p>
				<p><strong>{$t('portfolio.meta.category')}:</strong> {$t(project.categoryKey)}</p>
				<p><strong>{$t('portfolio.meta.year')}:</strong> {project.year}</p>
				<p><strong>{$t('portfolio.meta.status')}:</strong> {$t(project.statusKey)}</p>
			</div>
		</div>
	</div>
</section>

<!-- OVERVIEW -->
<section class="max-w-[1600px] mx-auto px-4 md:px-0 py-24">
	<div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
		<div class="lg:col-span-4">
			<h3 class="font-geist text-sm font-bold mb-6">{$t('portfolio.sections.scope')}</h3>
			<ul class="space-y-3 text-black/70">
				{#each project.scopeKeys ?? [] as key}
					<li>— {$t(key)}</li>
				{/each}
			</ul>
		</div>

		{#if project.deliverableKeys?.length}
			<div class="lg:col-span-4">
				<h3 class="font-geist text-sm font-bold mb-6">{$t('portfolio.sections.deliverables')}</h3>
				<ul class="space-y-3 text-black/70">
					{#each project.deliverableKeys as key}
						<li>— {$t(key)}</li>
					{/each}
				</ul>
			</div>
		{/if}

		<div class="lg:col-span-4">
			<h3 class="font-geist text-sm font-bold mb-6">{$t('portfolio.sections.technology')}</h3>
			<ul class="flex flex-wrap gap-2">
				{#each project.tech ?? [] as tech}
					<li class="px-3 py-1 rounded-full bg-black/5 text-sm">{tech}</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<!-- OUTCOMES -->
<section class="max-w-[1600px] mx-auto px-4 md:px-0 py-36">
	<div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
		<div class="lg:col-span-3">
			<p class="font-geist text-2xl md:text-4xl leading-[1.2] tracking-tight">
				{project.client} · {project.year}
			</p>
			<p class="font-inter text-sm text-black/40 leading-relaxed max-w-xs font-bold">
				{$t(project.categoryKey)}
			</p>
		</div>

		<div class="lg:col-span-7 space-y-10">
			<p class="font-geist text-2xl md:text-4xl leading-[1.2] tracking-tight">
				<span class="text-black font-[700]">{$t(project.outcomes.headlineKey)}</span>
				<span class="text-black/40">&nbsp;{$t(project.outcomes.descriptionKey)}</span>
			</p>

			{#if project.results?.length}
				<div class="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4">
					{#each project.results as r, i}
						<div class="space-y-1">
							<p class="font-geist text-2xl font-bold text-black">{r.value}</p>
							<p class="font-inter text-sm text-black/40 font-bold">
								{$t(r.labelKey)}
							</p>
						</div>
					{/each}
				</div>
			{/if}

			<a
				href="/contact"
				class="inline-flex items-center gap-3 rounded-full bg-black text-white px-6 py-3 text-sm font-geist transition hover:bg-black/90 hover:gap-4"
			>
				{$t('portfolio.cta.startSimilar')}
				<span class="w-2 h-2 rounded-full bg-white"></span>
			</a>
		</div>
	</div>
</section>

<!-- GALLERY -->
{#if project.gallery?.length}
	<section class="max-w-[1600px] mx-auto px-4 md:px-0 py-24">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each project.gallery as item}
				<div class="overflow-hidden rounded-3xl">
					<img
						src={item.src}
						alt=""
						class="w-full h-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.04]"
					/>
				</div>
			{/each}
		</div>
	</section>
{/if}

<!-- TESTIMONIAL -->
{#if project.testimonial}
	<section class="bg-neutral-100 py-32">
		<div class="max-w-[1200px] mx-auto px-6 text-center space-y-6">
			<p class="text-2xl md:text-5xl leading-relaxed">
				“{$t(project.testimonial.quoteKey)}”
			</p>
			<p class="text-sm text-black/50">
				— {project.testimonial.author}, {$t(project.testimonial.roleKey)}
			</p>
		</div>
	</section>
{/if}

{#if project.demos?.length}
	<section class="max-w-[1600px] mx-auto px-4 md:px-0 py-32 space-y-32">
		{#each project.demos as demo}
			<div
				class="grid grid-cols-1 lg:grid-cols-11 gap-32 items-center mb-64 last:mb-14"
				data-aos="fade-up"
			>
				<!-- VIDEO -->
				<div class={`lg:col-span-6 ${demo.inverted ? 'lg:order-2' : ''}`}>
					<div class="overflow-hidden rounded-3xl will-change-transform translate-z-0">
						<div
							class="scale-[1.10] transition-transform duration-[1400ms] ease-out hover:scale-[1.5]"
						>
							<video
								src={demo.video}
								class="w-full h-full object-cover rounded-[26px]"
								autoplay
								muted
								loop
								playsinline
							/>
						</div>
					</div>
				</div>

				<!-- TEXT -->
				<div class={`lg:col-span-5 ${demo.inverted ? 'lg:order-1' : ''}`}>
					<h3 class="font-geist text-2xl md:text-3xl mb-8">
						{$t(demo.titleKey)}
					</h3>

					<p class="font-inter text-black/60 text-lg max-w-md">
						{$t(demo.bodyKey)}
					</p>
				</div>
			</div>
		{/each}
	</section>
{/if}

<section class="max-w-[1700px] mx-auto">
	<Contact />
</section>
