<script>
	import { t } from '$lib/i18n';
	import { page } from '$app/stores';

	export let data;
	const { post } = data;

	const url = $page.url.href;
</script>

<svelte:head>
	<title>{$t(post.titleKey)} — Nomadic Digital</title>
	<meta name="description" content={$t(post.descriptionKey)} />

	<link rel="canonical" href={url} />

	<!-- Open Graph -->
	<meta property="og:type" content="article" />
	<meta property="og:title" content={$t(post.titleKey)} />
	<meta property="og:description" content={$t(post.descriptionKey)} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={post.image} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={$t(post.titleKey)} />
	<meta name="twitter:description" content={$t(post.descriptionKey)} />
	<meta name="twitter:image" content={post.image} />
</svelte:head>

<section class="max-w-5xl mx-auto py-36 md:py-48 mb-12 px-4 sm:px-6 lg:px-8">
	<!-- Breadcrumb -->
	<div class="text-sm text-gray-400 font-[600] mb-8">
		<a href="/blog" class="hover:underline">
			Blog
		</a>
		/ {$t(post.titleKey)}
	</div>

	<!-- Title -->
	<h1 class="font-calsans text-3xl md:text-5xl tracking-tight leading-[1.05] my-6">
		{$t(post.titleKey)}
	</h1>

	<!-- Author & Date -->
	<div class="flex justify-between items-center mb-10">
		<div class="flex items-center gap-3">
			<img
				src={post.authorAvatar}
				alt={post.author}
				class="w-10 h-10 rounded-full object-cover"
			/>
			<div class="text-sm">
				<p class="text-gray-800 font-semibold">{post.author}</p>
				<p class="text-gray-500">{$t(post.roleKey)}</p>
			</div>
		</div>
		<p class="text-gray-500 text-sm">{post.date}</p>
	</div>

	<!-- Hero Image -->
	<img
		src={post.image}
		alt={$t(post.titleKey)}
		class="w-full rounded-xl mb-16"
	/>

	<!-- Content -->
	<div class="prose prose-lg max-w-none text-gray-800">
		{@html $t(post.contentKey)}
	</div>
</section>
