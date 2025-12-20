<script>
	import Portfolio from '$lib/components/ui/Portfolio.svelte';
	import { t } from '$lib/i18n';
	import { page } from '$app/stores';

	const url = $page.url.href;
</script>

<svelte:head>
	<title>{$t('portfolio.meta.title')}</title>
	<meta name="description" content={$t('portfolio.meta.description')} />

	<link rel="canonical" href={url} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content={$t('portfolio.meta.title')} />
	<meta property="og:description" content={$t('portfolio.meta.description')} />
	<meta property="og:url" content={url} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={$t('portfolio.meta.title')} />
	<meta name="twitter:description" content={$t('portfolio.meta.description')} />
</svelte:head>

<section
	class="max-w-[1600px] mx-auto px-2 md:px-12 py-48 text-center"
	data-aos="fade-up"
>
	<h1
		class="text-6xl md:text-8xl tracking-tight leading-[1.05] mb-24"
	>
		{$t('portfolio.pageTitle')}
	</h1>

	<Portfolio />
</section>
