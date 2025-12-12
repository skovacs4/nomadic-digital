<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	import { onMount } from 'svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';

	// ✅ reactive scroll position
	let scrollY = $state<number>(0);

	// ✅ derived visibility state (NO `$:`)
	const showBlur = $derived(scrollY > 1500);

	onMount(() => {
		AOS.init({
			duration: 700,
			easing: 'ease-out-cubic',
			once: true,
			offset: 80
		});
	});

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- ✅ native, reactive scroll binding -->
<svelte:window bind:scrollY />

<Header />
{@render children()}
<Footer />

<!-- Bottom edge blur -->
<div class="bottom-edge-blur" class:is-visible={showBlur} />
