<script>
	import { sidebarOpen } from '../store.ts';
	import SidebarItems from './SidebarItems.svelte';

	const style = {
		mobileOrientation: {
			start: 'left-0',
			end: 'right-0'
		},
		close: 'hidden lg:block lg:w-80 lg:z-auto',
		open: 'w-10/12 absolute z-40 sm:w-5/12 lg:w-24',
		default: 'overflow-y-auto top-0 lg:relative'
	};

	export let mobileOrientation = 'end';
</script>

<aside
	class={`${style.default} ${style.mobileOrientation[mobileOrientation]}
       ${$sidebarOpen ? style.open : style.close} scrollbar`}
>
	<div class="h-screen w-full">
		<SidebarItems />
	</div>
</aside>

<style>
	.scrollbar::-webkit-scrollbar {
		width: 0;
		background: transparent; /* hide Sidebar scrollbar on Chrome, Opera and other webkit Browsers*/
	}
	.scrollbar {
		-ms-overflow-style: none;
	}
</style>
