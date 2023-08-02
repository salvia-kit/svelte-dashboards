import HomeIcon from './icons/HomeIcon.svelte';
import BillsIcon from './icons/BillsIcon.svelte';
import AnalyticsIcon from './icons/AnalyticsIcon.svelte';
import MonitoringIcon from './icons/MonitoringIcon.svelte';
import DemographicsIcon from './icons/DemographicsIcon.svelte';
import ApplicationsIcon from './icons/ApplicationsIcon.svelte';
import DocumentationIcon from './icons/DocumentationIcon.svelte';

export const data = [
	{
		title: 'Home',
		icon: HomeIcon,
		link: '/'
	},
	{
		title: 'Bills',
		icon: BillsIcon,
		link: '/admin/bills'
	},
	{
		title: 'Applications',
		icon: ApplicationsIcon,
		link: '/admin/applications'
	},
	{
		title: 'Monitoring',
		icon: MonitoringIcon,
		link: '/admin/monitoring'
	},
	{
		title: 'Demographics',
		icon: DemographicsIcon,
		link: '/admin/demographics'
	},
	{
		title: 'Analytics',
		icon: AnalyticsIcon,
		link: '/admin/analytics'
	},
	{
		title: 'Documentation',
		icon: DocumentationIcon,
		link: '/admin/documentation'
	}
];
