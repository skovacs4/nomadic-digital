<script>
	import { page } from '$app/stores';

	let mobileOpen = false;
	let scrolled = false;
	const headerActive = scrolled || mobileOpen;


	// detect portfolio detail page
	$: isPortfolioDetail = $page.url.pathname.startsWith('/portfolio/')
		&& $page.url.pathname !== '/portfolio';

	if (typeof window !== "undefined") {
		window.addEventListener("scroll", () => {
			scrolled = window.scrollY > 10;
		});
	}

	function closeMobileMenu() {
		mobileOpen = false;
	}

	$: isHome = $page.url.pathname === '/';

	$: isLightHeader =
	isHome && !scrolled;


	$: logoSrc =
	isHome
		? scrolled
			? '/logos/landscape-minimal-logo.png'        // dark logo on scroll
			: '/logos/landscape-minimal-logo-white.png' // white logo at top
		: isPortfolioDetail
			? '/logos/landscape-minimal-logo-white.png'
			: '/logos/landscape-minimal-logo.png';



</script>

{#if mobileOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="
			fixed inset-0 z-40
			
			transition-opacity duration-300
			{isPortfolioDetail ? 'bg-black/40' : 'bg-black/20'}
		"
		on:click={closeMobileMenu}
	></div>
{/if}

<header
	class="
		fixed top-0 left-0 w-full z-50
		transition-all duration-300
	"
	class:bg-[var(--color-background)]={(scrolled || mobileOpen) && !isPortfolioDetail}
	class:bg-black={(scrolled || mobileOpen) && isPortfolioDetail}
	class:shadow-sm={scrolled || mobileOpen}
>
	<div class="mx-auto px-6 py-0 flex items-center justify-between gap-12">
		<!-- Logo -->
		<a href="/" class="font-calsans text-[18px] tracking-tight">
			<img src={logoSrc} alt="Nomadic Digital Logo" class="transition-opacity duration-300" />
		</a>

		<!-- Desktop nav -->
		<nav class="hidden [@media(min-width:900px)]:flex items-center gap-12">
			<a
				class="
		font-inter text-lg font-bold transition
		{isPortfolioDetail || isLightHeader ? 'text-white hover:opacity-70' : 'text-black hover:opacity-60'}

	"
				href="/portfolio"
			>
				Work
			</a>

			<a
				class="
		font-inter text-lg font-bold transition
		{isPortfolioDetail || isLightHeader ? 'text-white hover:opacity-70' : 'text-black hover:opacity-60'}

	"
				href="/about"
			>
				About Us
			</a>

			<a
				class="
		font-inter text-lg font-bold transition
		{isPortfolioDetail || isLightHeader ? 'text-white hover:opacity-70' : 'text-black hover:opacity-60'}

	"
				href="/services"
			>
				Services
			</a>

			<a
				class="
		font-inter text-lg font-bold transition
		{isPortfolioDetail || isLightHeader ? 'text-white hover:opacity-70' : 'text-black hover:opacity-60'}
	"
				href="/contact"
			>
				Contact
			</a>

			<a
				href="/contact"
				class="
		group relative inline-flex items-center gap-3
		px-4 py-2 rounded-full
		text-sm font-inter font-semibold
		transition-all duration-300
		overflow-hidden
		{isPortfolioDetail || isLightHeader
					? scrolled
						? 'bg-white text-black'
						: 'bg-white/90 text-black'
					: 'bg-black text-white'}

	"
			>
				<span class="relative z-10">Book a call</span>

				<!-- Animated dot -->
				<span
					class="
			relative z-10 w-2 h-2 rounded-full
			bg-current
			transition-transform duration-300
			group-hover:translate-x-1
		"
				></span>

				<!-- Subtle hover glow -->
				<span
					class="
			absolute inset-0 rounded-full
			opacity-0 group-hover:opacity-100
			transition-opacity duration-300
			{isPortfolioDetail ? 'bg-black/5' : 'bg-white/10'}
		"
				></span>
			</a>
		</nav>

		<!-- Mobile menu button (Fabrica identical) -->
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<button
			class="[@media(min-width:900px)]:hidden relative w-10 h-10 flex items-center justify-center"
			on:click={() => (mobileOpen = !mobileOpen)}
			aria-label="Toggle menu"
		>
			<span
				class="
			absolute w-7 h-[2px] transition-all duration-300 ease-out
			{isPortfolioDetail || isLightHeader ? 'bg-white' : 'bg-black'}

			{mobileOpen ? 'rotate-45' : '-translate-y-[5px]'}
		"
			></span>

			<span
				class="
			absolute w-7 h-[2px] transition-all duration-300 ease-out
			{isPortfolioDetail ? 'bg-white' : 'bg-black'}
			{mobileOpen ? '-rotate-45' : 'translate-y-[5px]'}
		"
			></span>
		</button>
	</div>

	<!-- Mobile Dropdown -->
	{#if mobileOpen}
		<div
			class="
			[@media(min-width:900px)]:hidden px-10 py-10 space-y-6
			transition-colors duration-300
			animate-fadeDown z-50 relative
			{isPortfolioDetail || isLightHeader
				? 'bg-black text-white'
				: 'bg-[var(--color-background)] text-black'}

		"
		>
			<a href="/portfolio" on:click={closeMobileMenu} class="block font-inter text-xl font-bold">
				Work
			</a>

			<a href="/services" on:click={closeMobileMenu} class="block font-inter text-xl font-bold">
				Services
			</a>

			<a href="/about" on:click={closeMobileMenu} class="block font-inter text-xl font-bold">
				About
			</a>

			<a href="/contact" on:click={closeMobileMenu} class="block font-inter text-xl font-bold">
				Contact
			</a>

			<a
				href="/contact"
				on:click={closeMobileMenu}
				class="
		inline-flex items-center gap-3
		w-fit px-4 py-2 rounded-full
		text-sm font-inter font-semibold
		transition-all duration-300 mt-4
		{isPortfolioDetail ? 'bg-white text-black' : 'bg-black text-white'}
	"
			>
				Book a call
				<span class="w-2 h-2 rounded-full bg-current"></span>
			</a>
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

	header {
	backdrop-filter: blur(3px);
}

</style>
