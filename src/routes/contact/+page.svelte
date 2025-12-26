<script>
	import { t } from '$lib/i18n';
	import { page } from '$app/stores';

	let loading = false;
	let success = false;
	let error = '';

	let form = {
		name: '',
		email: '',
		message: '',
		service: ''
	};

	// REACTIVE SERVICE OPTIONS
	// REACTIVE: label = translated, value = fixed English
$: serviceOptions = [
	{
		value: "Brand Identity Design",
		label: $t('services.01.headline')
	},
	{
		value: "Web Design & Development",
		label: $t('services.02.headline')
	},
	{
		value: "Product UI/UX Design",
		label: $t('services.03.headline')
	},
	{
		value: "Marketing & Conversion Optimization",
		label: $t('services.04.headline')
	},
	{
		value: "Ongoing Growth & Creative Partnership",
		label: $t('services.05.headline')
	}
];


	const url = $page.url.href;
	const title = `${$t('contact.meta.title')} | Nomadic Digital`;
	const description = $t('contact.meta.description');

	async function submit() {
		error = '';
		success = false;
		loading = true;

		try {
			const res = await fetch('/api/email', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(form)
			});

			const data = await res.json();
			if (!res.ok) throw new Error(data.error || $t('contact.form.genericError'));

			success = true;
			form = { name: '', email: '', message: '', service: '' };
		} catch (e) {
			error = e?.message || $t('contact.form.genericError');
		} finally {
			loading = false;
		}
	}
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
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
</svelte:head>

<section class="mx-auto py-24">
	<!-- TOP BANNER -->
	<div
		class="relative mb-24 overflow-hidden bg-black text-white text-center min-h-[500px] flex items-center justify-center"
		data-aos="fade"
		data-aos-duration="300"
	>
		<img
			src="https://thenomadicdigital.com/wp-content/uploads/2024/09/IMG.png"
			alt={$t('contact.hero.imageAlt')}
			class="absolute inset-0 w-full h-full object-cover opacity-35"
		/>

		<div class="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40"></div>

		<div class="relative z-10 px-8 md:px-16 max-w-" data-aos="fade-up" data-aos-delay="50">
			<p class="font-geist text-sm text-white/70 mb-4">
				{$t('contact.hero.eyebrow')}
			</p>

			<h2
				class="font-calsans text-5xl md:text-6xl leading-[1.05] tracking-tight mb-6"
				data-aos="fade-up"
				data-aos-delay="250"
			>
				{$t('contact.hero.title')}
				<span class="text-white/50"> {$t('contact.hero.titleMuted')}</span>
			</h2>

			<p class="font-inter text-lg text-white/70" data-aos="fade-up" data-aos-delay="150">
				{$t('contact.hero.subtitle')}
			</p>
		</div>
	</div>

	<div
		class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start max-w-[1600px] mx-auto px-6 md:px-12"
	>
		<!-- LEFT CONTENT -->
		<div class="lg:col-span-5">
			<div class="flex items-center gap-3 mb-6">
				<div class="w-5 h-5 rounded-full border border-black flex items-center justify-center">
					<div class="w-2 h-2 rounded-full bg-black"></div>
				</div>
				<p class="font-geist text-sm font-medium">
					{$t('contact.left.kicker')}
				</p>
			</div>

			<h1 class="font-calsans text-6xl md:text-7xl tracking-tight leading-[1.05] mb-6">
				{$t('contact.left.title')}<span class="text-black/40"></span>
			</h1>

			<p class="font-inter text-lg text-black/60 max-w-md mb-12">
				{$t('contact.left.description')}
			</p>

			<div class="space-y-8">
				<div>
					<p class="font-geist text-sm mb-1">{$t('contact.left.emailLabel')}</p>
					<p class="font-inter text-black/60">contact@thenomadicdigital.com</p>
				</div>

				<div>
					<p class="font-geist text-sm mb-1">{$t('contact.left.responseLabel')}</p>
					<p class="font-inter text-black/60">{$t('contact.left.responseValue')}</p>
				</div>
			</div>
		</div>

		<!-- FORM -->
		<div class="lg:col-span-6 lg:col-start-7">
			<div
				class="bg-white border border-black/5 rounded-3xl p-8 md:p-10"
				data-aos="fade-up"
				data-aos-delay="250"
				data-aos-duration="700"
			>
				<form class="space-y-6" on:submit|preventDefault={submit}>
					<div>
						<label class="block font-inter text-sm mb-2">
							{$t('contact.form.nameLabel')}
						</label>
						<input
							bind:value={form.name}
							required
							class="w-full rounded-xl bg-black/5 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black transition-all duration-200 focus:scale-[1.01]"
							placeholder={$t('contact.form.namePlaceholder')}
						/>
					</div>

					<div>
						<label class="block font-inter text-sm mb-2">
							{$t('contact.form.emailLabel')}
						</label>
						<input
							type="email"
							bind:value={form.email}
							required
							class="w-full rounded-xl bg-black/5 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black transition-all duration-200 focus:scale-[1.01]"
							placeholder={$t('contact.form.emailPlaceholder')}
						/>
					</div>

					<div>
						<label class="block font-inter text-sm mb-2">
							{$t('contact.form.serviceLabel')}
						</label>

						<select
							bind:value={form.service}
							required
							class="w-full rounded-xl bg-black/5 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black transition-all duration-200 focus:scale-[1.01]"
						>
							<option value="" disabled selected>
								{$t('contact.form.servicePlaceholder')}
							</option>

							{#each serviceOptions as opt}
								<option value={opt.value}>{opt.label}</option>
							{/each}
						</select>
					</div>

					<div>
						<label class="block font-inter text-sm mb-2">
							{$t('contact.form.messageLabel')}
						</label>
						<textarea
							rows="5"
							bind:value={form.message}
							required
							class="w-full rounded-xl bg-black/5 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black resize-none transition-all duration-200 focus:scale-[1.01]"
							placeholder={$t('contact.form.messagePlaceholder')}
						></textarea>
					</div>

					<button
						type="submit"
						disabled={loading}
						class="
							w-full rounded-full bg-black text-white py-3 text-sm font-medium cursor-pointer
							transition-all duration-200
							hover:bg-black/90
							active:scale-[0.98]
							disabled:opacity-60
						"
					>
						{loading ? $t('contact.form.sending') : $t('contact.form.send')}
					</button>

					{#if success}
						<p class="text-sm text-green-600" data-aos="fade-in">
							{$t('contact.form.success')}
						</p>
					{/if}

					{#if error}
						<p class="text-sm text-red-600" data-aos="fade-in">
							{error}
						</p>
					{/if}

					<p class="text-[11px] text-black/40">
						{$t('contact.form.privacyNote')}
					</p>
				</form>
			</div>
		</div>
	</div>
</section>
