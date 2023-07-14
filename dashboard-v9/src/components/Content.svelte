<script>
	export let title;
</script>

<div class="mt-4">
	<div class="mb-5 text-2xl font-medium text-gray-700">{title}</div>
	<div class="flex gap-8">
		<div class="flex items-center gap-4 rounded-md border bg-white px-8 py-4 text-gray-700 shadow">
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-8 w-8"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
					/>
				</svg>
			</div>
			<div>
				<div class="text-lg font-bold">100K</div>
				<div class="text-sm">Total Users</div>
			</div>
		</div>
		<div class="flex items-center gap-4 rounded-md border bg-white px-8 py-4 text-gray-700 shadow">
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-8 w-8"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
					/>
				</svg>
			</div>
			<div>
				<div class="text-lg font-bold">3K</div>
				<div class="text-sm">Applications</div>
			</div>
		</div>
		<div class="flex items-center gap-4 rounded-md border bg-white px-8 py-4 text-gray-700 shadow">
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-8 w-8"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</div>
			<div>
				<div class="text-lg font-bold">100M</div>
				<div class="text-sm">Revenues</div>
			</div>
		</div>
	</div>
	<div class="container mt-10 border">
		<div class="py-8">
			<div class="py-4">
				<div class="max-w-full overflow-x-auto rounded-lg">
					<table class="w-full leading-normal text-black">
						<thead>
							<tr>
								<th
									scope="col"
									class="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
								>
									User
								</th>
								<th
									scope="col"
									class="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
								>
									Role
								</th>
								<th
									scope="col"
									class="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
								>
									Created_at
								</th>
								<th
									scope="col"
									class="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
								>
									status
								</th>
								<th
									scope="col"
									class="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
								/>
							</tr>
						</thead>
						<tbody class="text-black">
							<tr>
								<td class="border-b border-gray-200 p-5 text-sm">
									<div class="flex items-center">
										<div class="shrink-0">
											<span class="relative block">
												<img
													alt="profil"
													src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/8_yfarwk.jpg"
													class="mx-auto h-10 w-10 rounded-full object-cover"
												/>
											</span>
										</div>
										<div class="ml-3">
											<p class="whitespace-nowrap">Jean marc</p>
										</div>
									</div>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<p class="whitespace-nowrap">Admin</p>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<p class="whitespace-nowrap">12/09/2020</p>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<span class="relative inline-block px-3 py-1 font-semibold leading-tight">
										<span
											aria-hidden="true"
											class="absolute inset-0 rounded-full bg-green-200 opacity-50"
										/>
										<span class="relative">active</span>
									</span>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<span class="text-indigo-600 hover:text-indigo-900"> Edit </span>
								</td>
							</tr>
							<tr>
								<td class="border-b border-gray-200 p-5 text-sm">
									<div class="flex items-center">
										<div class="shrink-0">
											<span class="relative block">
												<img
													alt="profil"
													src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/4_iauuag.jpg"
													class="mx-auto h-10 w-10 rounded-full object-cover"
												/>
											</span>
										</div>
										<div class="ml-3">
											<p class="whitespace-nowrap">Marcus coco</p>
										</div>
									</div>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<p class="whitespace-nowrap">Designer</p>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<p class="whitespace-nowrap">01/10/2012</p>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<span
										class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900"
									>
										<span
											aria-hidden="true"
											class="absolute inset-0 rounded-full bg-green-200 opacity-50"
										/>
										<span class="relative">active</span>
									</span>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<span class="text-indigo-600 hover:text-indigo-900"> Edit </span>
								</td>
							</tr>
							<tr>
								<td class="border-b border-gray-200 p-5 text-sm">
									<div class="flex items-center">
										<div class="shrink-0">
											<span class="relative block">
												<img
													alt="profil"
													src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/3_iscinv.jpg"
													class="mx-auto h-10 w-10 rounded-full object-cover"
												/>
											</span>
										</div>
										<div class="ml-3">
											<p class="whitespace-nowrap">Eric marc</p>
										</div>
									</div>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<p class="whitespace-nowrap">Developer</p>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<p class="whitespace-nowrap">02/10/2018</p>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<span class="relative inline-block px-3 py-1 font-semibold leading-tight">
										<span
											aria-hidden="true"
											class="absolute inset-0 rounded-full bg-green-200 opacity-50"
										/>
										<span class="relative">active</span>
									</span>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<span class="text-indigo-600 hover:text-indigo-900"> Edit </span>
								</td>
							</tr>
							<tr>
								<td class="border-b border-gray-200 p-5 text-sm">
									<div class="flex items-center">
										<div class="shrink-0">
											<span class="relative block">
												<img
													alt="profil"
													src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/6_v4ytve.jpg"
													class="mx-auto h-10 w-10 rounded-full object-cover"
												/>
											</span>
										</div>
										<div class="ml-3">
											<p class="whitespace-nowrap">Julien Huger</p>
										</div>
									</div>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<p class="whitespace-nowrap">User</p>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<p class="whitespace-nowrap">23/09/2010</p>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<span
										class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900"
									>
										<span
											aria-hidden="true"
											class="absolute inset-0 rounded-full bg-green-200 opacity-50"
										/>
										<span class="relative">active</span>
									</span>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<span class="text-indigo-600 hover:text-indigo-900"> Edit </span>
								</td>
							</tr>
							<tr>
								<td class="border-b border-gray-200 p-5 text-sm">
									<div class="flex items-center">
										<div class="shrink-0">
											<span class="relative block">
												<img
													alt="profil"
													src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/8_yfarwk.jpg"
													class="mx-auto h-10 w-10 rounded-full object-cover"
												/>
											</span>
										</div>
										<div class="ml-3">
											<p class="whitespace-nowrap">Jean marc</p>
										</div>
									</div>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<p class="whitespace-nowrap">Admin</p>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<p class="whitespace-nowrap">12/09/2020</p>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<span class="relative inline-block px-3 py-1 font-semibold leading-tight">
										<span
											aria-hidden="true"
											class="absolute inset-0 rounded-full bg-green-200 opacity-50"
										/>
										<span class="relative">active</span>
									</span>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<span class="text-indigo-600 hover:text-indigo-900"> Edit </span>
								</td>
							</tr>
							<tr>
								<td class="border-b border-gray-200 p-5 text-sm">
									<div class="flex items-center">
										<div class="shrink-0">
											<span class="relative block">
												<img
													alt="profil"
													src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/4_iauuag.jpg"
													class="mx-auto h-10 w-10 rounded-full object-cover"
												/>
											</span>
										</div>
										<div class="ml-3">
											<p class="whitespace-nowrap">Marcus coco</p>
										</div>
									</div>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<p class="whitespace-nowrap">Designer</p>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<p class="whitespace-nowrap">01/10/2012</p>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<span
										class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900"
									>
										<span
											aria-hidden="true"
											class="absolute inset-0 rounded-full bg-green-200 opacity-50"
										/>
										<span class="relative">active</span>
									</span>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<span class="text-indigo-600 hover:text-indigo-900"> Edit </span>
								</td>
							</tr>
							<tr>
								<td class="border-b border-gray-200 p-5 text-sm">
									<div class="flex items-center">
										<div class="shrink-0">
											<span class="relative block">
												<img
													alt="profil"
													src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/3_iscinv.jpg"
													class="mx-auto h-10 w-10 rounded-full object-cover"
												/>
											</span>
										</div>
										<div class="ml-3">
											<p class="whitespace-nowrap">Eric marc</p>
										</div>
									</div>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<p class="whitespace-nowrap">Developer</p>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<p class="whitespace-nowrap">02/10/2018</p>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<span class="relative inline-block px-3 py-1 font-semibold leading-tight">
										<span
											aria-hidden="true"
											class="absolute inset-0 rounded-full bg-green-200 opacity-50"
										/>
										<span class="relative">active</span>
									</span>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<span class="text-indigo-600 hover:text-indigo-900"> Edit </span>
								</td>
							</tr>
							<tr>
								<td class="border-b border-gray-200 p-5 text-sm">
									<div class="flex items-center">
										<div class="shrink-0">
											<span class="relative block">
												<img
													alt="profil"
													src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/6_v4ytve.jpg"
													class="mx-auto h-10 w-10 rounded-full object-cover"
												/>
											</span>
										</div>
										<div class="ml-3">
											<p class="whitespace-nowrap">Julien Huger</p>
										</div>
									</div>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<p class="whitespace-nowrap">User</p>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<p class="whitespace-nowrap">23/09/2010</p>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<span
										class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900"
									>
										<span
											aria-hidden="true"
											class="absolute inset-0 rounded-full bg-green-200 opacity-50"
										/>
										<span class="relative">active</span>
									</span>
								</td>
								<td class="border-b border-gray-200 p-5 text-sm">
									<span class="text-indigo-600 hover:text-indigo-900"> Edit </span>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="xs:flex-row xs:justify-between flex flex-col items-center p-5">
						<div class="flex items-center">
							<button
								type="button"
								class="w-full rounded-l-xl border bg-white p-4 text-base text-gray-600 hover:bg-gray-100"
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
								class="w-full border-y bg-white px-4 py-2 text-base text-indigo-500 hover:bg-gray-100"
							>
								1
							</button>
							<button
								type="button"
								class="w-full border bg-white px-4 py-2 text-base text-gray-600 hover:bg-gray-100"
							>
								2
							</button>
							<button
								type="button"
								class="w-full border-y bg-white px-4 py-2 text-base text-gray-600 hover:bg-gray-100"
							>
								3
							</button>
							<button
								type="button"
								class="w-full border bg-white px-4 py-2 text-base text-gray-600 hover:bg-gray-100"
							>
								4
							</button>
							<button
								type="button"
								class="w-full rounded-r-xl border-y border-r bg-white p-4 text-base text-gray-600 hover:bg-gray-100"
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
</div>
