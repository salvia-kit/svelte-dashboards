import HomeIcon from './icons/HomeIcon.svelte';
import MediasIcon from './icons/MediasIcon.svelte';
import ContactIcon from './icons/ContactIcon.svelte';
import ServersIcon from './icons/ServersIcon.svelte';
import TerminalIcon from './icons/TerminalIcon.svelte';
import SettingsIcon from './icons/SettingsIcon.svelte';
import RecycleBinIcon from './icons/RecycleBin.svelte';
import DocumentationIcon from './icons/DocumentationIcon.svelte';

export const data = [
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
	},
	{
		title: 'Servers',
		icon: ServersIcon,
		link: '/admin/servers'
	},
	{
		title: 'Settings',
		icon: SettingsIcon,
		link: '/admin/settings'
	},
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
		title: 'Documentation',
		icon: DocumentationIcon,
		link: '/admin/documentation'
	}
];
