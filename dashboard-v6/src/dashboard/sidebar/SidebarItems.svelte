<script>
	import { data } from './data';
	import { page } from '$app/stores';

	const style = {
		inactive: `text-gray-400`,
		active: `font-medium text-white`,
		link: `flex items-center justify-start my-2 p-4 text-sm w-full hover:text-white`
	};
</script>

<ul class="md:pl-6">
	<li>
		{#each data as item (item.title)}
			<a
				href={item.link}
				class={`${style.link} ${item.link === $page.url.pathname ? style.active : style.inactive}`}
			>
				<span><svelte:component this={item.icon} /></span>
				<span class="mx-4">{item.title}</span>
			</a>
		{/each}
	</li>
</ul>
