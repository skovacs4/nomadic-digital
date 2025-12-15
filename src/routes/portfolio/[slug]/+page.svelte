<script>
    import Contact from '$lib/components/ui/Contact.svelte';
	export let data;
	const { project } = data;
</script>

<!-- ================= HERO ================= -->
<section
	class="
		relative
		min-h-[80vh]
		flex items-end
		bg-black
		text-white
		overflow-hidden
	"
>
	<!-- Background image -->
	<img
		src={project.hero.image}
		alt={project.title}
		class="
		absolute inset-0 w-full h-full object-cover
		opacity-90
		scale-[1.05]
		transition-transform duration-[2000ms] ease-out
	"
		data-aos="zoom-out"
		data-aos-duration="1800"
	/>

	<!-- Overlay -->
	<div class="absolute inset-0 bg-black/60"></div>

	<!-- Content -->
	<div class="relative z-10 max-w-[1600px] mx-auto px-6 md:px-0 pb-20 w-full">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
			<div class="lg:col-span-8 space-y-6">
				<img
					src={project.hero.logo}
					class="h-10 md:h-14 object-contain"
					data-aos="fade-up"
					data-aos-delay="100"
				/>

				<h1
					class="text-4xl md:text-6xl tracking-tight leading-[1.05]"
					data-aos="fade-up"
					data-aos-delay="200"
				>
					{project.overview.headline}
				</h1>

				<p class="text-white/70 text-lg max-w-2xl" data-aos="fade-up" data-aos-delay="300">
					{project.overview.description}
				</p>
			</div>

			<div
				class="lg:col-span-4 text-sm text-white/70 space-y-2"
				data-aos="fade-left"
				data-aos-delay="350"
			>
				<p><strong>Client:</strong> {project.client}</p>
				<p><strong>Category:</strong> {project.category}</p>
				<p><strong>Year:</strong> {project.year}</p>
				<p><strong>Status:</strong> {project.status}</p>
			</div>
		</div>
	</div>
</section>

<!-- ================= OVERVIEW ================= -->
<section class="max-w-[1600px] mx-auto px-6 md:px-0 py-32">
	<div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
		<!-- Scope -->
		<div class="lg:col-span-4" data-aos="fade-up">
			<h3 class="font-geist text-sm font-bold mb-6">Scope</h3>
			<ul class="space-y-3 text-black/70">
				{#each project.scope as item}
					<li>— {item}</li>
				{/each}
			</ul>
		</div>

		<!-- Deliverables -->
		{#if project.deliverables}
			<div class="lg:col-span-4" data-aos="fade-up" data-aos-delay="150">
				<h3 class="font-geist text-sm font-bold mb-6">Deliverables</h3>
				<ul class="space-y-3 text-black/70">
					{#each project.deliverables as item}
						<li>— {item}</li>
					{/each}
				</ul>
			</div>
		{/if}

		<!-- Tech -->
		<div class="lg:col-span-4" data-aos="fade-up" data-aos-delay="300">
			<h3 class="font-geist text-sm font-bold mb-6">Technology</h3>
			<ul class="flex flex-wrap gap-2">
				{#each project.tech as tech}
					<li class="px-3 py-1 rounded-full bg-black/5 text-sm transition hover:-translate-y-0.5">
						{tech}
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<!-- ================= PROJECT OUTCOMES ================= -->
<section class="max-w-[1600px] mx-auto px-6 md:px-0 py-36">
	<div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
		<!-- LEFT: meta -->
		<div data-aos="fade-up" class="lg:col-span-3">
			<p
				class="font-geist text-2xl md:text-4xl leading-[1.2] tracking-tight"
				data-aos="fade-up"
				data-aos-easing="ease-out-cubic"
			>
				{project.client} · {project.year}
			</p>

			<p class="font-inter text-sm text-black/40 leading-relaxed max-w-xs font-bold">
				{project.category}
			</p>
		</div>

		<!-- CENTER: outcomes -->
		<div data-aos="fade-up" data-aos-delay="150" class="lg:col-span-7 space-y-10">
			<p class="font-geist text-2xl md:text-4xl leading-[1.2] tracking-tight">
				<span class="text-black font-[700]">
					{project.outcomes.headline}
				</span>
				<span class="text-black/40">
					&nbsp;{project.outcomes.description}
				</span>
			</p>

			<!-- RESULTS -->
			{#if project.results?.length}
				<div class="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4">
					{#each project.results as result, i}
						<div class="space-y-1" data-aos="fade-up" data-aos-delay={i * 120}>
							<p class="font-geist text-2xl font-bold text-black">
								{result.value}
							</p>
							<p class="font-inter text-sm text-black/40 font-bold">
								{result.label}
							</p>
						</div>
					{/each}
				</div>
			{/if}

			<!-- CTA -->
			<a
				href="/contact"
				class="inline-flex items-center gap-3 rounded-full bg-black text-white px-6 py-3 text-sm font-geist transition hover:bg-black/90 hover:gap-4"
			>
				Start a similar project
				<span class="w-2 h-2 rounded-full bg-white"></span>
			</a>
		</div>
	</div>
</section>

<!-- ================= RESULTS ================= -->
<!-- {#if project.results}
	<section class="bg-black text-white py-28">
		<div class="max-w-[1600px] mx-auto px-6 md:px-0">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-12">
				{#each project.results as r}
					<div class="space-y-2">
						<p class="text-4xl font-bold">{r.value}</p>
						<p class="text-white/60 text-sm">{r.label}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>
{/if} -->

<!-- ================= GALLERY ================= -->
{#if project.gallery}
	<section class="max-w-[1600px] mx-auto px-6 md:px-0 py-24">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each project.gallery as img, i}
				<div class="overflow-hidden rounded-3xl" data-aos="fade-up" data-aos-delay={i * 120}>
					<img
						src={img}
						class="w-full h-full object-cover
			transition-transform duration-[1200ms] ease-out
			hover:scale-[1.04]"
					/>
				</div>
			{/each}
		</div>
	</section>
{/if}

<!-- ================= TESTIMONIAL ================= -->
{#if project.testimonial}
	<section class="bg-neutral-100 py-32">
		<div
			class="max-w-[1200px] mx-auto px-6 text-center space-y-6"
			data-aos="fade-up"
			data-aos-duration="800"
		>
			<p class="text-2xl md:text-5xl leading-relaxed">
				“{project.testimonial.quote}”
			</p>
			<p class="text-sm text-black/50">
				— {project.testimonial.author}, {project.testimonial.role}
			</p>
		</div>
	</section>
{/if}
<!-- ================= CONTACT ================= -->
<section class="max-w-[1700px] mx-auto" data-aos="fade-up">
	<Contact />
</section>