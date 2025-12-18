<script>
	import { t, locale } from '$lib/i18n';
</script>

<footer class="w-full border-t border-black/5 font-bold">
	<div class="max-w-[1600px] mx-auto px-6 md:px-12 py-24">
		<!-- TOP -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
			<!-- BRAND -->
			<div class="lg:col-span-4">
				<img src="/logos/landscape-minimal-logo.png" class="mb-10" alt={$t('footer.logoAlt')} />

				<p class="font-inter text-sm text-black/60 max-w-sm">
					{$t('footer.desc')}
				</p>

				{#if $locale === 'ro'}
					<div class="mt-6 font-inter text-sm text-black/60 space-y-1">
						<p><span class="text-black/70 font-semibold">Denumire:</span> NOMADIC DIGITAL SRL</p>
						<p><span class="text-black/70 font-semibold">CUI:</span> RO50237802</p>
					</div>
				{/if}
			</div>

			<!-- LINKS -->
			<div class="lg:col-span-7 lg:col-start-6 grid grid-cols-2 sm:grid-cols-3 gap-12">
				<div>
					<p class="font-geist md:text-3xl mb-4">{$t('footer.company')}</p>
					<ul class="space-y-3 text-sm text-black/60">
						<li><a href="/about" class="hover:text-black">{$t('footer.company.about')}</a></li>
						<li><a href="/portfolio" class="hover:text-black">{$t('footer.company.work')}</a></li>
						<li><a href="/pricing" class="hover:text-black">{$t('footer.company.pricing')}</a></li>
						<li><a href="/contact" class="hover:text-black">{$t('footer.company.contact')}</a></li>
					</ul>
				</div>

				<div>
					<p class="font-geist md:text-3xl mb-4">{$t('footer.services')}</p>
					<ul class="space-y-3 text-sm text-black/60">
						<li><a href="/services" class="hover:text-black">{$t('footer.services.1')}</a></li>
						<li><a href="/services" class="hover:text-black">{$t('footer.services.2')}</a></li>
						<li><a href="/services" class="hover:text-black">{$t('footer.services.3')}</a></li>
						<li><a href="/services" class="hover:text-black">{$t('footer.services.4')}</a></li>
					</ul>
				</div>

				<div>
					<p class="font-geist md:text-3xl mb-4">{$t('footer.follow')}</p>
					<ul class="space-y-3 text-sm text-black/60">
						<li>
							<a
								href="https://www.instagram.com/nomadic.digital.apps/"
								target="_blank"
								rel="noopener noreferrer"
								class="hover:text-black"
							>
								{$t('footer.follow.instagram')}
							</a>
						</li>
						<li>
							<a
								href="https://www.facebook.com/profile.php?id=61552759211758"
								target="_blank"
								rel="noopener noreferrer"
								class="hover:text-black"
							>
								{$t('footer.follow.facebook')}
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/company/nomadic-digital-apps/"
								target="_blank"
								rel="noopener noreferrer"
								class="hover:text-black"
							>
								{$t('footer.follow.linkedin')}
							</a>
						</li>
						<li>
							<a
								href="https://x.com/nomadicdigital0"
								target="_blank"
								rel="noopener noreferrer"
								class="hover:text-black"
							>
								{$t('footer.follow.x')}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- CTA -->
		<div
			class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-black/5 pt-12"
		>
			<p class="font-inter text-sm text-black/50">
				{@html $t('footer.copyright', { year: new Date().getFullYear() })}
			</p>

			<div class="flex items-center gap-4 flex-wrap">
				<a
					href="/contact"
					class="rounded-full bg-black text-white px-6 py-3 text-sm hover:bg-black/90 transition"
				>
					{$t('footer.cta')}
				</a>

				<a href="/legals/privacy-policy" class="text-sm text-black/50 hover:text-black transition">
					{$t('footer.privacy')}
				</a>

				<a
					href="/legals/terms-and-conditions"
					class="text-sm text-black/50 hover:text-black transition"
				>
					{$t('footer.terms')}
				</a>

				{#if $locale === 'ro'}
					<a
						href="https://anpc.ro/"
						target="_blank"
						rel="noopener noreferrer"
						class="text-sm text-black/50 hover:text-black transition"
					>
						ANPC
					</a>
				{/if}
			</div>
		</div>
	</div>
</footer>
