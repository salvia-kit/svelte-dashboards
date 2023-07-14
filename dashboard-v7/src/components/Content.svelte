<script>
	export let title;
</script>

<div>
	<div class="container mx-auto">
		<div class="py-8">
			<div class="flex flex-wrap flex-row mb-1 sm:mb-0 justify-between w-full">
				<h2 class="text-2xl leading-tight md:pr-0 text-white">{title}</h2>
				<div class="text-end">
					<form class="flex w-full space-x-3">
						<div class=" relative ">
							<input
								type="text"
								id="form-subscribe-Filter"
								class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
								placeholder="name"
							/>
						</div>
						<button
							class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-gray-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
							type="submit"
						>
							Filter
						</button>
					</form>
				</div>
			</div>
			<div class="py-4">
				<div class="max-w-full overflow-x-auto shadow rounded-lg">
					<table class="w-full leading-normal">
						<thead>
							<tr>
								<th
									scope="col"
									class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
								>
									User
								</th>
								<th
									scope="col"
									class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
								>
									Role
								</th>
								<th
									scope="col"
									class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
								>
									Created at
								</th>
								<th
									scope="col"
									class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
								>
									status
								</th>
								<th
									scope="col"
									class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
								/>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<div class="flex items-center">
										<div class="flex-shrink-0">
											<span class="block relative">
												<img
													alt="profil"
													src="/images/2.jpg"
													class="mx-auto object-cover rounded-full h-10 w-10 "
												/>
											</span>
										</div>
										<div class="ml-3">
											<p class="text-gray-900 whitespace-no-wrap">Jean marc</p>
										</div>
									</div>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">Admin</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">12/09/2020</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<span
										class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
									>
										<span
											aria-hidden="true"
											class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
										/>
										<span class="relative">active</span>
									</span>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<span class="text-indigo-600 hover:text-indigo-900"> Edit </span>
								</td>
							</tr>
							<tr>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<div class="flex items-center">
										<div class="flex-shrink-0">
											<span class="block relative">
												<img
													alt="profil"
													src="/images/3.jpg"
													class="mx-auto object-cover rounded-full h-10 w-10 "
												/>
											</span>
										</div>
										<div class="ml-3">
											<p class="text-gray-900 whitespace-no-wrap">Marcus coco</p>
										</div>
									</div>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">Designer</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">01/10/2012</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<span
										class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
									>
										<span
											aria-hidden="true"
											class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
										/>
										<span class="relative">active</span>
									</span>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<span class="text-indigo-600 hover:text-indigo-900"> Edit </span>
								</td>
							</tr>
							<tr>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<div class="flex items-center">
										<div class="flex-shrink-0">
											<span class="block relative">
												<img
													alt="profil"
													src="/images/4.jpg"
													class="mx-auto object-cover rounded-full h-10 w-10 "
												/>
											</span>
										</div>
										<div class="ml-3">
											<p class="text-gray-900 whitespace-no-wrap">Ecric marc</p>
										</div>
									</div>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">Developer</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">02/10/2018</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<span
										class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
									>
										<span
											aria-hidden="true"
											class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
										/>
										<span class="relative">active</span>
									</span>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<span class="text-indigo-600 hover:text-indigo-900"> Edit </span>
								</td>
							</tr>
							<tr>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<div class="flex items-center">
										<div class="flex-shrink-0">
											<span class="block relative">
												<img
													alt="profil"
													src="/images/5.jpg"
													class="mx-auto object-cover rounded-full h-10 w-10 "
												/>
											</span>
										</div>
										<div class="ml-3">
											<p class="text-gray-900 whitespace-no-wrap">Julien Huger</p>
										</div>
									</div>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">User</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">23/09/2010</p>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<span
										class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
									>
										<span
											aria-hidden="true"
											class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
										/>
										<span class="relative">active</span>
									</span>
								</td>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<span class="text-indigo-600 hover:text-indigo-900"> Edit </span>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
						<div class="flex items-center">
							<button
								type="button"
								class="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100"
							>
								<svg
									width="9"
									fill="currentColor"
									height="8"
									class=""
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"
									/>
								</svg>
							</button>
							<button
								type="button"
								class="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 "
							>
								1
							</button>
							<button
								type="button"
								class="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100"
							>
								2
							</button>
							<button
								type="button"
								class="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100"
							>
								3
							</button>
							<button
								type="button"
								class="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100"
							>
								4
							</button>
							<button
								type="button"
								class="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100"
							>
								<svg
									width="9"
									fill="currentColor"
									height="8"
									class=""
									viewBox="0 0 1792 1792"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="sm:flex flex-wrap justify-center items-center text-center gap-8">
		<div
			class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg"
		>
			<div class="flex-shrink-0">
				<div
					class="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-gray-600 text-white"
				>
					<svg
						width="20"
						height="20"
						fill="currentColor"
						class="h-6 w-6"
						viewBox="0 0 1792 1792"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"
						/>
					</svg>
				</div>
			</div>
			<h3 class="text-2xl sm:text-xl text-gray-700 font-semibold py-4">
				Website Design
			</h3>
			<p class="text-md  text-gray-500 py-4">
				Encompassing today’s website design technology to integrated and build solutions relevant to
				your business.
			</p>
		</div>
		<div
			class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 sm:mt-16 md:mt-20 lg:mt-24 bg-white shadow-lg rounded-lg"
		>
			<div class="flex-shrink-0">
				<div
					class="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-gray-600 text-white"
				>
					<svg
						width="20"
						height="20"
						fill="currentColor"
						class="h-6 w-6"
						viewBox="0 0 1792 1792"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"
						/>
					</svg>
				</div>
			</div>
			<h3 class="text-2xl sm:text-xl text-gray-700 font-semibold py-4">Branding</h3>
			<p class="text-md text-gray-500 py-4">
				Share relevant, engaging, and inspirational brand messages to create a connection with your
				audience.
			</p>
		</div>
		<div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg ">
			<div class="flex-shrink-0">
				<div
					class="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-gray-600 text-white"
				>
					<svg
						width="20"
						height="20"
						fill="currentColor"
						class="h-6 w-6"
						viewBox="0 0 1792 1792"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"
						/>
					</svg>
				</div>
			</div>
			<h3 class="text-2xl sm:text-xl text-gray-700 font-semibold py-4">SEO Marketing</h3>
			<p class="text-md  text-gray-500 py-4">
				Let us help you level up your search engine game, explore our solutions for digital
				marketing for your business.
			</p>
		</div>
	</div>
</div>
