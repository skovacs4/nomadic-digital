<script>
	import { blogPosts } from '$lib/data/blogPosts.js';
	import { onMount } from 'svelte';

	let show = false;

	onMount(() => {
		requestAnimationFrame(() => {
			show = true;
		});
	});
</script>

<section class="py-48 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
	<h2
		class="font-calsans text-5xl md:text-7xl tracking-tight leading-[1.05] mb-2 transition-all duration-700 ease-out
		{show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}"
	>
		Our News
	</h2>
	<p
		class="text-gray-500 font-[600] mb-12 transition-all duration-700 ease-out delay-100
		{show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}"
	>
		Stories, updates, and inspirations to you.
	</p>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
		{#each blogPosts as post, i}
			<a
				href={`/blog/${post.slug}`}
				class="block rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition bg-white
			transform transition-all duration-700 ease-out
			{show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
		"
				style="transition-delay: {i * 100}ms"
			>
				<img src={post.image} alt={post.title} class="w-full h-48 object-cover" />
				<div class="p-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
					<p class="text-sm text-gray-600 font-[600]">{post.description}</p>
				</div>
			</a>
		{/each}
	</div>
</section>
