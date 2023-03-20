// ** React Imports
import { useState, Fragment } from 'react';

// ** Next Import
// import { useRouter } from 'next/router'

// ** MUI Imports
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

// ** Icons Imports
import EmailOutline from 'mdi-material-ui/EmailOutline';
import LogoutVariant from 'mdi-material-ui/LogoutVariant';
import AccountOutline from 'mdi-material-ui/AccountOutline';
import MessageOutline from 'mdi-material-ui/MessageOutline';

// ** Context
import { useAuth } from 'src/hooks/useAuth';
import { useEffect } from 'react';
import { authConfig } from 'src/constants/configs/auth';

// ** Styled Components
const BadgeContentSpan = styled('span')(({ theme }) => ({
	width: 8,
	height: 8,
	borderRadius: '50%',
	backgroundColor: theme.palette.success.main,
	boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
}));

const UserDropdown = (props) => {
	// ** Props
	// const { settings } = props

	// ** States
	const [anchorEl, setAnchorEl] = useState(null);

	// ** Hooks
	const {data :user } = JSON.parse(localStorage.getItem(authConfig.userData))
	const { logout } = useAuth();
console.log({user})
	// ** Vars
	const direction = 'ltr';

	const handleDropdownOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleDropdownClose = (url) => {
		if (url) {
			// router.push(url)
		}
		setAnchorEl(null);
	};


	const styles = {
		py: 2,
		px: 4,
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		color: 'text.primary',
		textDecoration: 'none',
		'& svg': {
			fontSize: '1.375rem',
			color: 'text.secondary',
		},
	};

	const handleLogout = () => {
		handleDropdownClose();
		logout();
	};
	return (
		<Fragment>
			<Badge
				overlap='circular'
				onClick={handleDropdownOpen}
				sx={{ ml: 2, cursor: 'pointer' }}
				badgeContent={<BadgeContentSpan />}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
			>
				<Avatar>{user.name.charAt(0)}</Avatar>
			</Badge>
			<Menu
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={() => handleDropdownClose()}
				sx={{ '& .MuiMenu-paper': { width: 230, marginTop: 4 } }}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: direction === 'ltr' ? 'right' : 'left',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: direction === 'ltr' ? 'right' : 'left',
				}}
			>
				<Box sx={{ pt: 2, pb: 3, px: 2 }}>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<Badge
							overlap='circular'
							badgeContent={<BadgeContentSpan />}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'right',
							}}
						>
							<Avatar>{user.name.charAt(0)}</Avatar>
						</Badge>
						<Box
							sx={{
								display: 'flex',
								marginLeft: 3,
								alignItems: 'flex-start',
								flexDirection: 'column',
							}}
						>
							<Typography sx={{ fontWeight: 600 }}>{user.name}</Typography>
							<Typography
								variant='body2'
								sx={{ fontSize: '0.8rem', color: 'text.disabled' }}
							>
								Admin
							</Typography>
						</Box>
					</Box>
				</Box>
				<Divider sx={{ mt: 0, mb: 1 }} />
				<MenuItem
					sx={{ p: 0 }}
					onClick={() => handleDropdownClose('/apps/user/view/12')}
				>
					<Box sx={styles}>
						<AccountOutline sx={{ marginRight: 2 }} />
						Profile
					</Box>
				</MenuItem>
				<MenuItem
					sx={{ p: 0 }}
					onClick={() => handleDropdownClose('/apps/email')}
				>
					<Box sx={styles}>
						<EmailOutline sx={{ marginRight: 2 }} />
						Inbox
					</Box>
				</MenuItem>
				<MenuItem
					sx={{ p: 0 }}
					onClick={() => handleDropdownClose('/apps/chat')}
				>
					<Box sx={styles}>
						<MessageOutline sx={{ marginRight: 2 }} />
						Chat
					</Box>
				</MenuItem>
				<Divider />
				<MenuItem sx={{ py: 2 }} onClick={handleLogout}>
					<LogoutVariant
						sx={{
							marginRight: 2,
							fontSize: '1.375rem',
							color: 'text.secondary',
						}}
					/>
					Logout
				</MenuItem>
			</Menu>
		</Fragment>
	);
};

export default UserDropdown;
