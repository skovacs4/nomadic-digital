<script>
	export let eyebrow = 'Testimonials';
	export let title = 'Experiences';
	export let year = '©2025';

	export let summary = {
		rating: '4.9',
		count: '56+',
		text: 'We’ve delivered 56+ projects that help companies generate real results.'
	};

	export let testimonials = [
		{
			name: 'James Carter',
			role: 'Wilson & Co',
			text:
				'Incredible team! They delivered exactly what we needed, on time and beyond expectations.',
			rating: 5
		},
		{
			name: 'Emily Davis',
			role: 'StartUp Hub',
			text:
				'A smooth process from start to finish. Highly professional team!',
			rating: 5
		},
		{
			name: 'Anna Martinez',
			role: 'Marketing Director',
			text:
				'Our new branding is exactly what we envisioned — clean, modern, and unique.',
			rating: 5
		}
	];
</script>

<section class="px-6 md:px-12 py-32 max-w-8xl mx-auto">
	<!-- Header -->
	<div class="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 mb-16 md:mb-20 overflow-x-hidden">
		<!-- Eyebrow -->
		<div class="flex items-center gap-3 md:col-span-2">
			<div
				class="w-5 h-5 rounded-full border border-black flex items-center justify-center shrink-0"
			>
				<div class="w-2 h-2 rounded-full bg-black"></div>
			</div>
			<p class="font-inter text-sm font-medium text-black">
				{eyebrow}
			</p>
		</div>

		<!-- Title -->
		<div class="md:col-span-8 md:col-start-4">
			<h2
				class="text-[clamp(3.5rem,8vw,6.5rem)] font-semibold tracking-tight"
			>
				{title}
			</h2>

			<p class="font-inter text-sm text-black/50 mt-3">
				{year}
			</p>
		</div>
	</div>

	<!-- Content grid -->
	<div class="grid grid-cols-1 md:grid-cols-4 gap-1 md:ml-[16.666%]">
		<!-- Summary card -->
		<div class="bg-white rounded-3xl p-8 border border-black/5 flex flex-col justify-between">
			<div>
				<p class="font-inter text-5xl text-black mb-2">
					{summary.rating}
					<span class="text-lg text-black/50">/5</span>
				</p>
				<p class="font-inter text-sm text-black/60">
					{summary.text}
				</p>
			</div>

			<button
				class="mt-8 w-full rounded-full bg-black text-white py-3 text-sm font-inter hover:bg-black/90 transition"
			>
				Leave a review
			</button>
		</div>

		<!-- Testimonial cards -->
		{#each testimonials as t}
			<div class="bg-white rounded-3xl p-8 border border-black/5 flex flex-col justify-between">
				<!-- Stars -->
				<div class="flex gap-1 text-sm text-black/80 mb-6">
					{#each Array(t.rating) as _}
						<span>★</span>
					{/each}
				</div>

				<!-- Text -->
				<p class="font-inter text-lg text-black leading-relaxed mb-8">
					{t.text}
				</p>

				<!-- Author -->
				<div>
					<p class="font-inter text-sm text-black">
						{t.name}
					</p>
					<p class="font-inter text-xs text-black/50">
						{t.role}
					</p>
				</div>
			</div>
		{/each}
	</div>
</section>
