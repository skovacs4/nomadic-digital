<script>
	import { t } from '$lib/i18n';

	const lastUpdated = 'Mar 5, 2025';
</script>

<section class="px-6 md:px-12 py-32 max-w-[1200px] mx-auto">
	<!-- Header -->
	<div class="mb-20">
		<h1 class="font-inter text-[clamp(3.5rem,8vw,6.5rem)] tracking-tight leading-[1.05]">
			{$t('terms.title')}<span class="text-black/40">.</span>
		</h1>

		<p class="mt-4 text-sm text-black/50">
			{$t('terms.lastUpdated', { date: lastUpdated })}
		</p>
	</div>

	<!-- Intro -->
	<div class="max-w-3xl mb-20">
		<p class="font-inter text-lg text-black/70 leading-relaxed">
			{$t('terms.intro')}
		</p>
	</div>

	<!-- Content -->
	<div class="space-y-16 max-w-3xl">
		<!-- 1 -->
		<div>
			<h2 class="font-inter text-2xl mb-4">
				{$t('terms.sections.about.title')}
			</h2>
			<p class="text-black/70 leading-relaxed mb-4">
				{$t('terms.sections.about.text')}
			</p>
		</div>

		<!-- 2 -->
		<div>
			<h2 class="font-inter text-2xl mb-4">
				{$t('terms.sections.usage.title')}
			</h2>
			<p class="text-black/70 mb-4">
				{$t('terms.sections.usage.text')}
			</p>

			<ul class="list-disc pl-6 space-y-2 text-black/70 mb-4">
				<li>{$t('terms.sections.usage.items.access')}</li>
				<li>{$t('terms.sections.usage.items.damage')}</li>
				<li>{$t('terms.sections.usage.items.copy')}</li>
			</ul>
		</div>

		<!-- 3 -->
		<div>
			<h2 class="font-inter text-2xl mb-4">
				{$t('terms.sections.services.title')}
			</h2>
			<p class="text-black/70 leading-relaxed mb-4">
				{$t('terms.sections.services.text')}
			</p>
		</div>

		<!-- 4 -->
		<div>
			<h2 class="font-inter text-2xl mb-4">
				{$t('terms.sections.ip.title')}
			</h2>
			<p class="text-black/70 leading-relaxed mb-4">
				{$t('terms.sections.ip.text')}
			</p>
		</div>

		<!-- 5 -->
		<div>
			<h2 class="font-inter text-2xl mb-4">
				{$t('terms.sections.liability.title')}
			</h2>
			<p class="text-black/70 leading-relaxed mb-4">
				{$t('terms.sections.liability.text')}
			</p>
		</div>

		<!-- 6 -->
		<div>
			<h2 class="font-inter text-2xl mb-4">
				{$t('terms.sections.links.title')}
			</h2>
			<p class="text-black/70 leading-relaxed mb-4">
				{$t('terms.sections.links.text')}
			</p>
		</div>

		<!-- 7 -->
		<div>
			<h2 class="font-inter text-2xl mb-4">
				{$t('terms.sections.changes.title')}
			</h2>
			<p class="text-black/70 leading-relaxed mb-4">
				{$t('terms.sections.changes.text')}
			</p>
		</div>

		<!-- 8 -->
		<div>
			<h2 class="font-inter text-2xl mb-4">
				{$t('terms.sections.contact.title')}
			</h2>
			<p class="text-black/70 leading-relaxed mb-4">
				{$t('terms.sections.contact.text')}
			</p>

			<p class="mt-4 font-medium text-black">contact@nomadicdigital.ro</p>
		</div>
	</div>
</section>
