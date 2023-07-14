<script>
	import 'tailwindcss/tailwind.css';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	import TopBar from './TopBar.svelte';
	import Overlay from './Overlay.svelte';
	import Sidebar from './sidebar/Sidebar.svelte';
	import { closeSidebar, sidebarOpen } from './store.ts';

	if (browser) {
		page.subscribe(() => {
			// close Sidebar on route changes. it's triggered when viewport is less than 1024px
			if ($sidebarOpen && window.innerWidth < 1024) {
				closeSidebar();
			}
		});
	}
</script>

<!-- lg:w-[calc(100%-16rem)] class get the remained width of the main tag from lg:viewport by subtracting
(the total width by the width of the Sidebar component which is w-64 = 16rem)-->

<div class="background h-screen overflow-hidden w-full lg:p-4">
	<div class="content h-screen overflow-hidden relative lg:rounded-2xl">
		<div class="flex items-start">
			<Overlay />
			<Sidebar mobileOrientation="end" />
			<div class="flex flex-col h-screen pl-0 w-full lg:space-y-4 lg:w-[calc(100%-16rem)]">
				<TopBar />
				<main class="main h-screen pb-36 pt-4 px-2 md:pb-8 md:px-4 lg:px-6">
					<slot />
				</main>
			</div>
		</div>
	</div>
</div>

<style>
	.background {
		background-image: url('./mac.webp');
		background-size: cover;
		background-position: center;
	}
	.content {
		background-color: rgba(16 18 27 / 40%);
		backdrop-filter: blur(24px);
	}
	.main {
		color: #f9fafb;
		background-color: rgba(16 18 27 / 40%);
		overflow: auto;
	}
	.main::-webkit-scrollbar {
		width: 6px;
		border-radius: 10px;
	}
	.main::-webkit-scrollbar-thumb {
		background: rgb(1 2 3 / 40%);
		border-radius: 10px;
	}
</style>
