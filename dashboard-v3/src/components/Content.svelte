<script>
	export let title;
</script>

<div class="flex flex-col flex-wrap sm:flex-row">
	<div class="w-full sm:w-1/2 xl:w-1/3">
		<div class="mb-4">
			<div class="shadow-lg rounded-2xl p-4 bg-white w-full">
				<div class="flex items-center justify-between mb-6">
					<div class="flex items-center">
						<span class="rounded-xl relative p-2 bg-blue-100">
							<svg
								width="25"
								height="25"
								viewBox="0 0 256 262"
								xmlns="http://www.w3.org/2000/svg"
								preserveAspectRatio="xMidYMid"
							>
								<path
									d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
									fill="#4285F4"
								/>
								<path
									d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
									fill="#34A853"
								/>
								<path
									d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
									fill="#FBBC05"
								/>
								<path
									d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
									fill="#EB4335"
								/>
							</svg>
						</span>
						<div class="flex flex-col">
							<span class="font-bold text-md text-black ml-2">
								{title ? title : ' Google'}
							</span>
							<span class="text-sm text-gray-500 ml-2"> Google Inc. </span>
						</div>
					</div>
					<div class="flex items-center">
						<button class="border p-1 border-gray-200 rounded-full">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								class="w-4 h-4 text-yellow-500"
								fill="currentColor"
								viewBox="0 0 1792 1792"
							>
								<path
									d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
								/>
							</svg>
						</button>
						<button class="text-gray-200">
							<svg
								width="25"
								height="25"
								fill="currentColor"
								viewBox="0 0 1792 1792"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z"
								/>
							</svg>
						</button>
					</div>
				</div>
				<div class="flex items-center justify-between mb-4 space-x-12">
					<span
						class="px-2 py-1 flex items-center font-semibold text-xs rounded-md text-gray-500 bg-gray-200"
					>
						PROGRESS
					</span>
					<span
						class="px-2 py-1 flex items-center font-semibold text-xs rounded-md text-red-400 border border-red-400  bg-white"
					>
						HIGH PRIORITY
					</span>
				</div>
				<div class="block m-auto">
					<div>
						<span class="text-sm inline-block text-gray-500">
							Task done :
							<span class="text-gray-700 font-bold"> 25 </span>
							/50
						</span>
					</div>
					<div class="w-full h-2 bg-gray-200 rounded-full mt-2">
						<div class="w-1/2 h-full text-center text-xs text-white bg-purple-500 rounded-full" />
					</div>
				</div>
				<div class="flex items-center justify-start my-4 space-x-4">
					<span
						class="px-2 py-1 flex items-center text-xs rounded-md font-semibold text-green-500 bg-green-50"
					>
						IOS APP
					</span>
					<span
						class="px-2 py-1 flex items-center text-xs rounded-md text-blue-500 font-semibold bg-blue-100"
					>
						UI/UX
					</span>
				</div>
				<div class="flex -space-x-2">
					<span>
						<img
							class="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
							src="/images/5.jpg"
							alt="Guy"
						/>
					</span>
					<span class="">
						<img
							class="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
							src="/images/6.jpg"
							alt="Max"
						/>
					</span>
					<span class="">
						<img
							class="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
							src="/images/7.jpg"
							alt="Charles"
						/>
					</span>
					<span>
						<img
							class="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
							src="/images/8.jpg"
							alt="Jade"
						/>
					</span>
				</div>
				<span
					class="px-2 py-1 flex w-36 mt-4 items-center text-xs rounded-md font-semibold text-yellow-500 bg-yellow-100"
				>
					DUE DATE : 18 JUN
				</span>
			</div>
		</div>
		<div class="mb-4">
			<div class="shadow-lg rounded-2xl p-4 bg-white w-full">
				<div class="flex items-center justify-between mb-6">
					<div class="flex items-center">
						<span class="rounded-xl relative p-2 bg-blue-100">
							<svg
								width="25"
								height="25"
								viewBox="0 0 2447.6 2452.5"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clip-rule="evenodd" fill-rule="evenodd">
									<path
										d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z"
										fill="#36c5f0"
									/>
									<path
										d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z"
										fill="#2eb67d"
									/>
									<path
										d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z"
										fill="#ecb22e"
									/>
									<path
										d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0"
										fill="#e01e5a"
									/>
								</g>
							</svg>
						</span>
						<div class="flex flex-col">
							<span class="font-bold text-md text-black ml-2"> Slack </span>
							<span class="text-sm text-gray-500 ml-2"> Slack corporation </span>
						</div>
					</div>
					<div class="flex items-center">
						<button class="border p-1 border-gray-200 rounded-full">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								class="w-4 h-4 text-yellow-500"
								fill="currentColor"
								viewBox="0 0 1792 1792"
							>
								<path
									d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
								/>
							</svg>
						</button>
						<button class="text-gray-200">
							<svg
								width="25"
								height="25"
								fill="currentColor"
								viewBox="0 0 1792 1792"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z"
								/>
							</svg>
						</button>
					</div>
				</div>
				<div class="flex items-center justify-between mb-4 space-x-12">
					<span
						class="px-2 py-1 flex items-center font-semibold text-xs rounded-md text-green-700 bg-green-50"
					>
						COMPLETED
					</span>
					<span
						class="px-2 py-1 flex items-center font-semibold text-xs rounded-md text-green-600 border border-green-600 bg-white"
					>
						MEDIUM PRIORITY
					</span>
				</div>
				<div class="block m-auto">
					<div>
						<span class="text-sm inline-block text-gray-500">
							Task done :
							<span class="text-gray-700 font-bold"> 50 </span>
							/50
						</span>
					</div>
					<div class="w-full h-2 bg-gray-200 rounded-full mt-2">
						<div class="w-full h-full text-center text-xs text-white bg-pink-400 rounded-full" />
					</div>
				</div>
				<div class="flex items-center justify-start my-4 space-x-4">
					<span
						class="px-2 py-1 flex items-center text-xs rounded-md font-semibold text-green-500 bg-green-50"
					>
						IOS APP
					</span>
					<span
						class="px-2 py-1 flex items-center text-xs rounded-md text-yellow-600 font-semibold bg-yellow-200"
					>
						ANDROID
					</span>
				</div>
				<div class="flex -space-x-2">
					<span>
						<img
							class="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
							src="/images/5.jpg"
							alt="Guy"
						/>
					</span>
					<span>
						<img
							class="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
							src="/images/6.jpg"
							alt="Max"
						/>
					</span>
					<span>
						<img
							class="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
							src="/images/7.jpg"
							alt="Charles"
						/>
					</span>
					<span>
						<img
							class="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
							src="/images/8.jpg"
							alt="Jade"
						/>
					</span>
				</div>
				<span
					class="px-2 py-1 flex w-36 mt-4 items-center text-xs rounded-md font-semibold text-yellow-500 bg-yellow-100"
				>
					DUE DATE : 18 JUN
				</span>
			</div>
		</div>
	</div>
	<div class="w-full sm:w-1/2 xl:w-1/3">
		<div class="mb-4 mx-0 sm:ml-4 xl:mr-4">
			<div class="shadow-lg rounded-2xl bg-white w-full">
				<p class="font-bold text-md p-4 text-black">
					My Tasks
					<span class="text-sm text-gray-500 ml-2"> (05) </span>
				</p>
				<ul>
					<li
						class="flex items-center text-gray-600 justify-between py-3 border-b-2 border-gray-100"
					>
						<div class="flex items-center justify-start text-sm">
							<span class="mx-4">01</span>
							<span>Create wireframe</span>
						</div>
						<svg
							width="20"
							height="20"
							fill="currentColor"
							class="mx-4 text-gray-400"
							viewBox="0 0 1024 1024"
						>
							<path
								d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
								fill="currentColor"
							/>
							<path
								d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
								fill="currentColor"
							/>
						</svg>
					</li>
					<li
						class="flex items-center text-gray-600 justify-between py-3 border-b-2 border-gray-100"
					>
						<div class="flex items-center justify-start text-sm">
							<span class="mx-4">02</span>
							<span>Dashboard design</span>
							<span class="lg:ml-6 ml-2 flex items-center text-gray-400">
								3
								<svg width="15" height="15" fill="currentColor" class="ml-1" viewBox="0 0 512 512">
									<path
										d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2l-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29c7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1l-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160s-93.3 160-208 160z"
										fill="currentColor"
									/>
								</svg>
							</span>
							<span class="mx-4 flex items-center text-gray-400">
								3
								<svg width="15" height="15" class="ml-1" fill="currentColor" viewBox="0 0 384 512">
									<path
										d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8c-.6 16.1-4.2 28.5-11 36.9c-15.4 19.2-49.3 22.4-85.2 25.7c-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3c0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6c3.1-5.2 7.8-9.8 14.9-13.4c16.2-8.2 40.4-10.4 66.1-12.8c42.2-3.9 90-8.4 118.2-43.4c14-17.4 21.1-39.8 21.6-67.9c31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16z"
										fill="currentColor"
									/>
								</svg>
							</span>
						</div>
						<svg
							width="20"
							height="20"
							fill="currentColor"
							class="mx-4 text-gray-400"
							viewBox="0 0 1024 1024"
						>
							<path
								d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
								fill="currentColor"
							/>
							<path
								d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
								fill="currentColor"
							/>
						</svg>
					</li>
					<li
						class="flex items-center text-gray-600 justify-between py-3 border-b-2 border-gray-100"
					>
						<div class="flex items-center justify-start text-sm">
							<span class="mx-4">03</span>
							<span>Components card</span>
							<span class="lg:ml-6 ml-2 flex items-center text-gray-400">
								3
								<svg width="15" height="15" fill="currentColor" class="ml-1" viewBox="0 0 512 512">
									<path
										d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2l-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29c7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1l-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160s-93.3 160-208 160z"
										fill="currentColor"
									/>
								</svg>
							</span>
						</div>
						<svg
							width="20"
							height="20"
							fill="currentColor"
							class="mx-4 text-gray-400"
							viewBox="0 0 1024 1024"
						>
							<path
								d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
								fill="currentColor"
							/>
							<path
								d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
								fill="currentColor"
							/>
						</svg>
					</li>
					<li
						class="flex items-center text-gray-400 justify-between py-3 border-b-2 border-gray-100"
					>
						<div class="flex items-center justify-start text-sm">
							<span class="mx-4">04</span>
							<span class="line-through">Google logo design</span>
						</div>
						<svg
							width="20"
							height="20"
							fill="currentColor"
							viewBox="0 0 1024 1024"
							class="text-green-500 mx-4"
						>
							<path
								d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
								fill="currentColor"
							/>
						</svg>
					</li>
					<li
						class="flex items-center text-gray-400  justify-between py-3 border-b-2 border-gray-100"
					>
						<div class="flex items-center justify-start text-sm">
							<span class="mx-4">05</span>
							<span class="line-through">Header navigation</span>
						</div>
						<svg
							width="20"
							height="20"
							fill="currentColor"
							viewBox="0 0 1024 1024"
							class="text-green-500 mx-4"
						>
							<path
								d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
								fill="currentColor"
							/>
						</svg>
					</li>
					<li
						class="flex items-center text-gray-600 justify-between py-3 border-b-2 border-gray-100"
					>
						<div class="flex items-center justify-start text-sm">
							<span class="mx-4">06</span>
							<span>International</span>
							<span class="lg:ml-6 ml-2 flex items-center text-gray-400">
								3
								<svg width="15" height="15" fill="currentColor" class="ml-1" viewBox="0 0 512 512">
									<path
										d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2l-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29c7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1l-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160s-93.3 160-208 160z"
										fill="currentColor"
									/>
								</svg>
							</span>
							<span class="mx-4 flex items-center text-gray-400">
								3
								<svg width="15" height="15" class="ml-1" fill="currentColor" viewBox="0 0 384 512">
									<path
										d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8c-.6 16.1-4.2 28.5-11 36.9c-15.4 19.2-49.3 22.4-85.2 25.7c-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3c0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6c3.1-5.2 7.8-9.8 14.9-13.4c16.2-8.2 40.4-10.4 66.1-12.8c42.2-3.9 90-8.4 118.2-43.4c14-17.4 21.1-39.8 21.6-67.9c31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16z"
										fill="currentColor"
									/>
								</svg>
							</span>
						</div>
						<svg
							width="20"
							height="20"
							fill="currentColor"
							class="mx-4 text-gray-400"
							viewBox="0 0 1024 1024"
						>
							<path
								d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
								fill="currentColor"
							/>
							<path
								d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
								fill="currentColor"
							/>
						</svg>
					</li>
					<li class="flex items-center text-gray-600 justify-between py-3">
						<div class="flex items-center justify-start text-sm">
							<span class="mx-4">07</span>
							<span>Production data</span>
						</div>
						<svg
							width="20"
							height="20"
							fill="currentColor"
							class="mx-4 text-gray-400"
							viewBox="0 0 1024 1024"
						>
							<path
								d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
								fill="currentColor"
							/>
							<path
								d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
								fill="currentColor"
							/>
						</svg>
					</li>
				</ul>
			</div>
		</div>
		<div class="mb-4 sm:ml-4 xl:mr-4">
			<div class="shadow-lg rounded-2xl bg-white w-full">
				<div class="flex items-center p-4 justify-between">
					<p class="font-bold text-md text-black">Google</p>
					<button class="text-sm p-1 text-gray-400 border rounded border-gray-400 mr-4">
						<svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
							<g fill="none">
								<path
									d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z"
									fill="currentColor"
								/>
							</g>
						</svg>
					</button>
				</div>
				<div
					class="py-2 px-4 bg-blue-100 text-gray-600 border-l-4 border-blue-500 flex items-center justify-between"
				>
					<p class="text-xs flex items-center">
						<svg
							width="20"
							height="20"
							fill="currentColor"
							class="text-blue-500 mr-2"
							viewBox="0 0 24 24"
						>
							<g fill="none">
								<path
									d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z"
									fill="currentColor"
								/>
							</g>
						</svg>
						Create wireframe
					</p>
					<div class="flex items-center">
						<span class="font-bold text-xs mr-2 ml-2 md:ml-4"> 25 min 20s </span>
						<button class="text-sm p-1 text-gray-400 border rounded bg-blue-500 mr-4">
							<svg
								width="17"
								height="17"
								fill="currentColor"
								viewBox="0 0 24 24"
								class="text-white"
							>
								<g fill="none">
									<path
										d="M9 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1zm6 0a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1z"
										fill="currentColor"
									/>
								</g>
							</svg>
						</button>
					</div>
				</div>
				<div class="flex items-center p-4 justify-between border-b-2 border-gray-100">
					<p class="font-bold text-md text-black">Slack</p>
					<button class="text-sm p-1 text-gray-400 border rounded border-gray-400 mr-4">
						<svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
							<g fill="none">
								<path
									d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z"
									fill="currentColor"
								/>
							</g>
						</svg>
					</button>
				</div>
				<div
					class="py-2 px-4 text-gray-600 flex items-center justify-between border-b-2 border-gray-100"
				>
					<p class="text-xs flex items-center">
						<svg width="20" height="20" fill="currentColor" class="mr-2" viewBox="0 0 24 24">
							<g fill="none">
								<path
									d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z"
									fill="currentColor"
								/>
							</g>
						</svg>
						International
					</p>
					<div class="flex items-center">
						<span class="text-xs text-gray-400 mr-2 ml-2 md:ml-4"> 30 min </span>
						<button class="text-sm p-1 text-gray-400 border rounded border-gray-400 mr-4">
							<svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
								<g fill="none">
									<path
										d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z"
										fill="currentColor"
									/>
								</g>
							</svg>
						</button>
					</div>
				</div>
				<div
					class="py-2 px-4 text-gray-600 flex items-center justify-between border-b-2 border-gray-100"
				>
					<p class="text-xs flex items-center">
						<svg width="20" height="20" fill="currentColor" class="mr-2" viewBox="0 0 24 24">
							<g fill="none">
								<path
									d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z"
									fill="currentColor"
								/>
							</g>
						</svg>
						Slack logo design
					</p>
					<div class="flex items-center">
						<span class="text-xs text-gray-400 mr-2 ml-2 md:ml-4"> 30 min </span>
						<button class="text-sm p-1 text-gray-400 border rounded border-gray-400 mr-4">
							<svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
								<g fill="none">
									<path
										d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z"
										fill="currentColor"
									/>
								</g>
							</svg>
						</button>
					</div>
				</div>
				<div class="py-2 px-4 text-gray-600 flex items-center justify-between">
					<p class="text-xs flex items-center">
						<svg width="20" height="20" fill="currentColor" class="mr-2" viewBox="0 0 24 24">
							<g fill="none">
								<path
									d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z"
									fill="currentColor"
								/>
							</g>
						</svg>
						Dashboard template
					</p>
					<div class="flex items-center">
						<span class="text-xs text-gray-400 mr-2 ml-2 md:ml-4"> 30 min </span>
						<button class="text-sm p-1 text-gray-400 border rounded border-gray-400 mr-4">
							<svg width="15" height="15" fill="currentColor" viewBox="0 0 20 20">
								<g fill="none">
									<path
										d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z"
										fill="currentColor"
									/>
								</g>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="w-full sm:w-1/2 xl:w-1/3">
		<div class="mb-4">
			<div class="shadow-lg rounded-2xl p-4 bg-white w-full">
				<p class="font-bold text-md text-black">Messages</p>
				<ul>
					<li class="flex items-center my-6 space-x-2">
						<span class="block relative">
							<img
								alt="Maurice"
								src="/images/2.jpg"
								class="mx-auto object-cover rounded-full h-10 w-10 "
							/>
						</span>
						<div class="flex flex-col">
							<span class="text-sm text-gray-900 font-semibold ml-2">
								Maurice
							</span>
							<span class="text-sm text-gray-400 ml-2">
								Hey Enoch, did you read the Nextjs doc?
							</span>
						</div>
					</li>
					<li class="flex items-center my-6 space-x-2">
						<span class="block relative">
							<img
								alt="Enoch Ndika"
								src="/images/1.jpg"
								class="mx-auto object-cover rounded-full h-10 w-10 "
							/>
						</span>
						<div class="flex flex-col">
							<span class="text-sm text-gray-900 font-semibold ml-2"> Enoch </span>
							<span class="text-sm text-gray-400 ml-2">
								Yeah! that's one of the best docs
							</span>
						</div>
					</li>
					<li class="flex items-center my-6 space-x-2">
						<span class="block relative">
							<img
								alt="CR7"
								src="/images/3.png"
								class="mx-auto object-cover rounded-full h-10 w-10 "
							/>
						</span>
						<div class="flex flex-col">
							<span class="text-sm text-gray-900 font-semibold ml-2">
								Cristiano
							</span>
							<span class="text-sm text-gray-400 ml-2">
								Tailwind JIT is a game changer!
							</span>
						</div>
					</li>
					<li class="flex items-center my-6 space-x-2">
						<span class="block relative">
							<img
								alt="Lionel Messi"
								src="/images/4.jpg"
								class="mx-auto object-cover rounded-full h-10 w-10 "
							/>
						</span>
						<div class="flex flex-col">
							<span class="text-sm text-gray-900 font-semibold ml-2"> Messi </span>
							<span class="text-sm text-gray-400 ml-2">
								Yeah can confirm that on Austin 3:16
							</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
