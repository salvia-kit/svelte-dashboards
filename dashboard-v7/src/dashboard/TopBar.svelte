<script>
	import { openSidebar } from './store.ts';
</script>

<header class="bg-[#0e141b] h-20 items-center relative z-10">
	<div class="flex flex-center flex-col h-full justify-center mx-auto px-3 relative">
		<div class="flex items-center pl-1 relative w-full sm:pr-2 sm:ml-0 lg:max-w-68">
			<div class="container flex left-0 relative w-3/4">
				<div class="flex group h-full items-center relative w-12">
					<button
						type="button"
						aria-expanded="false"
						aria-label="Toggle sidenav"
						on:click={openSidebar}
						class="text-4xl text-white focus:outline-none lg:hidden"
					>
						&#8801;
					</button>
				</div>
				<div class="flex group h-full items-center relative w-full lg:w-64">
					<div
						class="absolute block cursor-pointer flex h-10 items-center justify-center p-3 pr-2 text-gray-500 text-sm uppercase w-auto sm:hidden"
					>
						<svg
							fill="none"
							class="h-5 relative w-5"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</div>
					<svg
						class="absolute fill-current h-4 hidden left-0 ml-4 pointer-events-none text-gray-500 w-4 group-hover:text-gray-400 sm:block"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
					>
						<path
							d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
						/>
					</svg>
					<input
						type="text"
						class="bg-gray-100 block leading-normal pl-10 pr-4 py-1.5 ring-opacity-90 rounded-2xl text-gray-400 w-full focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Search"
					/>
					<div
						class="absolute border border-gray-300 hidden h-auto mr-2 px-2 py-1 right-0 rounded-2xl text-gray-400 text-xs md:block"
					>
						+
					</div>
				</div>
			</div>
			<div class="flex items-center justify-end ml-5 p-1 relative w-1/4 sm:mr-0 sm:right-auto">
				<span class="block relative">
					<img alt="CR7" src="/images/1.png" class="h-10 mx-auto object-cover rounded-full w-10" />
				</span>
			</div>
		</div>
	</div>
</header>
