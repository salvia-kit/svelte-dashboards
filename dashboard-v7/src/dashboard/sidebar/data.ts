import HomeIcon from './icons/HomeIcon.svelte';
import MediasIcon from './icons/MediasIcon.svelte';
import ContactIcon from './icons/ContactIcon.svelte';
import ServersIcon from './icons/ServersIcon.svelte';
import TerminalIcon from './icons/TerminalIcon.svelte';
import RecycleBinIcon from './icons/RecycleBin.svelte';
import DocumentationIcon from './icons/DocumentationIcon.svelte';

export const data = [
	{
		section: 'APPLICATIONS',
		content: [
			{
				title: 'Users',
				icon: HomeIcon,
				link: '/'
			},
			{
				title: 'Medias',
				icon: MediasIcon,
				link: '/admin/medias'
			},
			{
				title: 'Contacts',
				icon: ContactIcon,
				link: '/admin/contacts'
			}
		]
	},
	{
		section: 'MONITORING',
		content: [
			{
				title: 'Terminal',
				icon: TerminalIcon,
				link: '/admin/terminal'
			},
			{
				title: 'Recycle Bin',
				icon: RecycleBinIcon,
				link: '/admin/recycle-bin'
			},
			{
				title: 'Servers',
				icon: ServersIcon,
				link: '/admin/servers'
			}
		]
	},
	{
		section: 'GUIDES',
		content: [
			{
				title: 'Documentation',
				icon: DocumentationIcon,
				link: '/admin/documentation'
			}
		]
	}
];
