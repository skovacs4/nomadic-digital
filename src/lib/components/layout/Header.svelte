<script>
	let mobileOpen = false;
	let scrolled = false;

	if (typeof window !== "undefined") {
		window.addEventListener("scroll", () => {
			scrolled = window.scrollY > 10;
		});
	}
</script>

<header
	class="
		fixed top-0 left-0 w-full z-50
		transition-all duration-300
	"
	class:bg-[var(--color-background)]={scrolled}
	class:backdrop-blur-md={scrolled}
	class:shadow-sm={scrolled}
>
	<div class="mx-auto px-6 py-0 flex items-center justify-between gap-12">
		<!-- Logo -->
		<a href="/" class="font-calsans text-[18px] tracking-tight text-black font-100"> <img src="/logos/landscape-minimal-logo.png" class="" alt="Landscape Nomadic Digital Logo"> </a>

		<!-- Desktop nav -->
		<nav class="hidden md:flex items-center gap-12">
			<a class="font-inter text-lg font-bold text-black hover:opacity-60" href="/work">
				Work
			</a>
			<a class="font-inter text-lg font-bold text-black hover:opacity-60" href="/services">
				Services
			</a>
			<a class="font-inter text-lg font-bold text-black hover:opacity-60" href="/about">
				About
			</a>
			<a class="font-inter text-lg font-bold text-black hover:opacity-60" href="/contact">
				Contact
			</a>

			<!-- Availability badge identical to Fabrica -->
			<span
				class="
					font-inter text-[12px] font-medium tracking-wide
					px-3 py-1 rounded-full
					bg-black text-white
				"
			>
				AVAILABLE
			</span>
		</nav>

		<!-- Mobile menu button (Fabrica identical) -->
		<button
			class="md:hidden flex flex-col gap-[6px] p-2"
			on:click={() => (mobileOpen = !mobileOpen)}
		>
			<div class="w-7 h-[2px] bg-black"></div>
			<div class="w-7 h-[2px] bg-black"></div>
		</button>
	</div>

	<!-- Mobile Dropdown -->
	{#if mobileOpen}
		<div
			class="
				md:hidden px-6 py-6 space-y-6
				bg-[var(--color-background)]
				
				animate-fadeDown 
			"
		>
			<a href="/work" class="block font-inter text-xl text-black ">Work</a>
			<a href="/services" class="block font-inter text-xl text-black">Services</a>
			<a href="/about" class="block font-inter text-xl text-black">About</a>
			<a href="/contact" class="block font-inter text-xl text-black">Contact</a>

			<span
				class="
					font-inter text-xs uppercase tracking-wider
					inline-block px-3 py-1 rounded-full
					bg-black text-white
				"
			>
				AVAILABLE
			</span>
		</div>
	{/if}
</header>

<style>
	/* Smooth dropdown animation */
	@keyframes fadeDown {
		from { opacity: 0; transform: translateY(-5px); }
		to   { opacity: 1; transform: translateY(1); }
	}
	.animate-fadeDown {
		animation: fadeDown 0.2s ease-out;
	}
</style>
