import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PunchClockIcon from '@mui/icons-material/PunchClock';

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
		label: 'missing people',
		icon:(isActive)=> <ReceiptIcon sx={{ color: isActive ? activeColor : nonActive }}  />,
		route: '/missing-people',
	},
	{
		label: 'founded people',
		icon:(isActive)=> <PunchClockIcon sx={{ color: isActive ? activeColor : nonActive }}  />,
		route: '/founded-people',
	},
];
