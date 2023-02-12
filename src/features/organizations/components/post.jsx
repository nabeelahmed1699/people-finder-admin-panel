import React from 'react';

// ** MUI imports
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// icons
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const ITEM_HEIGHT = 30;

const Post = ({ handleDelete, name,BIO,_id }) => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const deleteItem = () => {
		handleClose()
		handleDelete(_id)
	}
	return (
		<>
			<Stack>
				<Box
					sx={{
						'&>img': {
							maxWidth: '100%',
						},
						borderRadius: 1,
						overflow: 'hidden',
					}}
				>
					<img
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2AzaKg39KUg-xUhZhwNVvOMy2a1n2IdcmCQ&usqp=CAU'
						alt='organizations'
					/>
				</Box>
				<Stack direction='row' sx={{ mt: 1 }}>
					{!!false ? (
						<Avatar src={'sdsds'} alt={name} />
					) : (
						<Avatar>{name.charAt(0).toUpperCase()}</Avatar>
					)}
					<Stack sx={{ ml: 1,flexGrow:2 }}>
						<Stack direction='row' justifyContent='space-between' sx={{width:'100%'}}>
							<Typography fontWeight={700}>{name}</Typography>
							
								<IconButton
									aria-label='more'
									id='long-button'
									aria-controls={open ? 'long-menu' : undefined}
									aria-expanded={open ? 'true' : undefined}
									aria-haspopup='true'
									onClick={handleClick}
								>
									<MoreVertIcon />
								</IconButton>
							
						</Stack>
						<Typography paragraph variant='caption'>
							{BIO}
						</Typography>
					</Stack>
				</Stack>
			</Stack>
			<Menu
				id='long-menu'
				MenuListProps={{
					'aria-labelledby': 'long-button',
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				PaperProps={{
					style: {
						maxHeight: ITEM_HEIGHT * 4.5,
						width: '20ch',
					},
				}}
			>
				<MenuItem>
					<ListItemIcon>
						<EditOutlinedIcon fontSize='small' />
					</ListItemIcon>
					<ListItemText>Edit</ListItemText>
				</MenuItem>
				<MenuItem onClick={deleteItem}>
					<ListItemIcon>
						<DeleteOutlineIcon fontSize='small' />
					</ListItemIcon>
					<ListItemText>Delete</ListItemText>
				</MenuItem>
			</Menu>
		</>
	);
};

export default Post;
