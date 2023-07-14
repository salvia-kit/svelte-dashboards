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

<div class="background h-screen overflow-hidden w-full lg:p-4 parent">
	<div class="content h-screen overflow-hidden relative lg:rounded-2xl">
		<div class="flex items-start">
			<Overlay />
			<Sidebar mobileOrientation="end" />
			<div class="flex flex-col h-screen pl-0 w-full lg:space-py-4 lg:w-[calc(100%-16rem)]">
				<TopBar />
				<main
					class="
					 	main
						h-screen
					  	overflow-auto
					  	pb-36
					  	pt-4
					  	px-2
					  	text-black
					  	md:pb-8
					  	md:px-4
					  	lg:mt-4
					  	lg:px-6
					"
				>
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
	.parent:before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100vh;
		background: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0.72) 0%,
			rgba(255, 255, 255, 0.45) 100%
		);
		-webkit-backdrop-filter: saturate(3);
		backdrop-filter: saturate(3);
	}

	.content {
		background-color: rgb(255 255 255 / 31%);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
	}

	.main {
		background-color: rgb(255 255 255 / 31%);
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
