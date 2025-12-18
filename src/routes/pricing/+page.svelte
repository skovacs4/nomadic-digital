<script>
	import Pricing from '$lib/components/ui/Pricing.svelte';
	import { t } from '$lib/i18n';
	import { page } from '$app/stores';

	const url = $page.url.href;

	const title = `${$t('pricing.title')} | Nomadic Digital`;
	const description = $t('pricing.meta.description');
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
</svelte:head>



<div class="py-24">
	<Pricing />
</div>
