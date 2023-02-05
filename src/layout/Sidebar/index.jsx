import React from 'react';

// ** mui imports
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Divider, IconButton, Stack } from '@mui/material';

// ** icons
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

// ** custom imports
import {  NavLink } from 'react-router-dom';
import { navlinks } from 'src/navigation';

// Constants
const drawerWidth = 240;

function Sidebar({ openDrawer, closeDrawer, drawerOpener, smallScreens }) {


	return (
		<Drawer
			variant={smallScreens ? 'temporary' : 'permanent'}
			anchor='left'
			open={drawerOpener}
			onClose={closeDrawer}
			onOpen={openDrawer}
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: drawerWidth,
					boxSizing: 'border-box',
					backgroundColor: 'dark.main',
					color: 'neutral.50',
				},
			}}
		>
			<Toolbar>
				<Stack
					direction='row'
					justifyContent='space-between'
					alignItems='center'
					sx={{ width: '100%' }}
				>
					<Box></Box>
					<Typography variant='h5' fontWeight={700}>
						People finder
					</Typography>
					{smallScreens ? (
						<IconButton onClick={closeDrawer}>
							<ArrowBackIosNewIcon />
						</IconButton>
					) : (
						<Box></Box>
					)}
				</Stack>
			</Toolbar>
			<Divider />

			{/* navlinks */}
			<Stack sx={{ gap: 1, p: 2 }}>
				{navlinks.map((link) => {
					return (
						<NavLink key={link.label} to={link.route}>
							{({ isActive }) => (
								<Box
									sx={{
										width: '100%',
										p: 1,
										borderRadius: 1,
										justifyContent: 'flex-start',
										backgroundColor: isActive && 'background.paper',
										'&:hover .sidebar-text': {
											ml: 3,
										},
									}}
								>
									<Stack direction='row' alignItems='center'>
										{link.icon(isActive)}
										<Typography
											color={isActive ? 'dark.main':'neutral.50'}
											sx={{ ml: 2, transition: 'margin-left .45s ease',textTransform:'capitalize' }}
											className='sidebar-text'
										>
											{link.label}
										</Typography>
									</Stack>
								</Box>
							)}
						</NavLink>
					);
				})}
			</Stack>
		</Drawer>
	);
}

export default Sidebar;
