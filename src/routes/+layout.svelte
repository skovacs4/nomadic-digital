<script lang="ts">
	import { setLocale } from '$lib/i18n';
	import '../app.css';
	import favicon from '$lib/assets/favicon.png';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	import { onMount } from 'svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';

	const { data, children } = $props();

	let scrollY = $state<number>(0);
	const showBlur = $derived(scrollY > 300);

	$effect(() => {
		const lang = data?.lang === 'ro' ? 'ro' : 'en';
		setLocale(lang, false);
	});

	onMount(() => {
		AOS.init({
			duration: 700,
			easing: 'ease-out-cubic',
			once: true,
			offset: 80
		});
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<svelte:window bind:scrollY />

<Header />
{@render children()}
<Footer />

<div class="bottom-edge-blur" class:is-visible={showBlur} />
