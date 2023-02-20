import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { Table, TableContainer, TableRow, TableCell } from '@mui/material';
import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import TableBody from '@mui/material/TableBody';
// icons
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const ITEM_HEIGHT = 30;

export default function PostCard({ loading, handleDelete, person }) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
console.log({person})
	if (loading) {
		return <CircularProgress />;
	}
	return (
		<>
			<Card>
				<CardHeader
					avatar={
						<Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
							R
						</Avatar>
					}
					action={
						<IconButton aria-label='settings' onClick={handleClick}>
							<MoreVertIcon />
						</IconButton>
					}
					title='Shrimp and Chorizo Paella'
					subheader='September 14, 2016'
				/>
				<CardMedia
					component='img'
					height='194'
					image='/static/images/cards/paella.jpg'
					alt='Paella dish'
				/>
				<CardContent>
					<TableContainer>
						<Table>
							<TableBody>
								<TableRow>
									<TableCell>Name</TableCell>
									<TableCell>Nabeel Ahmed</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>Age</TableCell>
									<TableCell>23</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
					<Typography variant='body2' color='text.secondary'>
						This impressive paella is a perfect party dish and a fun meal to
						cook together with your guests. Add 1 cup of frozen peas along with
						the mussels, if you like.
					</Typography>
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
				<MenuItem>
					<ListItemIcon>
						<EditOutlinedIcon fontSize='small' />
					</ListItemIcon>
					<ListItemText>Edit</ListItemText>
				</MenuItem>
				<MenuItem onClick={handleDelete}>
					<ListItemIcon>
						<DeleteOutlineIcon fontSize='small' />
					</ListItemIcon>
					<ListItemText>Delete</ListItemText>
				</MenuItem>
			</Menu>
		</>
	);
}
