<script>
	import { slide } from 'svelte/transition';

	let show = false;

	const toggle = () => {
		show = !show;
	};
</script>

<div role="button" on:click={toggle} class="flex justify-start -mb-1 py-6 px-4 text-black text-sm">
	<slot name="item" />
	<span class="ml-auto">
		<span hidden={!show}>
			<svg
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				class="mt-1 h-4 w-4"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/>
			</svg>
		</span>
		<span hidden={show}>
			<svg
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				class="mt-1 h-4 w-4"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
					clip-rule="evenodd"
				/>
			</svg>
		</span>
	</span>
</div>

{#if show}
	<div transition:slide class="overflow-hidden text-gray-600">
		<slot name="panel" />
	</div>
{/if}
