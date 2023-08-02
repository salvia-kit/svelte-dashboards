import EventsIcon from './icons/EventsIcon.svelte';
import GuidesIcon from './icons/GuidesIcon.svelte';
import MessagesIcon from './icons/MessagesIcon.svelte';
import PicturesIcon from './icons/PicturesIcon.svelte';
import DocumentsIcon from './icons/DocumentsIcon.svelte';
import StatisticsIcon from './icons/StatisticsIcon.svelte';

export const data = [
	{
		section: 'Documents',
		icon: DocumentsIcon,
		content: [
			{
				title: 'Taxes',
				link: '/documents/taxes'
			},
			{
				title: 'Travel',
				link: '/documents/travel'
			},
			{
				title: 'Insurance',
				link: '/documents/insurance'
			}
		]
	},
	{
		section: 'Messages',
		icon: MessagesIcon,
		content: [
			{
				title: 'Unbox',
				link: '/messages/unbox'
			},
			{
				title: 'Unread',
				link: '/messages/unread'
			},
			{
				title: 'Archived',
				link: '/messages/archived'
			}
		]
	},
	{
		section: 'Pictures',
		icon: PicturesIcon,
		content: [
			{
				title: 'Vacations',
				link: '/pictures/vacations'
			},
			{
				title: 'Anniversary',
				link: '/pictures/anniversary'
			},
			{
				title: 'University',
				link: '/pictures/university'
			}
		]
	},
	{
		section: 'Statistics',
		icon: StatisticsIcon,
		content: [
			{
				title: 'Finances',
				link: '/statistics/finances'
			},
			{
				title: 'Call Stats',
				link: '/statistics/call-stats'
			},
			{
				title: 'Trip Logs',
				link: '/statistics/trip-logs'
			}
		]
	},
	{
		section: 'Events',
		icon: EventsIcon,
		content: [
			{
				title: 'Weddings',
				link: '/events/weddings'
			},
			{
				title: 'Networking',
				link: '/events/networking'
			}
		]
	},
	{
		section: 'Guides',
		icon: GuidesIcon,
		content: [
			{
				title: 'Documentation',
				link: '/guides/documentation'
			}
		]
	}
];

