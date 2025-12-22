<script>
  import { t } from '$lib/i18n';

  let { team: teamProp = null } = $props();

  const team = $derived(
    teamProp ?? [
      {
        name: 'Stefan Kovacs',
        role: $t('team.member.stefan.role'),
        desc: $t('team.member.stefan.desc'),
        image: '/content/team/stefan.jpg',
        delay: 0
      },
      {
        name: 'Teodora Szelyes',
        role: $t('team.member.teodora.role'),
        desc: $t('team.member.teodora.desc'),
        image: '/content/team/teodora-portrait-2.jpeg',
        delay: 100
      },
      {
        name: 'Mihai Kelemen',
        role: $t('team.member.mihai.role'),
        desc: $t('team.member.mihai.desc'),
        image: '/content/team/mihai-portrait.jpg',
        delay: 200
      },
      {
        name: 'Stefan Dulca',
        role: $t('team.member.dulca.role'),
        desc: $t('team.member.dulca.desc'),
        image: '/content/team/stefan-dulca-portrait.png',
        delay: 300
      }
    ]
  );
</script>

<section class="mt-2 max-w-[1600px] mx-auto px-6 md:px-12 py-24" data-aos="fade-up">
	<!-- Header -->
	<div class="mb-20">
		<div class="flex items-center gap-3 mb-6">
			<div class="w-5 h-5 rounded-full border border-black flex items-center justify-center">
				<div class="w-2 h-2 rounded-full bg-black"></div>
			</div>
			<p class="font-geist text-sm font-medium">{$t('team.eyebrow')}</p>
		</div>

		<h2 class="font-calsans text-5xl md:text-7xl tracking-tight leading-[1.05]">
			{$t('team.titleA')} <span class="text-black/40">{$t('team.titleB')}</span>
		</h2>

		<p class="mt-6 max-w-xl font-inter text-lg text-black/60">
			{$t('team.subtitle')}
		</p>
	</div>

	<!-- Team Grid -->
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
		{#each team as member}
			<div
				class="group rounded-3xl bg-white border border-black/5 overflow-hidden"
				data-aos="fade-up"
				data-aos-delay={member.delay}
			>
				<div class="aspect-[4/5] overflow-hidden">
					<img
						src={member.image}
						alt={member.name}
						class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
					/>
				</div>

				<div class="p-6">
					<p class="font-calsans text-xl">{member.name}</p>
					<p class="font-inter text-sm text-black/60 mb-4">{member.role}</p>
					<p class="font-inter text-sm text-black/70 leading-relaxed">{member.desc}</p>
				</div>
			</div>
		{/each}
	</div>
</section>
