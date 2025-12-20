<script>
	import { t } from '$lib/i18n';

	let name = '';
	let email = '';
	let message = '';

	let loading = $state(false);
	let success = $state(false);
	let error = $state('');

	async function submit() {
		error = '';
		success = false;

		if (!name || !email || !message) {
			error = $t('contact.error.required');
			return;
		}

		loading = true;

		try {
			const res = await fetch('/api/email', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, email, message })
			});

			const data = await res.json().catch(() => ({}));

			if (!res.ok) {
				// If your API returns a human message, you can show it,
				// otherwise fall back to translated generic error
				throw new Error(data.error || $t('contact.error.generic'));
			}

			success = true;
			name = '';
			email = '';
			message = '';
		} catch (err) {
			error = err?.message || $t('contact.error.generic');
		} finally {
			loading = false;
		}
	}
</script>

<section class="w-full px-4 md:px-12 py-32">
	<div class="relative mx-auto rounded-[40px] overflow-hidden bg-black text-white">
		<!-- Background -->
		<img
			src="/content/team-working.jpg"
			alt="People working on laptops"
			class="absolute inset-0 w-full h-full object-cover opacity-35"
		/>

		<div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50"></div>

		<div
			class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 px-8 md:px-16 py-24 items-center"
		>
			<!-- FORM -->
			<div class="lg:col-span-4 lg:col-start-2">
				<div class="bg-white text-black rounded-3xl p-8 shadow-2xl">
					<p class="font-geist text-xs text-black/60 mb-2">{$t('contact.brand')}</p>
					<h3 class="font-calsans text-2xl mb-6">{$t('contact.form.title')}</h3>

					<form class="space-y-4" on:submit|preventDefault={submit}>
						<input
							bind:value={name}
							type="text"
							placeholder={$t('contact.form.name')}
							class="w-full rounded-xl bg-black/5 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
						/>

						<input
							bind:value={email}
							type="email"
							placeholder={$t('contact.form.email')}
							class="w-full rounded-xl bg-black/5 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
						/>

						<textarea
							bind:value={message}
							rows="4"
							placeholder={$t('contact.form.message')}
							class="w-full rounded-xl bg-black/5 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black resize-none"
						></textarea>

						<button
							type="submit"
							disabled={loading}
							class="w-full rounded-full bg-black text-white py-3 text-sm font-medium
							hover:bg-black/90 transition disabled:opacity-60 cursor-pointer"
						>
							{loading ? $t('contact.form.sending') : $t('contact.form.send')}
						</button>

						{#if error}
							<p class="text-xs text-red-600">{error}</p>
						{/if}

						{#if success}
							<p class="text-xs text-green-600">
								{$t('contact.success')}
							</p>
						{/if}

						<p class="text-[11px] text-black/40 mt-2">
							{$t('contact.legal')}
						</p>
					</form>
				</div>
			</div>

			<!-- CONTENT -->
			<div class="lg:col-span-5 lg:col-start-7">
				<h2 class="font-calsans text-6xl md:text-7xl tracking-tight leading-[1.05] mb-6">
					{$t('contact.title')}
				</h2>

				<p class="font-inter text-lg text-white/70 max-w-lg mb-14">
					{$t('contact.subtitle')}
				</p>

				<div class="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-16">
					<div>
						<p class="font-geist text-sm mb-2">{$t('contact.benefit1.title')}</p>
						<p class="text-sm text-white/60 leading-relaxed">
							{$t('contact.benefit1.text')}
						</p>
					</div>

					<div>
						<p class="font-geist text-sm mb-2">{$t('contact.benefit2.title')}</p>
						<p class="text-sm text-white/60 leading-relaxed">
							{$t('contact.benefit2.text')}
						</p>
					</div>
				</div>

				<!-- CONTACT CARD -->
				<div
					class="
		group
		flex flex-col sm:flex-row
		sm:items-center
		gap-4
		bg-white text-black
		rounded-2xl
		p-4 sm:px-5 sm:py-4
		shadow-lg
		transition-all duration-300
		hover:-translate-y-1 hover:shadow-2xl
	"
				>
					<img
						src="/content/teodora.jpeg"
						class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover"
						alt=""
					/>

					<div class="flex-1">
						<p class="text-[11px] sm:text-xs text-black/60">
							{$t('contact.card.role')}
						</p>
						<p class="font-geist text-sm font-medium">
							{$t('contact.card.name')}
						</p>
					</div>

					<a
						href="https://wa.me/40754209068"
						target="_blank"
						rel="noopener noreferrer"
						class="
			w-full sm:w-auto
			text-center
			rounded-full
			bg-black text-white
			px-4 py-2
			text-xs
			transition-all duration-300
			hover:bg-black/90 hover:scale-[1.03]
			active:scale-95
			whitespace-nowrap
		"
					>
						{$t('contact.card.cta')}
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
