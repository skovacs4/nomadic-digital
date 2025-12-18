<script>
	import { blogPosts } from '$lib/data/blogPosts.js';
	import { onMount } from 'svelte';
	import { t } from '$lib/i18n';
	import { page } from '$app/stores';

	let show = false;

	onMount(() => {
		requestAnimationFrame(() => {
			show = true;
		});
	});

	const url = $page.url.href;
</script>

<svelte:head>
	<title>{$t('meta.blog.title')}</title>
	<meta name="description" content={$t('meta.blog.description')} />

	<link rel="canonical" href={url} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content={$t('meta.blog.title')} />
	<meta property="og:description" content={$t('meta.blog.description')} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content="/og/blog.jpg" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={$t('meta.blog.title')} />
	<meta name="twitter:description" content={$t('meta.blog.description')} />
	<meta name="twitter:image" content="/og/blog.jpg" />
</svelte:head>

<section class="py-48 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
	<h2
		class="font-calsans text-5xl md:text-7xl tracking-tight leading-[1.05] mb-2 transition-all duration-700 ease-out
		{show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}"
	>
		{$t('blog.index.title')}
	</h2>

	<p
		class="text-gray-500 font-[600] mb-12 transition-all duration-700 ease-out delay-100
		{show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}"
	>
		{$t('blog.index.subtitle')}
	</p>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
		{#each blogPosts as post, i}
			<a
				href={`/blog/${post.slug}`}
				class="show block rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition bg-white
			transform transition-all duration-700 ease-out
			{show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}"
				style="transition-delay: {i * 100}ms"
			>
				<img src={post.image} alt={$t(post.titleKey)} class="w-full h-48 object-cover" />
				<div class="p-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-2">
						{$t(post.titleKey)}
					</h3>
					<p class="text-sm text-gray-600 font-[600]">
						{$t(post.descriptionKey)}
					</p>
				</div>
			</a>
		{/each}
	</div>
</section>
