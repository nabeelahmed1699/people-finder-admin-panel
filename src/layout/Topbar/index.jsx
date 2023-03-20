
// ** mui imports
import { AppBar, Box, IconButton, Toolbar,  } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import { useTranslation } from 'react-i18next';

// **icons
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SearchIcon from '@mui/icons-material/Search';

// ** custom imports

import UserDropdown from 'src/components/UserDropdown';

const Topbar = ({ smallScreens, drawerWidth, openDrawer }) => {


	const { t } = useTranslation();

	return (
		<>
			<AppBar
				position='fixed'
				sx={{
					width: smallScreens ? '100%' : `calc(100% - ${drawerWidth}px)`,
					ml: smallScreens ? 0 : `${drawerWidth}px`,
					backgroundColor: 'primary.main',
					backgroundImage: 'none',
					boxShadow: 1,
				}}
			>
				<Toolbar sx={{ width: '100%' }}>
					{smallScreens && (
						<IconButton onClick={openDrawer}>
							<MenuIcon />
						</IconButton>
					)}

					<Box display='flex' justifyContent='space-between' p={2} width='100%'>
						{/* SEARCH BAR */}
						<Box
							display='flex'
							backgroundColor='dark.dark'
							boxShadow={1}
							borderRadius='3px'
						>
							<InputBase sx={{ ml: 2, flex: 1,color:'grey.50' }} placeholder={t('search')} />
							<IconButton type='button' sx={{ p: 1 }}>
								<SearchIcon />
							</IconButton>
						</Box>

						{/* ICONS */}
						<Box display='flex'>
							<IconButton>
							<NotificationsOutlinedIcon sx={{color:'dark.main'}} />
							</IconButton>
							<UserDropdown/>
						</Box>
					</Box>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Topbar;
