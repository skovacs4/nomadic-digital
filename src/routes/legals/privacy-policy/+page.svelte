<script>
	import { t } from '$lib/i18n';
	import { page } from '$app/stores';

	const lastUpdated = 'Mar 5, 2025';
	const url = $page.url.href;
</script>

<svelte:head>
	<title>{$t('privacy.meta.title')}</title>
	<meta name="description" content={$t('privacy.meta.description')} />

	<link rel="canonical" href={url} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content={$t('privacy.meta.title')} />
	<meta property="og:description" content={$t('privacy.meta.description')} />
	<meta property="og:url" content={url} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={$t('privacy.meta.title')} />
	<meta name="twitter:description" content={$t('privacy.meta.description')} />
</svelte:head>

<section class="px-6 md:px-12 py-32 max-w-[1200px] mx-auto">
	<!-- Header -->
	<div class="mb-20">
		<h1 class="font-inter text-[clamp(3.5rem,8vw,6.5rem)] tracking-tight leading-[1.05]">
			{$t('privacy.title')}
		</h1>

		<p class="mt-4 text-sm text-black/50">
			{$t('privacy.lastUpdated', { date: lastUpdated })}
		</p>
	</div>

	<!-- Intro -->
	<div class="max-w-3xl mb-20">
		<p class="font-inter text-lg text-black/70 leading-relaxed">
			{@html $t('privacy.intro')}
		</p>
	</div>

	<!-- Content -->
	<div class="space-y-8 max-w-3xl">
		<div>
			<h2 class="font-inter text-2xl mb-4">
				{$t('privacy.sections.collect.title')}
			</h2>
			<p class="text-black/70 mb-4">
				{$t('privacy.sections.collect.text')}
			</p>
			<ul class="list-disc pl-6 space-y-2 text-black/70 mb-4">
				<li>{$t('privacy.sections.collect.items.name')}</li>
				<li>{$t('privacy.sections.collect.items.email')}</li>
				<li>{$t('privacy.sections.collect.items.message')}</li>
				<li>{$t('privacy.sections.collect.items.optional')}</li>
			</ul>
		</div>

		<div>
			<h2 class="font-inter text-2xl mb-4">
				{$t('privacy.sections.usage.title')}
			</h2>
			<p class="text-black/70 mb-4">
				{$t('privacy.sections.usage.text')}
			</p>
			<ul class="list-disc pl-6 space-y-2 text-black/70 mb-4">
				<li>{$t('privacy.sections.usage.items.reply')}</li>
				<li>{$t('privacy.sections.usage.items.projects')}</li>
				<li>{$t('privacy.sections.usage.items.improve')}</li>
			</ul>
			<p class="text-black/70 mt-4 mb-4">
				{$t('privacy.sections.usage.note')}
			</p>
		</div>

		<div>
			<h2 class="font-inter text-2xl mb-4">
				{$t('privacy.sections.security.title')}
			</h2>
			<p class="text-black/70 leading-relaxed mb-4">
				{$t('privacy.sections.security.text')}
			</p>
		</div>

		<div>
			<h2 class="font-inter text-2xl mb-4">
				{$t('privacy.sections.cookies.title')}
			</h2>
			<p class="text-black/70 leading-relaxed mb-4">
				{$t('privacy.sections.cookies.text')}
			</p>
		</div>

		<div>
			<h2 class="font-inter text-2xl mb-4">
				{$t('privacy.sections.rights.title')}
			</h2>
			<p class="text-black/70 mb-4">
				{$t('privacy.sections.rights.text')}
			</p>
			<ul class="list-disc pl-6 space-y-2 text-black/70 mb-4">
				<li>{$t('privacy.sections.rights.items.access')}</li>
				<li>{$t('privacy.sections.rights.items.modify')}</li>
				<li>{$t('privacy.sections.rights.items.withdraw')}</li>
			</ul>
		</div>

		<div>
			<h2 class="font-inter text-2xl mb-4">
				{$t('privacy.sections.contact.title')}
			</h2>
			<p class="text-black/70 leading-relaxed mb-4">
				{$t('privacy.sections.contact.text')}
			</p>
			<p class="mt-4 text-black font-medium mb-4">contact@nomadicdigital.ro</p>
		</div>
	</div>
</section>
