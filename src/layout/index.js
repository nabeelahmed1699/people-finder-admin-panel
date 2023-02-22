import React, { useState } from 'react';
import { Box, useMediaQuery, Toolbar } from '@mui/material';
import { Outlet } from 'react-router-dom';

// ** custom imports
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const drawerWidth = 240;

const Layout = () => {
	const smallScreens = useMediaQuery('(max-width:900px)');
	const [drawer, setDrawer] = useState(() => (smallScreens ? false : true));
	const openDrawer = () => setDrawer(true);
	const closeDrawer = () => setDrawer(false);
	return (
		<Box sx={{ display: 'flex' }}>
			<Topbar
				drawerWidth={drawerWidth}
				openDrawer={openDrawer}
				smallScreens={smallScreens}
			/>
			<Sidebar
				smallScreens={smallScreens}
				drawerOpener={drawer}
				openDrawer={openDrawer}
				closeDrawer={closeDrawer}
			/>
			<Box
				component='main'
				sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
			>
				<Toolbar />
				{/* main content here */}
				<Outlet />
			</Box>
		</Box>
	);
};

export default Layout;
