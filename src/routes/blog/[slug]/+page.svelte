<script>

	export let data;
	const { post } = data;
</script>

<section class="max-w-5xl mx-auto py-36 md:py-48 mb-12 px-4 sm:px-6 lg:px-8">
	<!-- Breadcrumb -->
	<div class="text-sm text-gray-400 font-[600] mb-8">
		<a href="/blog" class="hover:underline">Blog</a> / {post.title}
	</div>

	<!-- Title -->
	<h1 class="font-calsans text-3xl md:text-5xl tracking-tight leading-[1.05] my-6">{post.title}</h1>

	<!-- Author & Date -->
	<div class="flex justify-between items-center mb-10">
		<div class="flex items-center gap-3">
			<img src={post.authorAvatar} alt={post.author} class="w-10 h-10 rounded-full object-cover" />
			<div class="text-sm">
				<p class="text-gray-800 font-semibold">{post.author}</p>
				<p class="text-gray-500">{post.role}</p>
			</div>
		</div>
		<p class="text-gray-500 text-sm">{post.date}</p>
	</div>

	<!-- Hero Image -->
	<img src={post.image} alt={post.title} class="w-full rounded-xl mb-16" />

	<!-- Content -->
	<div class="prose prose-lg max-w-none text-gray-800">
		{@html post.content}
	</div>
</section>
