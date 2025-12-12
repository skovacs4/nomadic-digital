<script>
	export let steps = [
		{
			step: 'STEP 1.',
			title: 'Discovery Phase',
			description:
				'Understanding your goals, pain points, audience, and what sets you apart.'
		},
		{
			step: 'STEP 2.',
			title: 'Project Kickoff',
			description:
				'Aligning on scope, milestones, and setting a clear direction for execution.'
		},
		{
			step: 'STEP 3.',
			title: 'Receive & Refine',
			description:
				'Reviewing work together, gathering feedback, and refining until it feels right.'
		},
		{
			step: 'STEP 4.',
			title: 'Continue & Grow',
			description:
				'Launching confidently and supporting long-term growth and iteration.'
		}
	];
</script>

<section class="px-6 md:px-12 py-24 mx-auto">
	<!-- Grid aligned under hero -->
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 md:ml-[0.1]">
		{#each steps as s}
			<div class="border-t border-black/10 pt-6">
				<!-- Step -->
				<p class="font-geist text-xs text-black/40 mb-4">
					{s.step}
				</p>

				<!-- Title -->
				<h3 class="font-calsans text-xl md:text-2xl leading-tight mb-3 text-black">
					{s.title}
				</h3>

				<!-- Description -->
				<p class="font-inter text-sm text-black/60 leading-relaxed">
					{s.description}
				</p>
			</div>
		{/each}
	</div>
</section>
