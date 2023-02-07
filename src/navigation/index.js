import DashboardIcon from '@mui/icons-material/Dashboard';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import HailIcon from '@mui/icons-material/Hail';
import PeopleIcon from '@mui/icons-material/People';

const nonActive = 'neutral.50';
const activeColor = 'dark.main';
export const navlinks = [
	{
		label: 'dashboard',
		icon: (isActive) => (
			<DashboardIcon sx={{ color: isActive ? activeColor : nonActive }} />
		),
		route: '/',
	},
	{
		label: 'organizations',
		icon: (isActive) => (
			<Diversity3Icon sx={{ color: isActive ? activeColor : nonActive }} />
		),
		route: '/organizations',
	},
	{
		label: 'missing people',
		icon:(isActive)=> <PeopleIcon sx={{ color: isActive ? activeColor : nonActive }}  />,
		route: '/missing-people',
	},
	{
		label: 'founded people',
		icon:(isActive)=> <HailIcon sx={{ color: isActive ? activeColor : nonActive }}  />,
		route: '/founded-people',
	},
];
