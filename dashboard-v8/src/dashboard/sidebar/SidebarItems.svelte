<script>
	import { data } from './data';
	import { page } from '$app/stores';
	import Collapse from './Collapse.svelte';

	const style = {
		active: `font-normal mx-4 text-sm text-blue-600`,
		inactive: `font-light mx-4 text-sm text-gray-900`,
		link: `inline-flex items-center justify-start mb-3 p-3 text-black`
	};
</script>

<ul class="mt-6 md:pl-6">
	<li>
		{#each data as section (section.section)}
			<Collapse>
				<div slot="item">
					<div class="flex">
						<span><svelte:component this={section.icon} /></span>
						<span class="pl-3">{section.section}</span>
					</div>
				</div>
				<div slot="panel">
					{#each section.content as item (item.title)}
						<div class="pl-5">
							<a href={item.link} class={style.link}>
								<span class={item.link === $page.url.pathname ? style.active : style.inactive}>
									{item.title}
								</span>
							</a>
						</div>
					{/each}
				</div>
			</Collapse>
		{/each}
	</li>
</ul>
