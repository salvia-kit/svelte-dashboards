<script>
	import { openSidebar } from './store.ts';
</script>

<header class="h-16 md:h-20 items-center relative w-full z-10">
	<div
		class="
        flex
        flex-col
        flex-center
        h-full
        px-3
        mx-auto
        relative
        justify-center
      "
	>
		<div
			class="
          flex
          items-center
          pl-1
          relative
          w-full
          sm:ml-0 sm:pr-2
          lg:max-w-68
        "
		>
			<div class="container flex left-0 relative w-3/4">
				<div class="flex group h-full items-center relative w-12">
					<button
						type="button"
						aria-expanded="false"
						aria-label="Toggle sidenav"
						class="text-4xl text-white focus:outline-none lg:hidden"
						on:click={openSidebar}
					>
						&#8801;
					</button>
				</div>
				<div
					class="
              group
              h-full
              hidden
              items-center
              relative
              w-full
              md:flex
              lg:w-64
            "
				>
					<div
						class="
                absolute
                block
                cursor-pointer
                flex
                items-center
                justify-center
                p-3
                pr-2
                text-gray-500 text-sm
                uppercase
                sm:hidden
              "
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
						class="
                absolute
                fill-current
                h-4
                hidden
                left-0
                ml-4
                pointer-events-none
                text-gray-500
                w-4
                group-hover:text-gray-400
                sm:block
              "
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
					>
						<path
							d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
						/>
					</svg>
					<input
						type="text"
						class="
                bg-gray-100
                block
                leading-normal
                pl-10
                pr-4
                py-1.5
                ring-opacity-90
                rounded-2xl
                text-gray-400
                w-full
                focus:border-transparent
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
						placeholder="Search"
					/>
					<div
						class="
                absolute
                border border-gray-300
                h-auto
                hidden
                mr-2
                px-2
                py-1
                right-0
                text-gray-400 text-xs
                rounded-2xl
                md:block
              "
					>
						+
					</div>
				</div>
			</div>
			<div
				class="
            flex
            items-center
            justify-end
            ml-5
            p-1
            relative
            w-9/12
            sm:mr-0 sm:right-auto
            md:w-1/4
          "
			>
				<span class="block pr-1 text-white">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
					</svg>
				</span>
				<span class="block inline-block px-3 py-2 relative rounded text-white">
					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
							/>
						</svg>
					</span>
					<span
						class="
                absolute
                bg-blue-700
                font-bold
                px-2
                py-0.5
                right-0
                rounded-full
                text-xs
                top-0
              "
					>
						3
					</span>
				</span>
				<span class="block pl-5 relative">
					<img
						alt="Enoch Ndika"
						src="/images/1.jpg"
						class="h-10 mx-auto object-cover rounded-full w-10"
					/>
				</span>
			</div>
		</div>
	</div>
</header>
