<script>
	let loading = false;
	let success = false;
	let error = '';

	let form = {
		name: '',
		email: '',
		message: ''
	};

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
			if (!res.ok) throw new Error(data.error || 'Something went wrong');

			success = true;
			form = { name: '', email: '', message: '' };
		} catch (e) {
			error = e.message;
		} finally {
			loading = false;
		}
	}
</script>

<section class=" mx-auto py-24">
	<!-- TOP BANNER -->
	<div
		class="relative mb-24 overflow-hidden bg-black text-white text-center min-h-[500px] flex items-center justify-center"
		data-aos="fade"
		data-aos-duration="300"
	>
		<!-- Background image -->
		<img
			src="https://thenomadicdigital.com/wp-content/uploads/2024/09/IMG.png"
			alt=""
			class="absolute inset-0 w-full h-full object-cover opacity-35"
		/>

		<!-- Overlay -->
		<div class="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40"></div>

		<!-- Content -->
		<div class="relative z-10 px-8 md:px-16 max-w-" data-aos="fade-up" data-aos-delay="50">
			<p class="font-geist text-sm text-white/70 mb-4">Start a conversation</p>

			<h2
				class="font-calsans text-5xl md:text-6xl leading-[1.05] tracking-tight mb-6"
				data-aos="fade-up"
				data-aos-delay="250"
			>
				Let’s build something
				<span class="text-white/50"> meaningful.</span>
			</h2>

			<p class="font-inter text-lg text-white/70" data-aos="fade-up" data-aos-delay="150">
				Websites, e-commerce, mobile apps, and growth strategies — built with clarity, performance,
				and long-term value in mind.
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
				<p class="font-geist text-sm font-medium">Contact</p>
			</div>

			<h1 class="font-calsans text-6xl md:text-7xl tracking-tight leading-[1.05] mb-6">
				Let’s talk.<span class="text-black/40"></span>
			</h1>

			<p class="font-inter text-lg text-black/60 max-w-md mb-12">
				Tell us about your project. We’ll get back with clear next steps, no obligations.
			</p>

			<div class="space-y-8">
				<div>
					<p class="font-geist text-sm mb-1">Email</p>
					<p class="font-inter text-black/60">contact@nomadic.digital</p>
				</div>

				<div>
					<p class="font-geist text-sm mb-1">Response time</p>
					<p class="font-inter text-black/60">Usually within 48 hours</p>
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
						<label class="block font-inter text-sm mb-2">Name</label>
						<input
							bind:value={form.name}
							required
							class="w-full rounded-xl bg-black/5 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black transition-all duration-200 focus:scale-[1.01]
"
							placeholder="Your name"
						/>
					</div>

					<div>
						<label class="block font-inter text-sm mb-2">Email</label>
						<input
							type="email"
							bind:value={form.email}
							required
							class="w-full rounded-xl bg-black/5 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black transition-all duration-200 focus:scale-[1.01]
"
							placeholder="you@email.com"
						/>
					</div>

					<div>
						<label class="block font-inter text-sm mb-2">Message</label>
						<textarea
							rows="5"
							bind:value={form.message}
							required
							class="w-full rounded-xl bg-black/5 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black resize-none transition-all duration-200 focus:scale-[1.01]
"
							placeholder="Tell us a bit about your project"
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
						{loading ? 'Sending…' : 'Send message'}
					</button>

					{#if success}
						<p class="text-sm text-green-600" data-aos="fade-in">
							Message sent successfully. We’ll be in touch.
						</p>
					{/if}

					{#if error}
						<p class="text-sm text-red-600" data-aos="fade-in">
							{error}
						</p>
					{/if}

					<p class="text-[11px] text-black/40">
						By submitting this form you agree to our Privacy Policy.
					</p>
				</form>
			</div>
		</div>
	</div>
</section>
