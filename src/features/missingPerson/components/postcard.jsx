import * as React from 'react';
import moment from 'moment';

// ** MUI IMPORTS
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { Table, TableContainer, TableRow, TableCell } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// icons
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const ITEM_HEIGHT = 30;

export default function PostCard({
	loading,
	handleDelete,
	person,
	handleViewMore,
	handleEdit,
}) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	console.log({ person });
	if (loading) {
		return <CircularProgress />;
	}
	return (
		<>
			<Card
				sx={{
					'& .MuiCardHeader-root, & .MuiCardContent-root': {
						padding: 2,
					},
				}}
			>
				<CardHeader
					avatar={
						person.organizationInfo ? (
							<Avatar
								src={person.posterInfo.photo}
								alt={person.posterInfo.name}
							/>
						) : (
							<Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
								R
							</Avatar>
						)
					}
					action={
						<IconButton aria-label='settings' onClick={handleClick}>
							<MoreVertIcon />
						</IconButton>
					}
					title={person.posterInfo.name}
					subheader={moment(person.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
				/>

				{person.photo && (
					<CardMedia
						component='img'
						height='194'
						image={person.photo}
						alt={person.name}
					/>
				)}
				<CardContent>
					<TableContainer>
						<Table
							sx={{
								'& .MuiTableCell-root': {
									p: 0.5,
								},
							}}
						>
							<TableBody>
								<TableRow>
									<TableCell>Name</TableCell>
									<TableCell>{person.name}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>Age</TableCell>
									<TableCell>{person.age}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>Father Name</TableCell>
									<TableCell>{person.fatherName}</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
					<Typography variant='body2' color='text.secondary'>
						{person.description}
					</Typography>
					<Stack direction='row' justifyContent='flex-end' sx={{ mt: 2 }}>
						<Button onClick={() => handleViewMore(person)}>View details</Button>
					</Stack>
				</CardContent>
			</Card>
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
				<MenuItem onClick={() => {handleEdit(person); handleClose()}}>
					<ListItemIcon>
						<EditOutlinedIcon fontSize='small' />
					</ListItemIcon>
					<ListItemText>Edit</ListItemText>
				</MenuItem>
				<MenuItem onClick={() => { handleDelete(person._id); handleClose()}}>
					<ListItemIcon>
						<DeleteOutlineIcon fontSize='small' />
					</ListItemIcon>
					<ListItemText>Delete</ListItemText>
				</MenuItem>
			</Menu>
		</>
	);
}
