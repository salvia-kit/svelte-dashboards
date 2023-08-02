<script>
	import { closeSidebar, sidebarOpen } from './store.ts';
</script>

<!-- The overlay will only be visible on small screens to emphasize the focus on the side navigation when it is open.-->
<!--it's also used to close Sidebar on click outside-->
<button
	on:click={closeSidebar}
	class={$sidebarOpen
		? 'bg-black fixed h-screen left-0 opacity-40 top-0 w-screen z-30 lg:hidden'
		: ''}
/>
