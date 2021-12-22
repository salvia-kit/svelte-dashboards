<script>
	import Snippet from './Snippet.svelte';
	import JsIcon from './icons/JsIcon.svelte';
	import SvelteIcon from './icons/SvelteIcon.svelte';
	import FolderIcon from './icons/FolderIcon.svelte';
</script>

<div class="py-8 rounded-3xl max-w-full text-white bg-gray-800">
	<section class="mb-16 px-3 md:px-8 pt-8">
		<h2 class="text-2xl font-medium">Features</h2>
		<ul class="list-disc pl-6 mt-4">
			<li class="mb-4">Support of the active route (styled by default).</li>
			<li class="mb-4">Fully customizable and without external dependencies.</li>
			<li class="mb-4">No vendor lock-in, you can export it and integrate it in your project.</li>
			<li>Sidenav aligned left or right according to your preferences (on mobile).</li>
		</ul>
	</section>

	<section class="mb-16 px-3 md:px-8">
		<h2 class="text-2xl font-medium">File Structure</h2>
		<div class="pl-2">
			<div class="flex mt-4 mb-3">
				<FolderIcon />
				<span class="pl-2">src</span>
			</div>
			<div class="pl-5 flex mb-3">
				<FolderIcon />
				<span class="pl-2">components</span>
			</div>
			<div class="pl-5 flex mb-3">
				<FolderIcon />
				<span class="pl-2">dashboard</span>
			</div>
			<div class="pl-11 flex mb-3">
				<FolderIcon />
				<span class="pl-2">provider</span>
			</div>
			<div class="pl-16 flex mb-3">
				<JsIcon />
				<span class="pl-2">clickOutside.js</span>
			</div>
			<div class="pl-16 flex mb-3">
				<SvelteIcon />
				<span class="pl-2">Overlay.svelte</span>
			</div>
			<div class="pl-16 flex mb-3">
				<JsIcon />
				<span class="pl-2">store.js</span>
			</div>
			<div class="pl-11 flex mb-3">
				<FolderIcon />
				<span class="pl-2">sidenavigation</span>
			</div>
			<div class="pl-16 flex mb-3">
				<FolderIcon />
				<span class="pl-2">icons</span>
			</div>
			<div class="pl-16 flex mb-3">
				<JsIcon />
				<span class="pl-2">data.js</span>
			</div>
			<div class="pl-16 flex mb-3">
				<SvelteIcon />
				<span class="pl-2">Header.svelte</span>
			</div>
			<div class="pl-16 flex mb-3">
				<SvelteIcon />
				<span class="pl-2">Index.svelte</span>
			</div>
			<div class="pl-16 flex mb-3">
				<SvelteIcon />
				<span class="pl-2">Items.svelte</span>
			</div>
			<div class="pl-11 flex mb-3">
				<FolderIcon />
				<span class="pl-2">topnavigation</span>
			</div>
			<div class="pl-16 flex mb-3">
				<SvelteIcon />
				<span class="pl-2">Index.svelte</span>
			</div>
			<div class="pl-11 flex mb-3">
				<SvelteIcon />
				<span class="pl-2">Layout.svelte</span>
			</div>
		</div>
	</section>

	<section class="mb-16 px-3 md:px-8">
		<h2 class="text-2xl font-medium">File Structure explained</h2>
		<p class="mt-5">
			We will focus on <strong>dashboard</strong> folder and its
			<strong class="pl-1">subfolders</strong> which contain all the logic.
		</p>

		<div class="mt-5 mb-12">
			<div class="flex">
				<FolderIcon /> <strong class="px-1">provider</strong>
			</div>
			<div class="flex flex-wrap md:flex-nowrap pl-6 mt-4">
				<JsIcon class="h-7 w-7" />
				<span class="px-2 font-medium">clickOutside.js</span> :
				<p class="pl-2">it handles the click outside of sidenav.</p>
			</div>
			<div class="flex flex-wrap md:flex-nowrap pl-6 mt-6">
				<SvelteIcon />
				<span class="px-2 font-medium">Overlay.svelte</span> :
				<p class="pl-2">
					displays an overlay that will only be visible on small screens to emphasize the focus on
					the sidenav when it is open
				</p>
			</div>
			<div class="flex flex-wrap md:flex-nowrap pl-6 mt-6">
				<JsIcon class="h-7 w-7" />
				<span class="px-2 font-medium">store.js</span> :
				<p class="pl-2">contains the store value for toggling sidenav state</p>
			</div>
		</div>

		<div class="mb-8">
			<div class="flex">
				<FolderIcon /> <strong class="px-1">sidenavigation</strong>
			</div>
			<div class="flex flex-wrap md:flex-nowrap pl-6 mt-4">
				<FolderIcon class="h-7 w-7" />
				<span class="px-2 font-medium">icons</span> :
				<p class="pl-1">
					As each <strong>sidenav-item</strong> has an icon, this sub-folder contains the icons of each
					sidenav-item. You don't need this folder if you are using a package for icons.
				</p>
			</div>
			<div class="flex flex-wrap md:flex-nowrap pl-6 mt-6">
				<JsIcon /> <span class="px-2 font-medium">data.js</span> :
				<p class="pl-1">
					It's in this file that you will add routes for each sidenav-item. it is an array of
					objects.
				</p>
			</div>
			<div class="flex flex-wrap mt-8 pl-8">
				<div class="md:w-4/12">
					<Snippet />
				</div>
				<ul class="pt-8 md:pl-4">
					<li class="mb-2">
						<span class="px-1">section :</span> Name of the section
					</li>
					<li class="mb-2">
						<span class="px-1">title :</span> text that indicate the route
					</li>
					<li class="mb-2">
						<span class="px-1">icon :</span> the icon, imported from
						<strong class="px-1">icons</strong> folder or from your library
					</li>
					<li class="mb-2">
						<span class="px-1">link :</span> name of the route
					</li>
				</ul>
			</div>
			<div class="flex flex-wrap md:flex-nowrap pl-6 mt-10">
				<SvelteIcon /> <span class="px-2 font-medium">Header.svelte</span> :
				<p class="pl-1">
					The<strong class="px-1">SidenavHeader</strong>component contains the logo that is
					displayed on top of the sidenav
				</p>
			</div>
			<div class="flex flex-wrap md:flex-nowrap pl-6 mt-6">
				<SvelteIcon /> <span class="px-2 font-medium">Items.svelte</span> :
				<p class="pl-1">
					This<strong class="px-1">SidenavItems</strong>component automatically generates each
					sidenav-item according to
					<strong class="px-1">data.js</strong>file
				</p>
			</div>
			<div class="flex flex-wrap md:flex-nowrap pl-6 mt-6">
				<SvelteIcon /> <span class="px-2 font-medium">Index.svelte</span> :
				<p class="pl-1">
					This <strong>Sidenavigation</strong> component contains all the logic of the sidenav.
				</p>
			</div>
		</div>

		<div>
			<div class="flex mt-8">
				<FolderIcon /> <strong class="px-1">topnavigation</strong>
			</div>
			<div class="flex flex-wrap md:flex-nowrap pl-6 mt-4">
				<SvelteIcon /> <span class="px-2 font-medium">Index.svelte</span> :
				<p class="pl-1">
					Contains the
					<strong class="px-1">Topnavigation</strong>component. You can customize it or replace it
					with your own navbar but don't forget to add a button to toggle sidenav on mobile
				</p>
			</div>
		</div>

		<div>
			<div class="flex flex-wrap md:flex-nowrap mt-8">
				<SvelteIcon /> <strong class="px-1">layout.svelte :</strong> Contains the<strong
					class="px-1">DashboardLayout</strong
				>
				component used as the layout of the application
			</div>
		</div>
	</section>

	<section class="mb-16 px-3 md:px-8">
		<h2 class="text-2xl font-medium">How it works ?</h2>
		<ul class="pl-6 list-disc mt-4">
			<li class="mb-3">
				Add your routes in the
				<strong class="px-1">dashboard/sidenavigation/data.js</strong>
				file
			</li>
			<li class="mb-3">
				If your routes don't exist yet, create your routes in the
				<strong class="px-1">routes</strong>folder
			</li>
			<li class="mb-3">
				Wrap <strong>routes/__layout.svelte</strong> with the
				<strong class="px-1">Layout</strong>component from <strong>dashboard/Layout.svelte</strong>
			</li>
		</ul>
	</section>

	<section class="mb-16 px-3 md:px-8">
		<h2 class="text-2xl font-medium">Auto Format and Linting</h2>
		<div class="mt-4">
			The dashboard is provided with <strong>eslint</strong>,
			<strong class="px-1">prettier</strong>,
			<strong class="px-1">lint-staged</strong>et
			<strong class="px-1">husky.</strong>Before each commit, the
			<strong class="px-1">pre-commit</strong>hook will be triggered to run prettier to format the
			code and eslint to analyze the code for possible errors.
		</div>
	</section>

	<section class="mb-16 px-3 md:px-8">
		<h2 class="text-2xl font-medium">Export</h2>
		<p class="mt-4">
			As there is no vendor lock-in, if you already have a dashboard, you can just copy the small
			configuration from
			<strong class="px-1">tailwind.config.cjs</strong>and paste it into your
			<strong class="px-1">tailwind.config.cjs</strong>configuration file. then copy the
			<strong class="px-1">dashboard</strong>folder into your project
		</p>
		<div class="mt-8">
			<ul class="pl-6 list-disc mt-4">
				<li class="mb-3">
					Add your routes in the
					<strong class="px-1">dashboard/sidenavigation/data.js</strong>
					file
				</li>
				<li class="mb-3">
					Replace your layout by the
					<strong class="px-1">DashboardLayout</strong> imported from
					<strong class="px-1">dashboard/Layout.svelte</strong>
				</li>
			</ul>
		</div>
	</section>

	<section class="mb-16 px-3 md:px-8">
		<h2 class="text-2xl font-medium">Customization</h2>
		<p class="mt-5">
			You can customize everything according to your preferences if it doesn't suit you. What we
			have done is just provide a solid structure for better scalability and readability of the
			code.
		</p>
		<p class="mt-5">
			The sidenav scrollbar is hidden by default but you can still scroll with the keyboards if you
			have several sidenav-items. If you are not a fan of this approach, you can always change the
			style in
			<strong class="pr-1">dashboard/sidenavigation/Index.svelte</strong>
		</p>
		<p class="mt-5">
			In the <strong> dashboard/Layout.svelte</strong> file, the
			<strong class="pl-1">Sidenavigation</strong> component has a prop
			<strong class="pl-1">mobilePosition</strong>, which indicates the positioning of the sidenav
			on mobile.
		</p>
		<p class="pt-5">This prop can have two possible values :</p>
		<ul class="pl-6 mt-4 list-disc">
			<li class="mb-3">
				<strong>left :</strong> sidenav will be aligned to the left
			</li>
			<li>
				<strong>right :</strong> sidenav will be aligned to the right
			</li>
		</ul>
	</section>
</div>
