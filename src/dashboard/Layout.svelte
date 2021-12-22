<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { browser } from '$app/env';
	import { open } from './provider/store';
	import Overlay from './provider/Overlay.svelte';
	import TopNavigation from './topnavigation/Index.svelte';
	import SideNavigation from './sidenavigation/Index.svelte';

	const style = {
		container: `bg-gray-900 h-screen overflow-hidden relative`,
		mainContainer: `flex flex-col h-screen pl-0 w-full lg:pl-20 lg:space-y-4`,
		main: `h-screen overflow-auto pb-36 pt-4 px-2 md:pb-8 md:pt-4 lg:pt-0 lg:px-4`
	};

	if (browser) {
		page.subscribe(() => {
			// close side navigation when route changes when viewport < 1024px
			$open = false;
		});
	}

	onMount(() => {
		document.getElementsByTagName('body').item(0).removeAttribute('tabindex');
	});
</script>

<div class={style.container}>
	<div class="flex items-start">
		<Overlay />
		<SideNavigation mobilePosition="right" />
		<div class={style.mainContainer}>
			<TopNavigation />
			<main class={style.main}>
				<slot />
			</main>
		</div>
	</div>
</div>
