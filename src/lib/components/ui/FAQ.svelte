<script>
	import { slide, fade } from 'svelte/transition';

	let open = -1;

	const faqs = [
		{
			q: 'How long does it take to build a website?',
			a: 'The timeline depends on complexity and scope. Most projects take between 4–8 weeks. We provide a clear timeline during the initial consultation.'
		},
		{
			q: 'Do you offer custom websites or use templates?',
			a: 'All projects are custom-designed. We don’t rely on generic templates — every solution is built around your business goals.'
		},
		{
			q: 'What’s included in your SEO services?',
			a: 'Our SEO services include technical optimization, keyword research, on-page improvements, performance tuning, and analytics setup.'
		},
		{
			q: 'How does the monthly subscription model work?',
			a: 'For ongoing services, we offer monthly subscriptions covering maintenance, optimization, and growth support. Plans are flexible and scalable.'
		},
		{
			q: 'Can you redesign my existing website?',
			a: 'Yes. We frequently redesign existing websites, improving UX, performance, and visual clarity while preserving your brand.'
		},
		{
			q: 'How do I get started?',
			a: 'Simply reach out through our contact form. We’ll schedule a discovery call to understand your needs and propose the next steps.'
		}
	];
</script>

<section class="mt-2 max-w-[1600px] mx-auto px-6 md:px-12 py-24">
	<div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
		<!-- LEFT -->
		<div class="lg:col-span-4">
			<h2 class="font-calsans text-6xl md:text-7xl tracking-tight mb-6">
				FAQ<span class="text-black/40"></span>
			</h2>

			<p class="font-inter text-lg text-black/60 max-w-sm">
				Got questions? We’ve got answers. Everything you need to know about working with us.
			</p>
		</div>

		<!-- RIGHT -->
		<div class="lg:col-span-8 space-y-4">
			{#each faqs as item, i}
				<div class="rounded-2xl bg-white border border-black/5 px-8 py-6 transition cursor-pointer">
					<button
						class="w-full flex items-center justify-between text-left cursor-pointer"
						on:click={() => (open = open === i ? -1 : i)}
					>
						<span class="font-geist text-lg">
							{item.q}
						</span>

						<span
							class="w-8 h-8 rounded-full border border-black flex items-center justify-center text-sm
							transition-transform duration-300 cursor-pointer"
							class:rotate-45={open === i}
						>
							+
						</span>
					</button>

					{#if open === i}
						<div class="overflow-hidden" in:slide={{ duration: 260 }} out:slide={{ duration: 200 }}>
							<p
								class="mt-4 font-inter text-sm text-black/60 max-w-2xl leading-relaxed"
								in:fade={{ duration: 200 }}
								out:fade={{ duration: 150 }}
							>
								{item.a}
							</p>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
