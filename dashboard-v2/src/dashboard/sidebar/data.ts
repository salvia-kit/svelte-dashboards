import UxIcon from './icons/UxIcon.svelte';
import ArIcon from './icons/ArIcon.svelte';
import VideosIcon from './icons/VideosIcon.svelte';
import AllAppsIcon from './icons/AllAppsIcon.svelte';
import UpdatesIcon from './icons/UpdatesIcon.svelte';
import PhotographyIcon from './icons/PhotographyIcon.svelte';
import IllustrationIcon from './icons/IllustrationIcon.svelte';
import GraphicDesignIcon from './icons/GraphicDesignIcon.svelte';
import DocumentationIcon from './icons/DocumentationIcon.svelte';

export const data = [
	{
		section: 'Apps',
		content: [
			{
				title: 'All Apps',
				icon: AllAppsIcon,
				link: '/'
			},
			{
				title: 'Updates',
				icon: UpdatesIcon,
				link: '/admin/updates'
			}
		]
	},
	{
		section: 'Categories',
		content: [
			{
				title: 'Photography',
				icon: PhotographyIcon,
				link: '/admin/photography'
			},
			{
				title: 'Graphic Design',
				icon: GraphicDesignIcon,
				link: '/admin/graphic-design'
			},
			{
				title: 'Videos',
				icon: VideosIcon,
				link: '/admin/videos'
			},
			{
				title: 'Illustrations',
				icon: IllustrationIcon,
				link: '/admin/illustration'
			},
			{
				title: 'UI/UX',
				icon: UxIcon,
				link: '/admin/ux'
			},
			{
				title: '3D/AR',
				icon: ArIcon,
				link: '/admin/ar'
			}
		]
	},
	{
		section: 'Guides',
		content: [
			{
				title: 'Documentation',
				icon: DocumentationIcon,
				link: '/admin/documentation'
			}
		]
	}
];
