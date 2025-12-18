<script>
	export let count = "";
	export let title = "Projects.";
	export let year = 2025;
	export let description = "";
</script>

<section class="w-full px-6 md:px-0 pt-24 pb-10 bg-[var(--color-background)]">
	<div class="max-w-8xl mx-auto relative">

		<!-- LEFT LABEL -->
		<p class="text-sm font-bold text-black/50 absolute left-0 top-2 md:top-3 hidden md:block">
			({count})
		</p>

		<!-- CENTER TITLE -->
		<div class="text-center">
			<h1 class="font-calsans text-6xl md:text-9xl font-bold tracking-tight text-black">
				{title}
			</h1>

		</div>

		<!-- RIGHT DESCRIPTION -->
		<p
			class="
				hidden md:block
				absolute right-0 top-4
				font-inter text-sm text-black/60
				max-w-xs leading-relaxed
				font-bold
			"
		>
			{description}
		</p>
	</div>
</section>
