<script>
	import { data } from './data.ts';
	import { page } from '$app/stores';

	const style = {
		title: `font-normal mx-4 text-sm`,
		active: `bg-gradient-to-r border-r-4 border-blue-500 border-r-4 border-blue-500 from-white to-blue-100 text-blue-500`,
		link: `duration-200 flex font-thin items-center justify-start my-2 p-4 transition-colors text-gray-500 uppercase w-full lg:hover:text-blue-500`
	};
</script>

<ul>
	<li>
		{#each data as item (item.title)}
			<a
				href={item.link}
				class={`${style.link} ${item.link === $page.url.pathname && style.active}`}
			>
				<span><svelte:component this={item.icon} /></span>
				<span class={style.title}>{item.title}</span>
			</a>
		{/each}
	</li>
</ul>
