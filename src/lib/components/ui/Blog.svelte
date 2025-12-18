<script>
  import { blogPosts } from '$lib/data/blogPosts.js';
  import { t } from '$lib/i18n';

  // newest first (defensive copy)
  const posts = [...blogPosts].reverse();

  const featured = posts[0];
  const smallPosts = posts.slice(1, 3);
</script>

<section class="mt-2 max-w-[1600px] mx-auto px-6 md:px-12 py-24">
	<!-- Header -->
	<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
		<div class="lg:col-span-7">
			<h2 class="font-calsans text-5xl md:text-7xl tracking-tight leading-[1.05]">
				{$t('blog.section.titleA')}
				<span class="text-black/40">{$t('blog.section.titleB')}</span>
			</h2>
		</div>

		<div class="lg:col-span-5 flex items-end justify-between">
			<p class="font-inter text-lg text-black/60 max-w-sm">
				{$t('blog.section.subtitle')}
			</p>

			<a
				href="/blog"
				class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white text-sm font-geist hover:bg-black/90 transition"
			>
				{$t('blog.section.cta')}
				<span class="inline-block w-2 h-2 rounded-full bg-white"></span>
			</a>
		</div>
	</div>

	<!-- Grid -->
	<div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
		<!-- Small cards -->
		{#each smallPosts as post}
			<article
				class="lg:col-span-3 group rounded-3xl bg-white border border-black/5 p-6 flex flex-col justify-between"
			>
				<div>
					<img
						src={post.authorAvatar}
						alt={post.author}
						class="w-12 h-12 rounded-xl object-cover mb-6"
					/>

					<p class="text-xs text-black/40 mb-2">
						{post.date}
					</p>

					<h3 class="font-calsans text-xl leading-tight mb-3">
						{$t(post.titleKey)}
					</h3>

					<p class="font-inter text-sm text-black/60 leading-relaxed">
						{$t(post.descriptionKey)}
					</p>
				</div>

				<div class="mt-6 flex justify-end">
					<a
						href={`/blog/${post.slug}`}
						class="w-8 h-8 flex items-center justify-center rounded-full border border-black text-sm group-hover:bg-black group-hover:text-white transition"
					>
						+
					</a>
				</div>
			</article>
		{/each}

		<!-- Featured card -->
		{#if featured}
			<article
				class="lg:col-span-6 group relative rounded-3xl overflow-hidden min-h-[420px] flex items-end"
			>
				<img
					src={featured.image}
					alt={$t(featured.titleKey)}
					class="absolute inset-0 w-full h-full object-cover"
				/>
				<div class="absolute inset-0 bg-black/40"></div>

				<div class="relative z-10 p-10 text-white max-w-md">
					<p class="font-geist text-sm mb-2">
						{featured.author}
					</p>

					<h3 class="font-calsans text-4xl leading-tight mb-4">
						{$t(featured.titleKey)}
					</h3>

					<p class="font-inter text-sm text-white/80">
						{$t(featured.descriptionKey)}
					</p>
				</div>

				<div class="absolute top-6 right-6">
					<a
						href={`/blog/${featured.slug}`}
						class="w-10 h-10 flex items-center justify-center rounded-full border border-white text-white text-lg group-hover:bg-white group-hover:text-black transition"
					>
						+
					</a>
				</div>
			</article>
		{/if}
	</div>
</section>
