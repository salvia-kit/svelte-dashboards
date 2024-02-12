<script>
	import { openSidebar } from './store.ts';

	import CampaignIcon from '../components/docs/icons/CampaignIcon.svelte';
	import PlusIcon from '../components/docs/icons/PlusIcon.svelte';
	import ShareIcon from '../components/docs/icons/ShareIcon.svelte';
	import SearchIcon from '../components/docs/icons/SearchIcon.svelte';
	import LogoutIcon from '../components/docs/icons/LogoutIcon.svelte';

	const iconsOptions = [
		{ href: '/logout', component: LogoutIcon },
		{ href: '/', component: ShareIcon },
		{ href: '/', component: PlusIcon },
		{ href: '/', component: CampaignIcon }
	];

	const handleOnClicIcon = (href) => (window.location.href = href);
</script>

<header class="h-20 items-center relative z-10">
	<div
		class="flex flex-center flex-col h-full justify-center mx-auto relative px-3 text-white z-10"
	>
		<div class="flex items-center pl-1 relative w-full sm:ml-0 sm:pr-2 lg:max-w-68">
			<div class="flex group h-full items-center relative w-12">
				<button
					type="button"
					aria-expanded="false"
					aria-label="Toggle sidenav"
					on:click={openSidebar}
					class="text-4xl text-white focus:outline-none"
				>
					&#8801;
				</button>
			</div>
			<div class="container flex left-0 relative w-3/4">
				<div class="group hidden items-center ml-8 relative w-full md:flex lg:w-72">
					<div
						class="absolute block cursor-pointer flex items-center justify-center h-10 p-3 pr-2 text-gray-500 text-sm uppercase w-auto sm:hidden"
					>
						<svg
							fill="none"
							class="h-5 relative w-5"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width={2}
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</div>
					<SearchIcon />
					<input
						type="text"
						class="bg-gray-800 block leading-normal pl-10 py-1.5 pr-4 ring-opacity-90 rounded-2xl text-gray-400 w-full focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Search"
					/>
				</div>
			</div>
			<div class="flex items-center justify-end ml-5 p-1 relative w-full sm:mr-0 sm:right-auto">
				{#each iconsOptions as { href, component }, i}
					<span class="block pr-5 cursor-pointer">
						<div on:click={() => handleOnClicIcon(href)}>
							<svelte:component this={component} />
						</div>
					</span>
				{/each}
				<span class="block relative">
					<img
						alt="Maurice Lokumba"
						src="/images/1.jpg"
						class="h-10 mx-auto object-cover rounded-full w-10"
					/>
				</span>
			</div>
		</div>
	</div>
</header>
