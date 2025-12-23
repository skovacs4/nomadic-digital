<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { t, locale, setLocale } from '$lib/i18n';

	let mobileOpen = false;
	let scrolled = false;

	// detect portfolio detail page
	$: isPortfolioDetail =
		$page.url.pathname.startsWith('/portfolio/') && $page.url.pathname !== '/portfolio';

	$: isHome = $page.url.pathname === '/';
	$: isLightHeader = isHome && !scrolled;

	$: logoSrc = isHome
		? scrolled
			? '/logos/landscape-minimal-logo.png'
			: '/logos/landscape-minimal-logo-white.png'
		: isPortfolioDetail
			? '/logos/landscape-minimal-logo-white.png'
			: '/logos/landscape-minimal-logo.png';

	function closeMobileMenu() {
		mobileOpen = false;
	}

	function switchLang(next) {
		setLocale(next, true);
	}

	onMount(() => {
		const onScroll = () => {
			scrolled = window.scrollY > 10;
		};

		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	});

	// lock background scroll when menu is open
	$: if (typeof document !== 'undefined') {
		document.body.style.overflow = mobileOpen ? 'hidden' : '';
	}
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
		style="backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);"
		on:click={closeMobileMenu}
	></div>
{/if}

<header
	class="
		fixed top-0 left-0 w-full z-50
		transition-all duration-300
	"
	class:bg-[var(--color-background)]={(scrolled || mobileOpen) && !isPortfolioDetail}
	class:bg-black={(scrolled || mobileOpen) && (isPortfolioDetail || isLightHeader)}
	class:shadow-sm={scrolled || mobileOpen}
>
	<div class="mx-auto px-6 py-0 flex items-center justify-between gap-12">
		<!-- Logo -->
		<a href="/" class="font-calsans text-[18px] tracking-tight">
			<img src={logoSrc} alt="Nomadic Digital Logo" class="transition-opacity duration-300 w-full h-[85px] md:h-[100px]" />
		</a>

		<!-- Desktop nav -->
		<nav class="hidden [@media(min-width:1200px)]:flex items-center gap-12">
			<a
				class="
					font-inter text-lg font-bold transition
					{isPortfolioDetail || isLightHeader ? 'text-white hover:opacity-70' : 'text-black hover:opacity-60'}
				"
				href="/portfolio"
			>
				{$t('nav.work')}
			</a>

			<a
				class="
					font-inter text-lg font-bold transition
					{isPortfolioDetail || isLightHeader ? 'text-white hover:opacity-70' : 'text-black hover:opacity-60'}
				"
				href="/about"
			>
				{$t('nav.about')}
			</a>

			<a
				class="
					font-inter text-lg font-bold transition
					{isPortfolioDetail || isLightHeader ? 'text-white hover:opacity-70' : 'text-black hover:opacity-60'}
				"
				href="/services"
			>
				{$t('nav.services')}
			</a>

			<a
				class="
					font-inter text-lg font-bold transition
					{isPortfolioDetail || isLightHeader ? 'text-white hover:opacity-70' : 'text-black hover:opacity-60'}
				"
				href="/blog"
			>
				{$t('nav.blog')}
			</a>

			<a
				class="
					font-inter text-lg font-bold transition
					{isPortfolioDetail || isLightHeader ? 'text-white hover:opacity-70' : 'text-black hover:opacity-60'}
				"
				href="/contact"
			>
				{$t('nav.contact')}
			</a>

			<!-- Language switcher (desktop) -->
			<div class="flex items-center gap-2">
				<button
					class="text-sm font-inter font-semibold transition {isPortfolioDetail || isLightHeader
						? 'text-white/80 hover:text-white'
						: 'text-black/70 hover:text-black'} disabled:opacity-40 cursor-pointer"
					disabled={$locale === 'en'}
					on:click={() => switchLang('en')}
					type="button"
				>
					{$t('nav.lang.en')}
				</button>

				<span class={isPortfolioDetail || isLightHeader ? 'text-white/30' : 'text-black/30'}>/</span
				>

				<button
					class="text-sm font-inter font-semibold transition {isPortfolioDetail || isLightHeader
						? 'text-white/80 hover:text-white'
						: 'text-black/70 hover:text-black'} disabled:opacity-40 cursor-pointer"
					disabled={$locale === 'ro'}
					on:click={() => switchLang('ro')}
					type="button"
				>
					{$t('nav.lang.ro')}
				</button>
			</div>

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
				<span class="relative z-10">{$t('nav.bookCall')}</span>

				<span
					class="
						relative z-10 w-2 h-2 rounded-full
						bg-current
						transition-transform duration-300
						group-hover:translate-x-1
					"
				></span>

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

		<!-- Mobile menu button -->
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<button
			class="[@media(min-width:1200px)]:hidden relative w-10 h-10 flex items-center justify-center"
			on:click={() => (mobileOpen = !mobileOpen)}
			aria-label="Toggle menu"
			type="button"
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
					{isPortfolioDetail || isLightHeader ? 'bg-white' : 'bg-black'}
					{mobileOpen ? '-rotate-45' : 'translate-y-[5px]'}
				"
			></span>
		</button>
	</div>

	<!-- Mobile Dropdown -->
	{#if mobileOpen}
		<div
			class="
				[@media(min-width:1200px)]:hidden px-10 py-10 space-y-6
				transition-colors duration-300
				animate-fadeDown z-50 relative
				{isPortfolioDetail || isLightHeader
				? 'bg-black text-white'
				: 'bg-[var(--color-background)] text-black'}
			"
		>
			<a href="/portfolio" on:click={closeMobileMenu} class="block font-inter text-xl font-bold">
				{$t('nav.work')}
			</a>

			<a href="/services" on:click={closeMobileMenu} class="block font-inter text-xl font-bold">
				{$t('nav.services')}
			</a>

			<a href="/about" on:click={closeMobileMenu} class="block font-inter text-xl font-bold">
				{$t('nav.about')}
			</a>

			<a href="/blog" on:click={closeMobileMenu} class="block font-inter text-xl font-bold">
				{$t('nav.blog')}
			</a>

			<a href="/contact" on:click={closeMobileMenu} class="block font-inter text-xl font-bold">
				{$t('nav.contact')}
			</a>

			<!-- Language switcher (mobile) -->
			<div class="flex items-center gap-3 pt-2 cursor-pointer">
				<button
					class="text-sm font-inter font-semibold opacity-80 hover:opacity-100 disabled:opacity-40"
					disabled={$locale === 'en'}
					on:click={() => switchLang('en')}
					type="button"
				>
					{$t('nav.lang.en')}
				</button>

				<span class="opacity-30">/</span>

				<button
					class="text-sm font-inter font-semibold opacity-80 hover:opacity-100 disabled:opacity-40"
					disabled={$locale === 'ro'}
					on:click={() => switchLang('ro')}
					type="button"
				>
					{$t('nav.lang.ro')}
				</button>
			</div>

			<a
				href="/contact"
				on:click={closeMobileMenu}
				class="
					inline-flex items-center gap-3
					w-fit px-4 py-2 rounded-full
					text-sm font-inter font-semibold
					transition-all duration-300 mt-4
					{isPortfolioDetail || isLightHeader ? 'bg-white text-black' : 'bg-black text-white'}
				"
			>
				{$t('nav.bookCall')}
				<span class="w-2 h-2 rounded-full bg-current"></span>
			</a>
		</div>
	{/if}
</header>

<style>
	@keyframes fadeDown {
		from { opacity: 0; transform: translateY(-5px); }
		to   { opacity: 1; transform: translateY(1); }
	}

	.animate-fadeDown {
		animation: fadeDown 0.2s ease-out;
	}

	@media (min-width: 1200px) {
		header {
			backdrop-filter: blur(3px);
		}
	}
</style>
