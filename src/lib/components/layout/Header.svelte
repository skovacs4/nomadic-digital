<script>
	let mobileOpen = false;
	let scrolled = false;

	// detect scroll
	if (typeof window !== "undefined") {
		window.addEventListener("scroll", () => {
			scrolled = window.scrollY > 20;
		});
	}
</script>

<header
	class="
		fixed top-0 left-0 w-full z-50
		bg-[var(--color-background)]
	"
>

	<div class="mx-auto max-w-8xl px-6 md:px-8 py-4 flex items-center justify-between">
		<!-- Logo -->
		<a href="/" class="font-calsans text-xl tracking-tight text-black"> Nomadic Digital </a>

		<!-- Desktop Nav -->
		<nav class="hidden md:flex items-center gap-10">
			<a href="/work" class="font-geist text-sm tracking-wide text-black hover:opacity-60">Work</a>
			<a href="/services" class="font-geist text-sm tracking-wide text-black hover:opacity-60"
				>Services</a
			>
			<a href="/about" class="font-geist text-sm tracking-wide text-black hover:opacity-60">About</a
			>
			<a href="/contact" class="font-geist text-sm tracking-wide text-black hover:opacity-60"
				>Contact</a
			>

			<!-- Badge -->
			<span
				class="
					font-geist text-xs uppercase tracking-wider
					px-3 py-1 rounded-full
					bg-black text-white
				"
			>
				Available
			</span>
		</nav>

		<!-- Mobile Menu Button -->
		<button
			class="md:hidden p-3 text-black focus:outline-none"
			on:click={() => (mobileOpen = !mobileOpen)}
		>
			<div class="space-y-1.5">
				<div class="w-6 h-[2px] bg-black"></div>
				<div class="w-6 h-[2px] bg-black"></div>
			</div>
		</button>
	</div>

	<!-- Mobile Dropdown -->
	{#if mobileOpen}
		<div
			class="md:hidden px-6 py-4 space-y-6 bg-[var(--color-background)] border-t border-[#e5e5e5]"
		>
			<a href="/work" class="block font-geist text-lg text-black">Work</a>
			<a href="/services" class="block font-geist text-lg text-black">Services</a>
			<a href="/about" class="block font-geist text-lg text-black">About</a>
			<a href="/contact" class="block font-geist text-lg text-black">Contact</a>

			<span
				class="
					font-geist text-xs uppercase tracking-wider
					inline-block px-3 py-1 rounded-full
					bg-black text-white
				"
			>
				Available
			</span>
		</div>
	{/if}
</header>
