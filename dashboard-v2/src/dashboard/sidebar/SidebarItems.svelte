<script>
	import { data } from './data';
	import { page } from '$app/stores';

	const style = {
		title: `mx-4 text-sm`,
		section: `font-medium mb-4 pl-5 text-gray-500 text-lg lg:pl-6`,
		active: `border-green-500 border-l-4 lg:border-l-0 lg:border-r-4 lg:border-gray-500`,
		link: `flex items-center justify-start my-1 p-3 text-gray-800 w-full lg:hover:bg-gray-100`
	};
</script>

<ul class="mt-6 md:pl-6">
	<li>
		{#each data as { section, content } (section)}
			<div class="mb-10">
				<div class={style.section}>{section}</div>
				{#each content as item (item.title)}
					<a
						href={item.link}
						class={`${style.link} ${item.link === $page.url.pathname && style.active}`}
					>
						<span><svelte:component this={item.icon} /></span>
						<span class={style.title}>{item.title}</span>
					</a>
				{/each}
			</div>
		{/each}
	</li>
</ul>
