<script>
	export let title;
</script>

<div class="flex flex-wrap">
	<div class="w-full lg:w-8/12 bg-gray-800 py-6 px-6 rounded-3xl">
		<div class="flex justify-between text-white items-center mb-8">
			<p class="text-2xl font-bold">{title}</p>
			<p class="">December, 12</p>
		</div>
		<div class="flex flex-wrap justify-between items-center pb-8">
			<div class="flex flex-wrap text-white">
				<div class="pr-10">
					<div class="text-2xl font-bold">45</div>
					<div class="">In Progress</div>
				</div>
				<div class="pr-10">
					<div class="text-2xl font-bold">24</div>
					<div class="">Upcoming</div>
				</div>
				<div>
					<div class="text-2xl font-bold">62</div>
					<div class="">Total Projects</div>
				</div>
			</div>
			<div class="flex items-center mt-4 md:mt-0">
				<button class="text-white bg-transparent" title="List View">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<line x1="8" y1="6" x2="21" y2="6" />
						<line x1="8" y1="12" x2="21" y2="12" />
						<line x1="8" y1="18" x2="21" y2="18" />
						<line x1="3" y1="6" x2="3.01" y2="6" />
						<line x1="3" y1="12" x2="3.01" y2="12" />
						<line x1="3" y1="18" x2="3.01" y2="18" />
					</svg>
				</button>
				<button class="text-white bg-gray-700 p-2 ml-2" title="Grid View">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<rect x="3" y="3" width="7" height="7" />
						<rect x="14" y="3" width="7" height="7" />
						<rect x="14" y="14" width="7" height="7" />
						<rect x="3" y="14" width="7" height="7" />
					</svg>
				</button>
			</div>
		</div>
		<div class="flex flex-wrap">
			<div class="w-full md:w-4/12">
				<div class="p-2">
					<div class="p-4 rounded-3xl" style=" background-color: #fee4cb">
						<div class="flex items-center justify-b">
							<span class="text-sm">December 10, 2020</span>
						</div>
						<div class="text-center mb-4 mt-5">
							<p class="text-base font-bold opacity-70">Web Designing</p>
							<p class="text-sm opacity-70 mt-2">Prototyping</p>
						</div>
						<div>
							<p class="text-sm font-bold m-0">Progress</p>
							<div class="w-full h-1 rounded-md overflow-hidden bg-white my-2 mx-0">
								<span class="block h-1 rounded-md bg-yellow-700 w-6/12" />
							</div>
							<p class="text-right m-0 text-sm font-bold">60%</p>
						</div>
						<div class="flex justify-between pt-4 relative">
							<div class="flex items-center">
								<img
									class="w-5 h-5 rounded-full overflow-hidden object-cover"
									src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
									alt="participant"
								/>
								<img
									class="w-5 h-5 rounded-full overflow-hidden object-cover"
									src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
									alt="participant"
								/>
								<button
									class="w-5 h-5 rounded-full border-none ml-3 p-0 flex justify-center items-center bg-white"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="12"
										height="12"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="3"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="feather feather-plus"
									>
										<path d="M12 5v14M5 12h14" />
									</svg>
								</button>
							</div>
							<div
								class="text-sm rounded-lg flex flex-shrink-0 py-2 px-4 font-bold text-yellow-600"
							>
								2 Days Left
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="w-full md:w-4/12">
				<div class="p-2">
					<div class="p-4 rounded-3xl bg-gray-300">
						<div class="flex items-center justify-b">
							<span class="text-sm">December 10, 2020</span>
						</div>
						<div class="text-center mb-4 mt-5">
							<p class="text-base font-bold opacity-70">Web Designing</p>
							<p class="text-sm opacity-70 mt-2">Prototyping</p>
						</div>
						<div>
							<p class="text-sm font-bold m-0">Progress</p>
							<div class="w-full h-1 rounded-md overflow-hidden bg-white my-2 mx-0">
								<span class="block h-1 rounded-md bg-indigo-700 w-5/12" />
							</div>
							<p class="text-right m-0 text-sm font-bold">50%</p>
						</div>
						<div class="flex justify-between pt-4 relative">
							<div class="flex items-center">
								<img
									class="w-5 h-5 rounded-full overflow-hidden object-cover"
									src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
									alt="participant"
								/>
								<img
									class="w-5 h-5 rounded-full overflow-hidden object-cover"
									src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
									alt="participant"
								/>
								<button
									class="w-5 h-5 rounded-full border-none ml-3 p-0 flex justify-center items-center bg-white"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="12"
										height="12"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="3"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="feather feather-plus"
									>
										<path d="M12 5v14M5 12h14" />
									</svg>
								</button>
							</div>
							<div
								class="text-sm rounded-lg flex flex-shrink-0 py-2 px-4 font-bold text-indigo-700"
							>
								2 Days Left
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="w-full md:w-4/12">
				<div class="p-2">
					<div class="p-4 rounded-3xl bg-green-200">
						<div class="flex items-center justify-b">
							<span class="text-sm">December 10, 2020</span>
						</div>
						<div class="text-center mb-4 mt-5">
							<p class="text-base font-bold opacity-70">Web Designing</p>
							<p class="text-sm opacity-70 mt-2">Prototyping</p>
						</div>
						<div>
							<p class="text-sm font-bold m-0">Progress</p>
							<div class="w-full h-1 rounded-md overflow-hidden bg-white my-2 mx-0">
								<span class="block h-1 rounded-md bg-green-700 w-7/12" />
							</div>
							<p class="text-right m-0 text-sm font-bold">70%</p>
						</div>
						<div class="flex justify-between pt-4 relative">
							<div class="flex items-center">
								<img
									class="w-5 h-5 rounded-full overflow-hidden object-cover"
									src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
									alt="participant"
								/>
								<img
									class="w-5 h-5 rounded-full overflow-hidden object-cover"
									src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
									alt="participant"
								/>
								<button
									class="w-5 h-5 rounded-full border-none ml-3 p-0 flex justify-center items-center bg-white"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="12"
										height="12"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="3"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="feather feather-plus"
									>
										<path d="M12 5v14M5 12h14" />
									</svg>
								</button>
							</div>
							<div class="text-sm rounded-lg flex flex-shrink-0 py-2 px-4 font-bold text-green-700">
								2 Days Left
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="w-full md:w-4/12">
				<div class="p-2">
					<div class="p-4 rounded-3xl bg-blue-200">
						<div class="flex items-center justify-b">
							<span class="text-sm">December 10, 2020</span>
						</div>
						<div class="text-center mb-4 mt-5">
							<p class="text-base font-bold opacity-70">Web Designing</p>
							<p class="text-sm opacity-70 mt-2">Prototyping</p>
						</div>
						<div>
							<p class="text-sm font-bold m-0">Progress</p>
							<div class="w-full h-1 rounded-md overflow-hidden bg-white my-2 mx-0">
								<span class="block h-1 rounded-md bg-blue-700 w-7/12" />
							</div>
							<p class="text-right m-0 text-sm font-bold">70%</p>
						</div>
						<div class="flex justify-between pt-4 relative">
							<div class="flex items-center">
								<img
									class="w-5 h-5 rounded-full overflow-hidden object-cover"
									src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
									alt="participant"
								/>
								<img
									class="w-5 h-5 rounded-full overflow-hidden object-cover"
									src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
									alt="participant"
								/>
								<button
									class="w-5 h-5 rounded-full border-none ml-3 p-0 flex justify-center items-center bg-white"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="12"
										height="12"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="3"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="feather feather-plus"
									>
										<path d="M12 5v14M5 12h14" />
									</svg>
								</button>
							</div>
							<div class="text-sm rounded-lg flex flex-shrink-0 py-2 px-4 font-bold text-blue-700">
								2 Days Left
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="w-full md:w-4/12">
				<div class="p-2">
					<div class="p-4 rounded-3xl bg-red-200">
						<div class="flex items-center justify-b">
							<span class="text-sm">December 10, 2020</span>
						</div>
						<div class="text-center mb-4 mt-5">
							<p class="text-base font-bold opacity-70">Web Designing</p>
							<p class="text-sm opacity-70 mt-2">Prototyping</p>
						</div>
						<div>
							<p class="text-sm font-bold m-0">Progress</p>
							<div class="w-full h-1 rounded-md overflow-hidden bg-white my-2 mx-0">
								<span class="block h-1 rounded-md bg-red-700 w-7/12" />
							</div>
							<p class="text-right m-0 text-sm font-bold">70%</p>
						</div>
						<div class="flex justify-between pt-4 relative">
							<div class="flex items-center">
								<img
									class="w-5 h-5 rounded-full overflow-hidden object-cover"
									src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
									alt="participant"
								/>
								<img
									class="w-5 h-5 rounded-full overflow-hidden object-cover"
									src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
									alt="participant"
								/>
								<button
									class="w-5 h-5 rounded-full border-none ml-3 p-0 flex justify-center items-center bg-white"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="12"
										height="12"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="3"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="feather feather-plus"
									>
										<path d="M12 5v14M5 12h14" />
									</svg>
								</button>
							</div>
							<div class="text-sm rounded-lg flex flex-shrink-0 py-2 px-4 font-bold text-red-700">
								2 Days Left
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="w-full md:w-4/12">
				<div class="p-2">
					<div class="p-4 rounded-3xl bg-purple-200">
						<div class="flex items-center justify-b">
							<span class="text-sm">December 10, 2020</span>
						</div>
						<div class="text-center mb-4 mt-5">
							<p class="text-base font-bold opacity-70">Web Designing</p>
							<p class="text-sm opacity-70 mt-2">Prototyping</p>
						</div>
						<div>
							<p class="text-sm font-bold m-0">Progress</p>
							<div class="w-full h-1 rounded-md overflow-hidden bg-white my-2 mx-0">
								<span class="block h-1 rounded-md bg-purple-700 w-7/12" />
							</div>
							<p class="text-right m-0 text-sm font-bold">70%</p>
						</div>
						<div class="flex justify-between pt-4 relative">
							<div class="flex items-center">
								<img
									class="w-5 h-5 rounded-full overflow-hidden object-cover"
									src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
									alt="participant"
								/>
								<img
									class="w-5 h-5 rounded-full overflow-hidden object-cover"
									src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
									alt="participant"
								/>
								<button
									class="w-5 h-5 rounded-full border-none ml-3 p-0 flex justify-center items-center bg-white"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="12"
										height="12"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="3"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="feather feather-plus"
									>
										<path d="M12 5v14M5 12h14" />
									</svg>
								</button>
							</div>
							<div
								class="text-sm rounded-lg flex flex-shrink-0 py-2 px-4 font-bold text-purple-700"
							>
								2 Days Left
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="w-full mt-8 lg:mt-0 lg:w-4/12 lg:pl-4">
		<div class="bg-gray-800 rounded-3xl px-6 pt-6">
			<div class="flex text-white text-2xl pb-6 font-bold">
				<p>Client Messages</p>
			</div>
			<div>
				<div
					class="border-t solid border-gray-700 p-4 flex 2xl:items-start w-full hover:bg-gray-700"
				>
					<img
						src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
						alt="profile"
						class="object-cover w-10 h-10 rounded-full"
					/>
					<div class="pl-4 w-full">
						<div class="flex items-center justify-between w-full">
							<div class="text-white font-medium">Stephanie</div>
							<div class="flex justify-center items-center cursor-pointer h-7 w-7">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="text-white"
								>
									<polygon
										points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
									/>
								</svg>
							</div>
						</div>
						<p class="my-2 text-sm text-gray-400">
							I got your first assignment. It was quite good. 🥳 We can continue with the next
							assignment.
						</p>
						<p class="text-right text-gray-400 text-sm">Dec, 12</p>
					</div>
				</div>
				<div
					class="border-t solid border-gray-700 p-4 flex 2xl:items-start w-full hover:bg-gray-700"
				>
					<img
						src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
						alt="profile"
						class="object-cover w-10 h-10 rounded-full"
					/>
					<div class="pl-4 w-full">
						<div class="flex items-center justify-between w-full">
							<div class="text-white font-medium">Mark</div>
							<div class="flex justify-center items-center cursor-pointer h-7 w-7">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="text-white"
								>
									<polygon
										points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
									/>
								</svg>
							</div>
						</div>
						<p class="my-2 text-sm text-gray-400">
							Hey, can tell me about progress of project? I'm waiting for your response.
						</p>
						<p class="text-right text-gray-400 text-sm">Dec, 12</p>
					</div>
				</div>
				<div
					class="border-t solid border-gray-700 p-4 flex 2xl:items-start w-full hover:bg-gray-700"
				>
					<img
						src="https://images.unsplash.com/photo-1543965170-4c01a586684e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
						alt="profile"
						class="object-cover w-10 h-10 rounded-full"
					/>
					<div class="pl-4 w-full">
						<div class="flex items-center justify-between w-full">
							<div class="text-white font-medium">David</div>
							<div class="flex justify-center items-center cursor-pointer h-7 w-7">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="text-white"
								>
									<polygon
										points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
									/>
								</svg>
							</div>
						</div>
						<p class="my-2 text-sm text-gray-400">
							Hey, can tell me about progress of project? I'm waiting for your response.
						</p>
						<p class="text-right text-gray-400 text-sm">Dec, 12</p>
					</div>
				</div>
				<div
					class="border-t solid border-gray-700 p-4 flex 2xl:items-start w-full hover:bg-gray-700"
				>
					<img
						src="https://images.unsplash.com/photo-1533993192821-2cce3a8267d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwbW9kZXJufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
						alt="profile"
						class="object-cover w-10 h-10 rounded-full"
					/>
					<div class="pl-4 w-full">
						<div class="flex items-center justify-between w-full">
							<div class="text-white font-medium">Mark</div>
							<div class="flex justify-center items-center cursor-pointer h-7 w-7">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="text-white"
								>
									<polygon
										points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
									/>
								</svg>
							</div>
						</div>
						<p class="my-2 text-sm text-gray-400">
							I am really impressed! Can't wait to see the final result.
						</p>
						<p class="text-right text-gray-400 text-sm">Dec, 12</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
